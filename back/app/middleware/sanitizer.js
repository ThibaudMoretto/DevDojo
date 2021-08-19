const sanitizer = require('sanitizer');

module.exports = {
    sanitize(request, _, next) {
        // Pour chaque champ de notre body (qui contient les données à sauvegarder), on va sanitizer chacun des champs
        for (const key in request.body) {
            request.body[key] = sanitizer.escape(request.body[key]);
        }

        // On continue d'envoyer notre requête avec les données sécurisées
        next();
    }
}