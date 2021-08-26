const ressourceDatamapper = require("../datamappers/ressource")
const authorDatamapper = require("../datamappers/author")
const technologyDatamapper = require("../datamappers/technology")


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

            const updateData = request.body;

            const updateRessource = await ressourceDatamapper.update({
                ...updateData
            }, ressource.id);

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
        } catch (error) {
            console.error(`message ` + error)
        }
    }

}