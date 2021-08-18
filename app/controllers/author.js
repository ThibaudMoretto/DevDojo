const authorDatamapper = require("../datamappers/author")


module.exports = {

    async authorList(_, response) {
        // C'est ici qu'on utilise le try catch, pas dans le datamapper
        try {
            const authors = await authorDatamapper.getAll();
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

    async getOneAuthor(request, response, next) {
        try {
            const author = await authorDatamapper.getById(request.params.id);
            //Si aucun résultat, on passe au middleware suivant (jusqu'à la 404)
            if (!author) {
                return next();
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
    }

}