import React from 'react';
import NavBar from 'src/components/Header/NavBar';
import SearchBar from 'src/components/Header/SearchBar';
import logo from 'src/components/Header/logo.png'
import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <NavBar />
      </div>
      <div>
        <img src={logo} className="header-logo" alt="logo Dev Dojo" />
      </div>
      <div className="header-search">
        <SearchBar />
      </div>
    </div>
  )
}

export default Header;
