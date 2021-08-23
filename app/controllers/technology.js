const technologyDatamapper = require("../datamappers/technology")


module.exports = {

    async list(_, response) {
        try {
            const technologies = await technologyDatamapper.getAll();
            response.json({
                data: technologies
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
            const technology = await technologyDatamapper.getById(request.params.id);
            //Si aucun résultat, on passe au middleware suivant (jusqu'à la 404)
            if (!technology) {
                return next();
            }

            response.json({
                data: technology
            });
        } catch (error) {
            console.trace(error);
            response.json({
                data: [],
                error: `Erreur fatale ! ${error}`
            });
        }
    },



}