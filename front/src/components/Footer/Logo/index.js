import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import LogoFooter from 'src/assets/images/Logo_Dev_Dojo_Footer.png';

function Logo() {
  return (
    <div className="button-container">
      <Link to="/">
        <img src={LogoFooter} alt="logo dev dojo footer" />
      </Link>
    </div>
  );
}

export default Logo;
