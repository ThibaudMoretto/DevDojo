import React from 'react';
import './styles.scss';

function SearchBar() {
  return (
    <form
      className='form'
    // action="/" 
    // method="get"
    >
      <input
        className='form-input'
        type="text"
        id="header-search"
        placeholder="Recherche ressource et mentor"
      />
    </form>
  )
}

export default SearchBar;
