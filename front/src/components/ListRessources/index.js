import React from 'react';
import Card from 'src/components/ListRessources/Card';
// import Filter from 'src/components/ListRessources/Filter';
import './styles.scss';

const ListRessources = ({ ressources, isLogged }) => {

  return (

    <div className="containers">

      <div className="buttons">
        {isLogged && (
          <button class="ui primary button">Ajouter une ressource</button>
        )}
      </div>

      <div className="ressources">
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
