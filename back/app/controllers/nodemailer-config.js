const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

const authorDatamapper = require("../datamappers/author");
const languageDatamapper = require("../datamappers/language");
const difficultyDatamapper = require("../datamappers/difficulty");
const ressource_typeDatamapper = require("../datamappers/ressource_type");
const technologyDatamapper = require("../datamappers/technology");

module.exports = {
  // async..await is not allowed in global scope, must use a wrapper
  async contact(data) {

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
  },

  async suggestion(data) {

    for (const key in data) {
      if (data[key] === "") {
        data[key] = "Non renseigné"
      }
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      auth: {
        user: process.env.GMAIL_SMTP_USER,
        pass: process.env.GMAIL_SMTP_PASSWORD
      }
    }));

    let HTMLBody = ``;
    let subject = ``;
    //Si il y a une propriété name dans les data, c'est qu'il s'agit d'un auteur, sinon, c'est une ressource
    if (data.name) {
      subject = "Proposition de mentor";

      const technologies = []

      for (const tech of data.mainTechnologies) {
        const techno = await technologyDatamapper.getById(tech.id)
        technologies.push(techno.name)
      }

      HTMLBody = `
      <h2>Proposition de mentor</h2>
      <p><b>Nom :</b> ${data.name}</p>
      <p><b>Description :</b> ${data.description}</p>
      <p><b>Rôle :</b> ${data.dev_role}</p>
      <p><b>Image :</b> ${data.image}</p>
      <p><b>Github :</b> ${data.github_account}</p>
      <p><b>LinkedIn :</b> ${data.linkedin_account}</p>
      <p><b>Twitch :</b> ${data.twitch_account}</p>
      <p><b>Twitter :</b> ${data.twitter_account}</p>
      <p><b>Website :</b> ${data.website}</p>
      <p><b>Youtube :</b> ${data.youtube_account}</p>
      <p><b>Technos :</b> ${technologies.toString()}</p>
      `
    } else if (data.title) {
      subject = "Proposition de ressource";

      const is_free = data.is_free ? 'Oui' : 'Non';
      const difficulty = await difficultyDatamapper.getOne(data.difficulty_id);
      const language = await languageDatamapper.getOne(data.language_id);
      const ressource_type = await ressource_typeDatamapper.getOne(data.ressource_type_id);
      const author = await authorDatamapper.getById(data.author_id);
      const technologiesRelated = []

      for (const tech of data.technologiesRelated) {
        const techno = await technologyDatamapper.getById(tech.id)
        technologiesRelated.push(techno.name)
      }

      HTMLBody = `
      <h2>Proposition de ressource</h2>
      <p><b>Titre :</b> ${data.title}</p>
      <p><b>Description :</b> ${data.description}</p>
      <p><b>Lien :</b> ${data.link}</p>
      <p><b>Durée :</b> ${data.duration}</p>
      <p><b>Date de publication :</b> ${data.publication_date}</p>
      <p><b>Gratuit :</b> ${is_free}</p>
      <p><b>Difficulté :</b> ${difficulty.name}</p>
      <p><b>Langue :</b> ${language.name}</p>
      <p><b>Auteur :</b> ${author.name}</p>
      <p><b>Type de ressource :</b> ${ressource_type.name}</p>
      <p><b>Image :</b> ${data.image}</p>
      <p><b>Technos abordées :</b> ${technologiesRelated.toString()}</p>
      `
    }

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Dev Dojo ⛩" <dev.dojo.tardis@gmail.com>', // sender address
      to: "dev.dojo.tardis@gmail.com", // list of receivers, separate with a comma
      subject: `${subject}`, // Subject line
      //text: "Hello world", // plain text body
      html: HTMLBody, // html body
    });
  }
}