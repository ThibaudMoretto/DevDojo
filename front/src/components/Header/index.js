import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'src/containers/NavBar';
import SearchBar from 'src/containers/SearchBar';
import './styles.scss';

function Header({ displaySearchBar }) {
  return (
    <>
      <NavBar />
      <div className="container-searchBar">
        {displaySearchBar && (
          <div className="header-search">
            <SearchBar />
          </div>
        )}
      </div>
    </>
  );
}

Header.propTypes = {
  displaySearchBar: PropTypes.bool.isRequired,
};

export default Header;
