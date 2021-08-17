import React from 'react';
import About from 'src/components/Footer/About';
import Contact from 'src/components/Footer/Contact';
import LoginForm from 'src/components/Footer/LoginForm';
import './styles.scss';

function Footer() {
  return (
    <div>
      <About />
      <Contact />
      <LoginForm />
    </div>
  )
}

export default Footer;
