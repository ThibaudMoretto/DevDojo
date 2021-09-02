import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

import './styles.scss';

const ContactForm = () => {
  const [status, setStatus] = useState('Envoyer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('En cours...');
    // const { name, email, subject, body } = e.target.elements;
    const details = {
      name: name,
      email: email,
      subject: subject,
      body: body,
    };
    await fetch(
      'https://coding--dojo.herokuapp.com/api/v1.0/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      },
    );
    setStatus('Envoyé');
    setName('');
    setEmail('');
    setSubject('');
    setBody('');
  };

  return (
    <div className="containers-form">
      <div className="container-form">
        <Form
          required
          id="contact-form"
          className="contact-form-element"
          onSubmit={handleSubmit}
        >
          <Form.Input
            id="name"
            label="Nom"
            placeholder="Nom"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="on"
          />
          <Form.Input
            id="mail"
            label="Adresse email"
            placeholder="john.doe@gmail.com"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="on"
          />
          <Form.Input
            id="subject"
            label="Objet"
            placeholder="Objet"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            autoComplete="off"
          />
          <Form.TextArea
            id="body"
            label="Votre message"
            placeholder="Votre message"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            autoComplete="off"
          />
          <Button color="facebook" type="submit">
            {status}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
