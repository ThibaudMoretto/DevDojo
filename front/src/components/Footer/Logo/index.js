import React from 'react';
import './styles.scss';
import LogoFooter from 'src/assets/images/Logo_Dev_Dojo_Footer.png';

function Logo() {
  return (
    <div className="button-container">
      <a href="/">
        <img src={LogoFooter} alt="logo dev dojo footer" />
      </a>
    </div>
  );
}

export default Logo;
