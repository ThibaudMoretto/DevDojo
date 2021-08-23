const authorDatamapper = require("../datamappers/author");
const ressourceDatamapper = require('../datamappers/ressource');
const technologyDatamapper = require('../datamappers/technology')

module.exports = {

    async list(_, response) {
        // C'est ici qu'on utilise le try catch, pas dans le datamapper
        try {
            const authors = await authorDatamapper.getAll();

            for (const author of authors) {
                author.ressource = await ressourceDatamapper.getByAuthorId(author.id);
                for (const ressource of author.ressource) {
                    ressource.technologiesRelated = await technologyDatamapper.getRessourceRelated(ressource.id);
                    ressource.technologiesNeeded = await technologyDatamapper.getRessourceNeeds(ressource.id)
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

            const ressources = await ressourceDatamapper.getByAuthorId(request.params.id)
            if (ressources) {
                author.ressource = ressources;
                for (const ressource of author.ressource) {
                    ressource.technologiesRelated = await technologyDatamapper.getRessourceRelated(ressource.id);
                    ressource.technologiesNeeded = await technologyDatamapper.getRessourceNeeds(ressource.id)
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

    async delete(request, response) {
        try {
            await authorDatamapper.delete(parseInt(request.params.id), () => {
                response.json({
                    data: `Auteur supprimé`
                })
            })
        } catch (error) {
            console.error(`message ` + error)
        }
    }


}