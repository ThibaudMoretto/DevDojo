const authorDatamapper = require("../datamappers/author");
const ressourceDatamapper = require('../datamappers/ressource');
const technologyDatamapper = require('../datamappers/technology');
const authorRelatesTechnologyDatamapper = require('../datamappers/author_relates_technology');
const languageDatamapper = require("../datamappers/language");
const difficultyDatamapper = require("../datamappers/difficulty");
const ressource_typeDatamapper = require("../datamappers/ressource_type");
const redis = require('../client-redis');


module.exports = {

    async list(_, response) {
        // C'est ici qu'on utilise le try catch, pas dans le datamapper
        try {
            const authors = await authorDatamapper.getAll();

            for (const author of authors) {
                author.mainTechnologies = await technologyDatamapper.getAuthorTechnologies(author.id)
                author.ressource = await ressourceDatamapper.getByAuthorId(author.id);
                for (const ressource of author.ressource) {
                    ressource.technologiesRelated = await technologyDatamapper.getRessourceRelated(ressource.id);
                    ressource.technologiesNeeded = await technologyDatamapper.getRessourceNeeds(ressource.id)

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

            }
            response.json({
                data: authors
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
            const author = await authorDatamapper.getById(request.params.id);
            //Si aucun résultat, on passe au middleware suivant (jusqu'à la 404)
            if (!author) {
                return next();
            }

            author.mainTechnologies = await technologyDatamapper.getAuthorTechnologies(request.params.id)

            const ressources = await ressourceDatamapper.getByAuthorId(request.params.id)
            if (ressources) {
                author.ressource = ressources;
                for (const ressource of author.ressource) {
                    ressource.technologiesRelated = await technologyDatamapper.getRessourceRelated(ressource.id);
                    ressource.technologiesNeeded = await technologyDatamapper.getRessourceNeeds(ressource.id)

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
            }

            response.json({
                data: author
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
            const author = await authorDatamapper.add(request.body);

            if (request.body.mainTechnologies) {
                for (const tech of request.body.mainTechnologies) {
                    await authorRelatesTechnologyDatamapper.linkToAuthor(author.id, tech.id)
                }
            }

            //On supprime le cache de toutes les ressources
            redis.del('erc:author-');

            response.json({
                data: author
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

    async update(request, response) {
        try {
            //Avant de mettre à jour, on vérifie que l'auteur existe
            const author = await authorDatamapper.getById(request.params.id)

            if (!author) {
                return next();
            }

            const updateData = request.body;

            const updateAuthor = await authorDatamapper.update({
                ...updateData
            }, author.id);


            if (updateData.mainTechnologies) {
                const updatedTech = [];
                //Pour toutes les techs à mettre à jour, on va vérifier si la relation author/tech existe en base. Sinon, on la crée.
                for (const tech of updateData.mainTechnologies) {
                    const relationExists = await authorRelatesTechnologyDatamapper.getOne(author.id, tech.id);

                    //Si la relation n'existe pas
                    if (!relationExists) {
                        authorRelatesTechnologyDatamapper.linkToAuthor(author.id, tech.id)
                    }

                    //On construit le tableau d'ID dont on va se servir pour comparer les relations en base et les technologies dans le jeu de données à mettre à jour
                    updatedTech.push(parseInt(tech.id));
                }

                //Pour toutes les relations en base, on va vérifier qu'elle font partie des data à mettre à jour. Sinon on supprime.
                const relations = await authorRelatesTechnologyDatamapper.getByAuthorId(author.id);

                for (const relation of relations) {
                    if (!updatedTech.includes(relation.technology_id)) {
                        authorRelatesTechnologyDatamapper.delete(author.id, relation.technology_id)
                    }
                }
            }

            //On supprime le cache de l'auteur mis à jour, ainsi que le cache de tous les auteurs
            redis.del('erc:author-' + author.id);
            redis.del('erc:author-');

            response.json({
                data: updateAuthor
            })
        } catch (error) {
            console.error(`message ` + error)
        }
    },

    async delete(request, response) {
        try {
            await authorDatamapper.delete(parseInt(request.params.id), () => {
                response.json({
                    data: `Auteur supprimé`
                })
            })

            //On supprime le cache de l'auteur supprimé, ainsi que le cache de tous les auteurs
            redis.del('erc:author-' + request.params.id);
            redis.del('erc:author-');

        } catch (error) {
            console.error(`message ` + error)
        }
    }


}