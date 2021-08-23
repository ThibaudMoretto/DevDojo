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
app.use(express.urlencoded({ extended: true }));

//On autorise tout le monde à venir sur notre API
app.use(cors());

// Pour prévenir des failles XSS, on met en place un sanitizer qui permettra d'empêcher l'utilisateur de saisir du HTML
app.use(sanitizer.sanitize);

//URL de connexion à l'API
app.use('/api/v1.0', apiRouter)

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});