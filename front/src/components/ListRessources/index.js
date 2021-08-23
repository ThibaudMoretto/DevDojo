import React from 'react';
import Card from 'src/components/ListRessources/Card';
// import Filter from 'src/components/ListRessources/Filter';
import './styles.scss';

const ListRessources = ({ ressources, isLogged }) => {

  return (

    <div className="container">

      <div className="container-button">
        {isLogged && (
          <button class="ui primary button">Ajouter une ressource</button>
        )}
      </div>

      <div className="container-sources">
        {ressources.map((ressource) => (
          <Card
            key={ressource.id}
            {...ressource}
          />
        ))}
      </div>
    </div>
  )
};

export default ListRessources;
