const { response } = require("express");
const mailer = require("./nodemailer-config")

module.exports = {

    ressourceNotFound(_, response){
        response.status(404).json({error: 'Ressource API introuvable, c\'est bien dommage mais ne lâche rien, tu vas y arriver.'});
    },

    async contact(request, response){
        try {
            await mailer.contact(request.body);
            response.json(`Mail envoyé`);
        } catch(error) {
            console.error( `message ` + error)
        }
    },

    async suggestion(request, response){
        try {
            await mailer.suggestion(request.body);
            response.json(`Mail envoyé`);
        } catch(error) {
            console.error( `message ` + error)
        }
    }
}