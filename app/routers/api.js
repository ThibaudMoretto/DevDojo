const express = require('express');
const router = express.Router();

const jwt = require('../middleware/jwt')

const ressourceController = require('../controllers/ressource');
const authorController = require('../controllers/author');
const accountController = require('../controllers/account');
const mainController = require('../controllers/main');


router.route('/ressource')
    .get(ressourceController.ressourceList)
    //ONGOING -- .post(ressourceController.add)

router.route('/ressource/:id(\\d+)')
    .get(ressourceController.getOne)
    //ONGOING -- .delete(ressourceController.delete)

router.route('/author')
    .get(authorController.authorList)
    .post(authorController.add)

router.route('/author/:id(\\d+)')
    .get(authorController.getOneAuthor)
    .delete(authorController.delete)

router.route('/login')
    .post(accountController.login)

router.route('/token')
    .post(jwt.getNewToken)

//Le dernier middleware de notre router est obligé de récupérer les requêtes qui ne se sont pas arrêtées avant.
router.use(mainController.ressourceNotFound);


module.exports = router;