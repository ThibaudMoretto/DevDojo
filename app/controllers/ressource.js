const ressourceDatamapper = require("../datamappers/ressource");
const ressourceRelatesTechnologyDatamapper = require("../datamappers/ressource_relates_technology");
const ressourceRequiresTechnologyDatamapper = require("../datamappers/ressource_requires_technology");
const authorDatamapper = require("../datamappers/author");
const technologyDatamapper = require("../datamappers/technology");
const languageDatamapper = require("../datamappers/language");
const difficultyDatamapper = require("../datamappers/difficulty");
const ressource_typeDatamapper = require("../datamappers/ressource_type");
const redis = require('../client-redis');

module.exports = {

    async list(_, response) {
        // C'est ici qu'on utilise le try catch, pas dans le datamapper
        try {
            const ressources = await ressourceDatamapper.getAll();

            //Pour chaque ressource, on ajoute son auteur dans la réponse
            for (const ressource of ressources) {
                ressource.author = await authorDatamapper.getById(ressource.author_id);
                ressource.technologiesRelated = await technologyDatamapper.getRessourceRelated(ressource.id);
                ressource.technologiesRequired = await technologyDatamapper.getRessourceNeeds(ressource.id);
                //Demandé par le front, ajout du name du language + difficulty + ressource_type
                if (ressource.language_id) {
                    const language = await languageDatamapper.getOne(ressource.language_id);
                    ressource.language = language.name;
                }
                if (ressource.difficulty_id) {
                    const difficulty = await difficultyDatamapper.getOne(ressource.difficulty_id);
                    ressource.difficulty = difficulty.name;
                }
                if (ressource.ressource_type_id) {
                    const ressource_type = await ressource_typeDatamapper.getOne(ressource.ressource_type_id);
                    ressource.ressource_type = ressource_type.name;
                }

            }

            response.json({
                data: ressources
            });
        } catch (error) {
            console.trace(error);
            response.json({
                data: [],
                error: `Erreur fatale ! ${error}`
            });
        }
    },

    async getOne(request, response, next) {
        try {
            const ressource = await ressourceDatamapper.getById(request.params.id);
            //Si aucun résultat, on passe au middleware suivant (jusqu'à la 404)
            if (!ressource) {
                return next();
            }

            //On ajoute l'auteur de la ressource à la réponse
            ressource.author = await authorDatamapper.getById(ressource.author_id)

            //On ajoute les technologies relatives et prérequises
            ressource.technologiesRelated = await technologyDatamapper.getRessourceRelated(ressource.id);
            ressource.technologiesRequired = await technologyDatamapper.getRessourceNeeds(ressource.id);

            //Demandé par le front, ajout du name du language + difficulty + ressource_type
            if (ressource.language_id) {
                const language = await languageDatamapper.getOne(ressource.language_id);
                ressource.language = language.name;
            }
            if (ressource.difficulty_id) {
                const difficulty = await difficultyDatamapper.getOne(ressource.difficulty_id);
                ressource.difficulty = difficulty.name;
            }
            if (ressource.ressource_type_id) {
                const ressource_type = await ressource_typeDatamapper.getOne(ressource.ressource_type_id);
                ressource.ressource_type = ressource_type.name;
            }

            response.json({
                data: ressource
            });
        } catch (error) {
            console.trace(error);
            response.json({
                data: [],
                error: `Erreur fatale ! ${error}`
            });
        }
    },

    async add(request, response) {
        try {
            //Le front envoie des strings vide quand il n'y a pas d'info, donc si une donnée du body est une string vide, alors je remplace par null
            for (const key in request.body) {
                if(request.body[key]===''){
                    request.body[key] = null;
                }
            }

            const ressource = await ressourceDatamapper.add(request.body);

            //On lie la ressource à toutes les technologies pré-requises
            //Si on a des tecehnologies required
            if (request.body.technologiesRequired) {
                for (const tech of request.body.technologiesRequired) {
                    await ressourceDatamapper.linkToRequiredTechnology(ressource.id, tech.id)
                }
            }

            //On lie la ressource à toutes les technologies relatives
            //Si on a des technologies related
            if (request.body.technologiesRelated) {
                for (const tech of request.body.technologiesRelated) {
                    await ressourceDatamapper.linkToRelatedTechnology(ressource.id, tech.id)
                }
            }

            //On supprime le cache de toutes les ressources
            redis.del('erc:ressource-');

            response.json({
                data: ressource
            });

        } catch (error) {
            console.trace(error);
            // Grâce au try catch on a maitrise toute erreur qui peut intervenir dans le traitement de la route, à l'intérieur du controller. Ce qui permet d'analyser ces erreurs et d'afficher un message qui colle au plus près de la signification de l'erreur.
            // Dans notre cas, il peut y avoir un retour d'erreur duplicate de la BDD.
            // Au lieu de faire une première requête de select pour vérifier que la ressource n'est pas déjà présente, et comme on a utilisé la contrainte unique en BDD, on peut faire en sorte de récupérer le code erreur 23505 qui est et sera toujours le code d'erreur de "duplicate entry". Cela nous permet de personnaliser l'erreur et surtout d'en faire une erreur utilisateur plutôt q'une erreur serveur.
            if (error.code === '23505') {
                return response.status(400).json({
                    data: [],
                    error: `Cette ressource existe déjà dans la base donnée, veuillez utiliser un titre différent`
                });
            }

            response.status(500).json({
                data: [],
                error: `Désolé une erreur serveur est survenue, veuillez réessayer ultérieurement.`
            });
        }
    },

    async update(request, response, next) {

        try {
            //Avant de mettre à jour, on vérifie que la ressource existe
            const ressource = await ressourceDatamapper.getById(request.params.id)

            if (!ressource) {
                return next();
            }

            //Le front envoie des strings vide quand il n'y a pas d'info, donc si une donnée du body est une string vide, alors je remplace par null
            for (const key in request.body) {
                if(request.body[key]===''){
                    request.body[key] = null;
                }
            }

            const updateData = request.body;

            const updateRessource = await ressourceDatamapper.update({
                ...updateData
            }, ressource.id);

            //On lie la ressource à toutes les technologies pré-requises
            //Si on a des technologies required à modifier
            if (updateData.technologiesRelated) {
                const updatedTech = [];
                //Pour toutes les techs à mettre à jour, on va vérifier si la relation ressource/tech existe en base. Sinon, on la crée.
                for (const tech of updateData.technologiesRelated) {
                    const relationExists = await ressourceRelatesTechnologyDatamapper.getOne(ressource.id, tech.id);

                    //Si la relation n'existe pas
                    if (!relationExists) {
                        ressourceDatamapper.linkToRelatedTechnology(ressource.id, tech.id)
                    }

                    //On construit le tableau d'ID dont on va se servir pour comparer les relations en base et les technologies dans le jeu de données à mettre à jour
                    updatedTech.push(parseInt(tech.id));
                }

                //Pour toutes les relations en base, on va vérifier qu'elle font partie des data à mettre à jour. Sinon on supprime.
                const relations = await ressourceRelatesTechnologyDatamapper.getAllRelationsByRessource(ressource.id);

                for (const relation of relations) {
                    if (!updatedTech.includes(relation.technology_id)) {
                        ressourceRelatesTechnologyDatamapper.delete(ressource.id, relation.technology_id)
                    }
                }

            }

            if (updateData.technologiesRequired) {
                const updatedTech = [];
                //Pour toutes les techs à mettre à jour, on va vérifier si la relation ressource/tech existe en base. Sinon, on la crée.
                for (const tech of updateData.technologiesRequired) {
                    const relationExists = await ressourceRequiresTechnologyDatamapper.getOne(ressource.id, tech.id);

                    //Si la relation n'existe pas
                    if (!relationExists) {
                        ressourceDatamapper.linkToRequiredTechnology(ressource.id, tech.id)
                    }

                    //On construit le tableau d'ID dont on va se servir pour comparer les relations en base et les technologies dans le jeu de données à mettre à jour
                    updatedTech.push(parseInt(tech.id));
                }

                //Pour toutes les relations en base, on va vérifier qu'elle font partie des data à mettre à jour. Sinon on supprime.
                const relations = await ressourceRequiresTechnologyDatamapper.getAllRequirementsByRessource(ressource.id);

                for (const relation of relations) {
                    if (!updatedTech.includes(relation.technology_id)) {
                        ressourceRequiresTechnologyDatamapper.delete(ressource.id, relation.technology_id)
                    }
                }

            }

            //On supprime le cache de la ressource mise à jour, ainsi que le cache de toutes les ressources
            redis.del('erc:ressource-' + ressource.id);
            redis.del('erc:ressource-');

            response.json({
                data: updateRessource
            })
        } catch (error) {
            console.error(`message ` + error)
        }
    },

    async delete(request, response) {
        try {

            await ressourceDatamapper.delete(parseInt(request.params.id), () => {
                response.json({
                    data: `Ressource supprimée`
                })
            })

            //On supprime le cache de la ressource supprimée ainsi que le cache de toutes les ressources
            redis.del('erc:ressource-' + request.params.id);
            redis.del('erc:ressource-');

        } catch (error) {
            console.error(`message ` + error)
        }
    }

}