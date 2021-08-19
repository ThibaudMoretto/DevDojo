const authorDatamapper = require("../datamappers/author");
const ressourceDatamapper = require('../datamappers/ressource');
const technologyDatamapper = require('../datamappers/technology')

module.exports = {

    async authorList(_, response) {
        // C'est ici qu'on utilise le try catch, pas dans le datamapper
        try {
            const authors = await authorDatamapper.getAll();

            for (const author of authors) {
                author.ressource = await ressourceDatamapper.getByAuthorId(author.id)
                author.technology = await technologyDatamapper.getByAuthorId(author.id)
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

    async getOneAuthor(request, response, next) {
        try {
            const author = await authorDatamapper.getById(request.params.id);
            //Si aucun résultat, on passe au middleware suivant (jusqu'à la 404)
            if (!author) {
                return next();
            }

            const ressources = await ressourceDatamapper.getByAuthorId(request.params.id)
            if(ressources) {
                author.ressource = ressources
            }

            const technologies = await technologyDatamapper.getByAuthorId(request.params.id)
            if(technologies) {
                author.technology = technologies
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