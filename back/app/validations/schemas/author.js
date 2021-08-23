const Joi = require('joi');

// Afin de créer les règles de validation on doit créer un objet de schéma Joi.
module.exports = Joi.object({
    // A l'intérieur de celui-ci on va définir la liste des propriété possibles, et les règles pour chacune d'elles
    name: Joi.string().required(),
    description: Joi.string().required(),
    github_account: Joi.string(),
    youtube_account: Joi.string(),
    website: Joi.string(),
    twitter_account: Joi.string(),
    linkedin_account: Joi.string(),
    twitch_account: Joi.string()
});