import React from 'react';
import About from 'src/components/Footer/About';
import Contact from 'src/components/Footer/Contact';
import LoginForm from 'src/containers/LoginForm';
import './styles.scss';
import logo from 'src/assets/images/LogoFooter.png'

function Footer() {
  return (
    <div className="footer">
      <div className="container--logo">
        <img src={logo} alt="logo" className="pictures" />
      </div>

      <div className="footer--container">

        <About />
        <Contact />
        <LoginForm />

      </div>
    </div>
  )
}

export default Footer;
