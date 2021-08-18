const ressourceDatamapper = require("../datamappers/ressource")
const authorDatamapper = require("../datamappers/author")


module.exports = {

    async ressourceList(_, response) {
        // C'est ici qu'on utilise le try catch, pas dans le datamapper
        try {
            const ressources = await ressourceDatamapper.getAll();

            //Pour chaque ressource, on ajoute son auteur dans la réponse
            for (const ressource of ressources) {
                ressource.author = await authorDatamapper.getById(ressource.author_id)
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

    async getOneRessource(request, response, next) {
        try {
            const ressource = await ressourceDatamapper.getById(request.params.id);
            //Si aucun résultat, on passe au middleware suivant (jusqu'à la 404)
            if (!ressource) {
                return next();
            }

            //On ajoute l'auteur de la ressource à la réponse
            ressource.author = await authorDatamapper.getById(ressource.author_id)

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

    addRessource() {

    }

}