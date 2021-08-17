import React from 'react';
import NavBar from 'src/components/Header/NavBar';
import SearchBar from 'src/components/Header/SearchBar';
import './styles.scss';

function Header() {
  return (
    <div>
      <NavBar />
      <SearchBar />
    </div>
  )
}

export default Header;
