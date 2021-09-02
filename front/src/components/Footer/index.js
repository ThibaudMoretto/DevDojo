import React from 'react';
import About from 'src/components/Footer/About';
import Contact from 'src/components/Footer/Contact';
import LoginForm from 'src/containers/Forms/LoginForm';
import './styles.scss';
import Logo from 'src/components/Footer/Logo';

function Footer() {
  return (
    <div className="footer">
      <Logo />
      <About />
      <Contact />
      <LoginForm />
    </div>
  );
}

export default Footer;
