require('dotenv').config();

const express = require('express');
const app = express();
const apiRouter = require('./app/routers/api');
const sanitizer = require('sanitizer');
const port = process.env.PORT || `11000`;

//A utiliser pour le POST
app.use(express.urlencoded({ extended: true }));


// Pour prévenir des failles XSS, on met en place un sanitizer qui permettra d'empêcher l'utilisateur de saisir du HTML
app.use((request, _, next) => {
   // Pour chaque champ de notre body (qui contient les données à sauvegarder), on va sanitizer chacun des champs
   for(const key in request.body) {
      request.body[key] = sanitizer.escape(request.body[key]);
   }
 
   // On continue d'envoyer notre requête avec les données sécurisées
   next();
 });



//URL de connexion à l'API
app.use('/api/v1.0', apiRouter)

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});