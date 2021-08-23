import React from 'react';
import NavBar from 'src/containers/NavBar';
import SearchBar from 'src/containers/SearchBar';
import logo from 'src/assets/images/Logo.png'
import './styles.scss';

function Header() {

  return (
    <div className="header">
      <div className="header--container">
        <div className="header--logo_container">
          <img src={logo} className="header-logo" alt="logo Dev Dojo" />
        </div>
        <div className="header-nav">
          <NavBar
          />
        </div>
      </div>
      <div className="header-search">
        <SearchBar />
      </div>
    </div>
  )
}

export default Header;
