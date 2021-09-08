const client = require('../client-redis');

module.exports = {

    async set(key, value){
        // Ici il va falloir faire en sorte de stocker une information dans le serveur redis. Comment communiquer avec lui ? Comme pour les autres types de BDD, il nous faut un client connecté.
        // Cette notation correspond au : 
        // SET key value disponible dans le client de base
        // Ici redis va me repondre KO ou OK si tout c'est bien passé, donc je retroune quand même la réponse au controller, histoire de gérer le retour
        return await client.set(key, value);
    },

    async get(key){
        return await client.get(key);
    }

}