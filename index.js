require('dotenv').config();

const express = require('express');
const app = express();
const apiRouter = require('./app/routers/api');
const sanitizer = require('./app/middleware/sanitizer');
const cors = require('cors');
const port = process.env.PORT || `11000`;

//A utiliser pour passer du JSON dans le body
app.use(express.json());

//A utiliser pour le POST
app.use(express.urlencoded({
   extended: true
}));

//On autorise tout le monde à venir sur notre API
app.use(cors());

const expressSwagger = require('express-swagger-generator')(app);
const options = {
   swaggerDefinition: {
      info: {
         description: 'API Dev Dojo',
         title: 'Dev Dojo API Documentation',
         version: '1.0.0',
      },
      host: 'localhost:11500',
      // host: 'https://coding--dojo.herokuapp.com/api/v1.0:3000',
      // basePath: '/api',
      basePath: '/api/v1.0',
      produces: [
         "application/json"
      ],
      schemes: ['http']
      // schemes: ['https']
   },
   basedir: __dirname, //Chemin absolu de l'app
   files: ['./app/routers/*.js']
};
//! Attention, l'ordre est toujours important, il faut que le middleware de la doc se trouve avant le routeur de base
expressSwagger(options);

// Pour prévenir des failles XSS, on met en place un sanitizer qui permettra d'empêcher l'utilisateur de saisir du HTML
app.use(sanitizer.sanitize);

//URL de connexion à l'API
app.use('/api/v1.0', apiRouter)

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});