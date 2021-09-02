const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = {
  // async..await is not allowed in global scope, must use a wrapper
  async send(data) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_SMTP_USER,
        pass: process.env.GMAIL_SMTP_PASSWORD
      }
    }));

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Dev Dojo ⛩" <dev.dojo.tardis@gmail.com>', // sender address
      to: "dev.dojo.tardis@gmail.com", // list of receivers, separate with a comma
      subject: `${data.name} : ${data.subject}`, // Subject line
      //text: "Hello world", // plain text body
      html: `${data.body}`, // html body
    });
  }
}