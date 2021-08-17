import React from 'react';
import Card from 'src/components/ListRessources/Card';
import Filter from 'src/components/ListRessources/Filter';
import SearchBar from 'src/components/ListRessources/SearchBar';
import './styles.scss';

function ListRessources() {
  return (
    <div>
      <Card />
      <Filter />
      <SearchBar />
    </div>
  )
}

export default ListRessources;
