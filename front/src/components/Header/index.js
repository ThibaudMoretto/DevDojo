import React from 'react';
import NavBar from 'src/containers/NavBar';
import SearchBar from 'src/containers/SearchBar';
import './styles.scss';

function Header({ displaySearchBar }) {
  return (
    <>
      <NavBar />
      <div>
        {displaySearchBar && (
          <div className="header-search">
            <SearchBar />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
