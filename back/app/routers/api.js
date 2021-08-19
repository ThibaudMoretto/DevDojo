const express = require('express');
const router = express.Router();

const jwt = require('../middleware/jwt')

const ressourceController = require('../controllers/ressource');
const authorController = require('../controllers/author');
const accountController = require('../controllers/account');
const mainController = require('../controllers/main');


router.route('/ressource')
    .get(ressourceController.ressourceList)
    // .post(ressourceController.addRessource)

router.route('/ressource/:id')
    .get(ressourceController.getOneRessource)

router.route('/author')
    .get(authorController.authorList)

router.route('/author/:id')
    .get(authorController.getOneAuthor)

router.route('/login')
    .post(accountController.login)

//Le dernier middleware de notre router est obligé de récupérer les requêtes qui ne se sont pas arrêtées avant.
router.use(mainController.ressourceNotFound);


module.exports = router;