const express = require('express');
const router = express.Router();

const jwtController = require('../controllers/jwt')
const ressourceController = require('../controllers/ressource');
const authorController = require('../controllers/author');
const accountController = require('../controllers/account');
const technologyController = require('../controllers/technology');
const mainController = require('../controllers/main');

const authorSchema = require('../validations/schemas/author');
const ressourceSchema = require('../validations/schemas/ressource');
const validate = require('../validations/validate');


router.route('/ressource')
/**
 * Returns the entire ressource list
 * @route GET /ressource
 * @returns {Object} 200 - Ressource list
 */
    .get(ressourceController.list)
/**
 * Adds a ressource
 * @route POST /ressource
 * @param {string} title.body - Title of the ressource - eg: test
 * @param {string} description.body - Description of the ressource
 * @param {string} link.body - Link to the ressource
 * @param {string} publication_date.body - Date when the ressource has been published, timestampTZ format
 * @param {integer} duration.body - Time the ressource lasts
 * @param {boolean} is_free.body - Indicates whether the ressource is free or not
 * @param {integer} difficulty_id.body - ID of the difficulty
 * @param {integer} language_id.body - ID of the language
 * @param {integer} author_id.body - ID of the author of the ressource
 * @param {integer} ressource_type_id.body - ID of the type of ressource
 * @returns {Object} 200 - An object with the ID of the created ressource and the slug of the new ressource
 */
    .post(validate('body', ressourceSchema), ressourceController.add)

router.route('/ressource/:id(\\d+)')
/**
 * Adds a ressource
 * @route GET /ressource/id
 * @returns {Object} 200 - An object with all the data of the ressource
 */
    .get(ressourceController.getOne)
    
/**
 * Updates a ressource
 * @route PUT /ressource/id
 * @param {string} title.body - Title of the ressource - eg: test
 * @param {string} description.body - Description of the ressource
 * @param {string} link.body - Link to the ressource
 * @param {string} publication_date.body - Date when the ressource has been published, timestampTZ format
 * @param {integer} duration.body - Time the ressource lasts
 * @param {boolean} is_free.body - Indicates whether the ressource is free or not
 * @param {integer} difficulty_id.body - ID of the difficulty
 * @param {integer} language_id.body - ID of the language
 * @param {integer} author_id.body - ID of the author of the ressource
 * @param {integer} ressource_type_id.body - ID of the type of ressource
 * @returns {Object} 200 - An object with all the data of the ressource
 */
    .put(ressourceController.update)

/**
 * @route DELETE /ressource/id
 * @param {string} title.body - Title of the ressource - eg: test
 * @param {string} description.body - Description of the ressource
 * @param {string} link.body - Link to the ressource
 * @param {string} publication_date.body - Date when the ressource has been published, timestampTZ format
 * @param {integer} duration.body - Time the ressource lasts
 * @param {boolean} is_free.body - Indicates whether the ressource is free or not
 * @param {integer} difficulty_id.body - ID of the difficulty
 * @param {integer} language_id.body - ID of the language
 * @param {integer} author_id.body - ID of the author of the ressource
 * @param {integer} ressource_type_id.body - ID of the type of ressource
 * @returns {Object} 200 - An object with all the data of the ressource
 */
    .delete(ressourceController.delete)

router.route('/author')
    .get(authorController.list)
    .post(validate('body', authorSchema), authorController.add)

router.route('/author/:id(\\d+)')
    .get(authorController.getOne)
    .put(authorController.update)
    .delete(authorController.delete)

router.route('/technology')
    .get(technologyController.list)

router.route('/technology/:id(\\d+)')
    .get(technologyController.getOne)

router.route('/login')
    .post(accountController.login)

router.route('/logout')
    .delete(accountController.logout)

router.route('/checkToken')
    .post(jwtController.checkToken)

router.route('/token')
    .post(jwtController.getNewToken)

//Le dernier middleware de notre router est obligé de récupérer les requêtes qui ne se sont pas arrêtées avant.
router.use(mainController.ressourceNotFound);

module.exports = router;