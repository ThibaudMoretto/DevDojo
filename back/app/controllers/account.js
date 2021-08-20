const accountDatamapper = require('../datamappers/account')
const jwt = require('./jwt')
const bcrypt = require('bcrypt')

module.exports = {

    async login(request, response) {
        try {
            const account = await accountDatamapper.getByEmail(request.body.email);
            // Soit on a pas trouvé le username et on génère une erreur que l'on renvoie en json
            if (!account) {
                return response.json({
                    error: `Nom d'utilisateur inconnu`,
                    errorField: "email",
                });
            }

            //Soit on a trouvé le username, auquel cas on compare le mot de passe
            //Pour cela on va utiliser bcrypt pour comparer le mot de passe fourni dans le body avec le mot de passe chiffré dans la BDD
            const passwordIsValid = bcrypt.compareSync(
                // mot de passe fourni par l'utilisateur
                request.body.password,
                // mot de passe chiffré stocké en BDD
                account.password
            );

            //Si le mot de passe donné par le user ne correspons pas, on renvoie un message d'erreur
            if (!passwordIsValid) {
                return response.json({
                    error: "Ces informations de connexion sont incorrectes"
                });
            }

            // Pour des raisons de sécurité, on supprime le mot de passe avant de renvoyer les infos du compte
            delete account.password;

            //On récupère un accessToken pour le user, et on le renvoie dans les infos du user
            account.accessToken = jwt.getAccessToken(account.email)

            //On récupère un refreshToken pour le user, et on le renvoie dans les infos du user
            account.refreshToken = jwt.getRefreshToken(account.email)

            // on renvoie les infos du user si tout va bien
            response.json({
                data: account,
            });

        } catch (error) {
            console.log(error);
            response.json({
                data: [],
                error: `Erreur fatale ! ${error}`
            });
        }
    },

}