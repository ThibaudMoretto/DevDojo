const express = require('express');
const router = express.Router();

const jwtController = require('../controllers/jwt')
const ressourceController = require('../controllers/ressource');
const authorController = require('../controllers/author');
const accountController = require('../controllers/account');
const technologyController = require('../controllers/technology');
const mainController = require('../controllers/main');

const {
    nameCache
} = require('../services/cacheStrategy');

const authorSchema = require('../validations/schemas/author');
const ressourceSchema = require('../validations/schemas/ressource');
const validate = require('../validations/validate');

const cache = require('express-redis-cache')({
    client: require('../client-redis')
});

router.route('/ressource')
    /**
     * Returns the entire ressource list
     * @route GET /ressource
     * @returns {Object} 200 - Ressource list
     */
    .get(nameCache('ressource-'), cache.route(), ressourceController.list)
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
    .post( /*validate('body', ressourceSchema), */ ressourceController.add)

router.route('/ressource/:id(\\d+)')
    /**
     * Gets a ressource
     * @route GET /ressource/id
     * @param {integer} id.request - ID of the ressource wanted
     * @returns {Object} 200 - An object with all the data of the ressource
     */
    // En premier argument de nameCache, on fournit un prefix de route, et en 2ème, le nom du paramètre qui est dynamique (ici on va accéder à request.params.id)
    .get(nameCache('ressource-', 'id'), cache.route(), ressourceController.getOne)

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
     * @param {integer} id.request - ID of the ressource
     * @returns {Object} 200 - A message 'Ressource supprimée'
     */
    .delete(ressourceController.delete)

router.route('/author')
    /**
     * Returns the entire author list
     * @route GET /author
     * @returns {Object} 200 - Author list
     */
    .get(nameCache('author-'), cache.route(), authorController.list)

    /**
     * Adds an author
     * @route POST /author
     * @param {string} name.body - Name of the author
     * @param {string} description.body - Description of the author
     * @param {string} image.body - Image URL of the author
     * @param {string} github_account.body - Github account of the author
     * @param {string} youtube_account.body - Youtube account of the author
     * @param {string} website.body - Website URL of the author
     * @param {string} twitter_account.body - Twitter account of the author
     * @param {string} linkedin_account.body - LinkedIn account of the author
     * @param {string} twitch_account.body - Twitch account of the author
     * @returns {Object} 200 - An object with the ID and the name of the created author
     */
    .post( /*validate('body', authorSchema), */ authorController.add)

router.route('/author/:id(\\d+)')
    /**
     * Gets an author
     * @route GET /author/id
     * @param {integer} id.request - ID of the author wanted
     * @returns {Object} 200 - An object with all the data of the author
     */
    .get(nameCache('author-', 'id'), cache.route(), authorController.getOne)

    /**
     * Updates an author
     * @route PUT /author/id
     * @param {string} name.body - Name of the author
     * @param {string} description.body - Description of the author
     * @param {string} image.body - Image URL of the author
     * @param {string} github_account.body - Github account of the author
     * @param {string} youtube_account.body - Youtube account of the author
     * @param {string} website.body - Website URL of the author
     * @param {string} twitter_account.body - Twitter account of the author
     * @param {string} linkedin_account.body - LinkedIn account of the author
     * @param {string} twitch_account.body - Twitch account of the author
     * @returns {Object} 200 - An object with all the data of the author
     */
    .put(authorController.update)

    /**
     * @route DELETE /author/id
     * @param {integer} id.request - ID of the author
     * @returns {Object} 200 - A message 'Auteur supprimé'
     */
    .delete(authorController.delete)

router.route('/technology')
    /**
     * Returns the entire technology list
     * @route GET /technology
     * @returns {Object} 200 - Technology list
     */
    .get(technologyController.list)

router.route('/technology/:id(\\d+)')
    /**
     * Gets a technology
     * @route GET /technology/id
     * @param {integer} id.request - ID of the technology wanted
     * @returns {Object} 200 - An object with all the data of the technology
     */
    .get(technologyController.getOne)

router.route('/login')
    /**
     * Logs in the user
     * @route POST /login
     * @param {string} email.body - Email of the user to be logged in
     * @param {string} password.body - Email of the user to be logged in
     * @returns {Object} 200 - An object with all the user data and the access and refresh tokens
     */
    .post(accountController.login)

router.route('/logout')
    /**
     * Logs out the user
     * @route POST /logout
     * @param {string} token.body - Refresh token to be deleted from the list of authorized refresh tokens
     * @returns {Object} 200 - A message 'Token supprimé'
     */
    .delete(accountController.logout)

router.route('/checkToken')
    /**
     * Verifies the validity of the token
     * @route POST /checkToken
     * @param {string} token.bearer - Token to be verified
     * @returns {Object} 200 - An object with the user datas
     */
    .post(jwtController.checkToken)

router.route('/token')
    /**
     * Gets a new access token
     * @route POST /token
     * @param {string} token.body - Token to be verified
     * @returns {Object} 200 - An object with the new access token
     */
    .post(jwtController.getNewToken)


router.route('/contact')
    .post(mainController.contact)


router.route('/suggestion')
    .post(mainController.suggestion)


//Le dernier middleware de notre router est obligé de récupérer les requêtes qui ne se sont pas arrêtées avant.
router.use(mainController.ressourceNotFound);

module.exports = router;