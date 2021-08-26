const redisDatamapper = require('../datamappers/redis')

module.exports = {

    async getTest(request, response){
        try {
            const value = await redisDatamapper.get(request.params.key);
            response.json({[request.params.key]: password});

        } catch (error) {
            console.error(error);
            response.status(500).json(`A server error occured.`);
        }
    },

    async setTest(request, response){
        const key = request.params.key;
        const value = request.body.value;

        // Le but ici c'est de stocker cette paire key/value dans redis.
        try {
            // En fait JS soit ca passe soit ca fait une errur donc on a pas vraiment besoin de vérifier le retour.
            await redisDatamapper.set(key, value);
            // Si on veut pouvoir créer une propriété d'objet dynamiquement on est obligé de passer par cette série d'instruction.
            // En utilisant la notation avec crochets
            /*const result = {};
            result[key] = value;
            response.json(result);*/
            // Ou plus rapidement
            response.json({[key]: value});

        } catch (error) {
            console.error(error);
            response.status(500).json(`Oh no ! A server error occured !`);

        }
    }
    
}