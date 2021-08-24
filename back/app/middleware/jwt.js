const jwt = require('jsonwebtoken')

module.exports = {
    // A utiliser entre les routes et les controllers pour vérifier si le user a bien les droits pour accéder à la route
    authenticateToken (request, response, next) {
        const authHeader = request.headers['authorization'];

        //Si on a un authHeader, alors on renvoie le second paramètre de authHeader, sinon undefined
        const token = authHeader && authHeader.split(' ')[1]

        //Si pas de token, alors on renvoie un statut 401 => Unauthorized (pas de token, pas d'autorisation)
        if(token == null) return response.sendStatus(401)

        //Si on a un token, alors on le vérifie
        //La fonction verify prend en paramètre le token à vérifier, et la clé utilisée pour le générer
        //Elle prend en paramètre également un callback pour traiter le résultat
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
            //Si il y a une erreur, on envoie un statut 403 qui signifie que le token n'est pas ou plus valide
            if(error) return response.sendStatus(403)
            console.log(user)
            request.user = user;
            next();
        })
    }
}