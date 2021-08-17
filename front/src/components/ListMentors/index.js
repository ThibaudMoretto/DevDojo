import React from 'react';
import Card from 'src/components/ListMentors/Card';
import Filter from 'src/components/ListMentors/Filter';
import SearchBar from 'src/components/ListMentors/SearchBar';
import './styles.scss';

function ListMentors() {
  return (
    <div>
      <Card />
      <Filter />
      <SearchBar />
    </div>
  )
}

export default ListMentors;
