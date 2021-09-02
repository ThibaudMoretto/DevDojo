const jwt = require('jsonwebtoken');
const accountDatamapper = require('../datamappers/account');
const jwtDatamapper = require('../datamappers/jwt');

module.exports = {
    getAccessToken (username) {
    
        const user = { name: username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });

        return accessToken;
    },

    getRefreshToken (username) {
    
        const user = { name: username }
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

        return refreshToken;
    },

    async checkToken (request, response) {
        const authHeader = request.headers['authorization'];

        //Si on a un authHeader, alors on renvoie le second paramètre de authHeader (qui est le token), sinon undefined
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

    async getNewToken (request, response) {
        const refreshToken = request.body.token
        if (refreshToken == null) return res.sendStatus(401)

        //On vérifie que le refresh token est autorisé à demander un access token
        const tokenExists = await jwtDatamapper.get(refreshToken);
        if(tokenExists){
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (error, user) => {
                //Si il y a une erreur, on envoie un statut 403 qui signifie que le token n'est pas ou plus valide
                if(error) return response.sendStatus(403)
                
                const token = jwt.sign({name : user.name}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
    
                response.json( {token} );
            });
        }
    },

    async saveToken (token) {
        try {
            await jwtDatamapper.add(token);
        } catch (error) {
            console.trace(error);
 
            //Si le token existe déjà en base (le code 23505 correspond à un doublon)
            if (error.code === '23505') {
                return response.status(400).json({
                    data: [],
                    error: `Token existant`
                });
            }

            response.status(500).json({
                data: [],
                error: `Désolé une erreur serveur est survenue, veuillez réessayer ultérieurement.`
            });
        }
    },

    async deleteToken(request, response){
        try {
            await jwtDatamapper.delete(request.body.token, () => {
                response.json({
                    data: `Token supprimé`
                })
            })
        } catch (error) {
            console.error(`message ` + error)
        }
    }
}