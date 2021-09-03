import React from 'react';
import LoginForm from 'src/containers/Forms/LoginForm';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './styles.scss';
import Logo from 'src/components/Footer/Logo';

function Footer() {
  return (
    <div className="footer">
      <Logo />

      <div className="button-container">
        <Button className="button" as={Link} to="/about">
          A propos
        </Button>
      </div>

      <div className="button-container">
        <Button className="button" as={Link} to="/contact">
          Contact
        </Button>
      </div>

      <LoginForm />
    </div>
  );
}

export default Footer;
