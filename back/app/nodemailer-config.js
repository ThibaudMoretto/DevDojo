const nodemailer = require("nodemailer");


module.exports = {
    // async..await is not allowed in global scope, must use a wrapper
    async main(data) {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD
            }
          });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Dev Dojo 👻" <thibaud.moretto@gmail.com>', // sender address
            to: "thibaud.moretto@gmail.com", // list of receivers, separate bith a comma
            subject: `Test`, // Subject line
            text: "Hello world", // plain text body
            html: `La ressource ${data.id} a été ajoutée`, // html body
        });
    }
}