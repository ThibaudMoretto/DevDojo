const jwt = require('jsonwebtoken')
const accountDatamapper = require('../datamappers/account')

module.exports = {
    getAccessToken (username) {
    
        const user = { name: username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });

        return accessToken;
    },

    getRefreshToken (username) {
    
        const user = { name: username }
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

        return refreshToken;
    },

    async checkToken (request, response) {
        const authHeader = request.headers['authorization'];

        //Si on a un authHeader, alors on renvoie le second paramètre de authHeader, sinon undefined
        const token = authHeader && authHeader.split(' ')[1]

        //Si pas de token, alors on renvoie un statut 401 => Unauthorized (pas de token, pas d'autorisation)
        if(token == null) return response.sendStatus(401)

        //Si on a un token, alors on le vérifie
        //La fonction verify prend en paramètre le token à vérifier, et la clé utilisée pour le générer
        //Elle prend en paramètre également un callback pour traiter le résultat
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (error, decoded) => {
            //Si il y a une erreur, on envoie un statut 403 qui signifie que le token n'est pas ou plus valide
            if(error) return response.sendStatus(403)
            
            //Si pas d'erreur, alors on va chercher le user correspondant au name et on renvoie le JSON
            const user = await accountDatamapper.getByEmail(decoded.name);

            // Pour des raisons de sécurité, on supprime le mot de passe avant de renvoyer les infos du compte
            delete user.password;

            //On envoie l'information indiquant le statut de connexion de l'utilisateur
            user.logged = true;

            response.json( {user} );
        });
    },

    getNewToken (request, response) {
        const refreshToken = request.body.token
        if (refreshToken == null) return res.sendStatus(401)

        //! Il faudra vérifier ici si le refresh token fait partie des refresh token autorisés à générer un nouveau token dans la BDD
        //! Si le refresh token existe en base, alors on check s'il est valide, et si oui, on génère et on renvoie un access token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (error, user) => {
            //Si il y a une erreur, on envoie un statut 403 qui signifie que le token n'est pas ou plus valide
            if(error) return response.sendStatus(403)
            
            const token = jwt.sign({name : user.name}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });

            response.json( {token} );
        });
    }
}