import React from 'react';
import About from 'src/components/Footer/About';
import Contact from 'src/components/Footer/Contact';
import LoginForm from 'src/containers/Forms/LoginForm';
import './styles.scss';
// import logo from 'src/assets/images/LogoFooter.png';

function Footer() {
  return (
    <div className="footer">
      <About />
      <Contact />
      <LoginForm />
    </div>
  );
}

export default Footer;
