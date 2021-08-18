require('dotenv').config();

const express = require('express');
const app = express();

const apiRouter = require('./app/routers/api')

const port = process.env.PORT || `11000`;

//A utiliser pour le POST
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//URL de connexion à l'API
app.use('/api/v1.0', apiRouter)

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});