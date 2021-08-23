const sanitizer = require('sanitizer');

module.exports = {
    sanitize(request, _, next) {

        // Pour chaque champ de notre body (qui contient les données à sauvegarder), on va sanitizer chacun des champs
        for (const key in request.body) {
            //Si le champ du body est un tableau
            if (Array.isArray(request.body[key])) {
                //Alors pour chaque champ du tableau
                for (const item of request.body[key]) {
                    //Si c'est un object, on sanitize chaque propriété
                    if (typeof (item === 'object')) {
                        for (const key in item) {
                            item[key] = sanitizer.escape(item[key])
                        }
                    }
                    //Sinon, si ce n'est ni un object, ni un boolean ni un number, on sanitize la valeur directement
                    else if (typeof (request.body[key]) !== 'boolean' && typeof (request.body[key]) !== 'number') {
                        item = sanitizer.escape(item);
                    }
                }
            } else if (typeof (request.body[key]) !== 'boolean' && typeof (request.body[key]) !== 'number') {
                console.log(key + ' n\'est ni un boolean, ni un number, ni un array')
                request.body[key] = sanitizer.escape(request.body[key]);
            }
        }

        console.log(request.body)
        // On continue d'envoyer notre requête avec les données sécurisées
        next();
    }
}