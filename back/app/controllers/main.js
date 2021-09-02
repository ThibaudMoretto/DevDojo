const mailer = require("../nodemailer-config")

module.exports = {

    ressourceNotFound(_, response){
        response.status(404).json({error: 'Ressource API introuvable, c\'est bien dommage mais ne lâche rien, tu vas y arriver.'});
    },

    contact(request, _){
        mailer.send(request.body);
    }
}