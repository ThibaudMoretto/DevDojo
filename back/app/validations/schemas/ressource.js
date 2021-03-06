const Joi = require('joi');

//default(null) demandés par le frontempty


// Afin de créer les règles de validation on doit créer un objet de schéma Joi.
module.exports = Joi.object({
    // A l'intérieur de celui-ci on va définir la liste des propriété possibles, et les règles pour chacune d'elles
    title: Joi.string().required(),
    description: Joi.string().required(),
    link: Joi.string(),
    publication_date: Joi.string(),
    duration: Joi.number().integer().default(null),
    is_free: Joi.boolean().default(true),
    difficulty_id: Joi.number().integer().default(null),
    language_id: Joi.number().integer().default(null),
    author_id: Joi.number().integer().default(null),
    ressource_type_id: Joi.number().integer().default(null),
    //Doit être un tableau contenant zéro ou plusieurs objets composé d'un champ ID qui doit être un number
    technologiesRelated: Joi.array().items(Joi.object({id: Joi.number().integer()})),
    technologiesRequired: Joi.array().items(Joi.object({id: Joi.number().integer()})),
    
    // Il existe une rèle de validation qui dit qu'une propriété doit être obligatoire ou non.
    // Ce type de validation peut être a jouté à l'objet lui-même afin de définir des règles à l'objet entier.
    //Dans notre cas, il y a une propriété (technologiesRequired) non obligatoire, donc il faut ajouter .required() sur toutes les autres propriétés
})