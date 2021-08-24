const express = require('express');
const router = express.Router();

const jwtController = require('../controllers/jwt')
const ressourceController = require('../controllers/ressource');
const authorController = require('../controllers/author');
const accountController = require('../controllers/account');
const technologyController = require('../controllers/technology');
const mainController = require('../controllers/main');


router.route('/ressource')
    .get(ressourceController.list)
    .post(ressourceController.add)

router.route('/ressource/:id(\\d+)')
    .get(ressourceController.getOne)
    .put(ressourceController.update)
    .delete(ressourceController.delete)

router.route('/author')
    .get(authorController.list)
    .post(authorController.add)

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
    .post(accountController.logout)

router.route('/checkToken')
    .post(jwtController.checkToken)

// router.route('/refreshToken')
//     .post(jwtController.getNewToken)

//Le dernier middleware de notre router est obligé de récupérer les requêtes qui ne se sont pas arrêtées avant.
router.use(mainController.ressourceNotFound);

module.exports = router;