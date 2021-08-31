const Joi = require('joi');

// Afin de créer les règles de validation on doit créer un objet de schéma Joi.
module.exports = Joi.object({
    // A l'intérieur de celui-ci on va définir la liste des propriété possibles, et les règles pour chacune d'elles
    name: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow(''), //On rajoute allow('') pour autoriser la valeur vide car une string vide n'est pas autorisée par défaut
    github_account: Joi.string().allow(''),
    youtube_account: Joi.string().allow(''),
    website: Joi.string().allow(''),
    twitter_account: Joi.string().allow(''),
    linkedin_account: Joi.string().allow(''),
    twitch_account: Joi.string().allow('')
});
