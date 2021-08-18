import React from 'react';
import Card from 'src/components/ListRessources/Card';
// import Filter from 'src/components/ListRessources/Filter';
// import SearchBar from 'src/components/ListRessources/SearchBar';
import './styles.scss';

const ListRessources = ({ ressources }) => (
  <div>
    {ressources.map((ressource) => (
      <Card
        key={ressource.id}
        {...ressource}
      />
    ))}
  </div>
);

export default ListRessources;
