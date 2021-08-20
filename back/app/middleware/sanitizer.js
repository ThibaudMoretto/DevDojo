const sanitizer = require('sanitizer');

module.exports = {
    sanitize(request, _, next) {
        console.log('on sanitize')
        // Pour chaque champ de notre body (qui contient les données à sauvegarder), on va sanitizer chacun des champs
        for (const key in request.body) {
            if (Array.isArray(request.body[key])) {
                request.body[key] = request.body[key].map(value => sanitizer.escape(value))
            } else if(typeof(request.body[key]==='boolean')){
                
            } else {
                request.body[key] = sanitizer.escape(request.body[key]);
            }
        }

        // On continue d'envoyer notre requête avec les données sécurisées
        next();
    }
}