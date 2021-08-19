import React from 'react';
import Card from 'src/components/ListRessources/Card';
// import Filter from 'src/components/ListRessources/Filter';
import './styles.scss';

const ListRessources = ({ ressources }) => (
  <div className="sources">
    {ressources.map((ressource) => (
      <Card
        key={ressource.id}
        {...ressource}
      />
    ))}
  </div>
);

export default ListRessources;
