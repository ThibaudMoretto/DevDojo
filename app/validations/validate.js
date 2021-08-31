/*
Afin de nous faciliter la vie et de pouvoir réutiliser notre systeme de validation avec Joi dans n'importe quel projet et pour n'importe quel route, on a créé une fabrique à middleware.
Celle-ci à la capacité de prendre en paramètre le schema qui doit servir à la validation.
Quand on permet de fournir des paramètre à une 'factory' (fabrique) on parle d'injection de dépendances. C'est à dire que ce module dépend d'une information extérieure pour fonctionner, mais cela veut dire aussi du coup qu'il peut s'adapter à n'importe quel environnement, sans intervenir sur celui-ci.
*/
// Techniquement parlant, on crée une fonction qui retourne una autre fonction (une closure). Ici cette fonction est particulière c'est une fonction de middleware donc elle prend en paramètre request, response et next. Il faut les préciser afin que la fonction puisse jouer son rôle normalement.

module.exports = (prop, schema) => {

    return async (request, response, next) => {
        try {
            // la "value" on s'en fiche on la récupère pas
            // request['body'] == request.body
            await schema.validateAsync(request[prop]);
            next();
        } catch (error) {
            // Je dois afficher l'erreur à l'utilisateur
            // STATUS HTTP pour une errur de saise : 400
            return response.status(400).json({ error: error.details[0].message });
        }
    }

}