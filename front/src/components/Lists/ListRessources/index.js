import React from 'react';
import Card from 'src/components/Lists/ListRessources/Card';
import PropTypes from 'prop-types';
import RessourceForm from 'src/containers/Forms/RessourceForm';
import './styles.scss';

const ListRessources = ({ ressources, isLogged }) => {
  return (
    <>
      <div className="container--button">
        {!isLogged && (
          <div className="buttons">
            <RessourceForm
              buttonMessage="Ajouter une ressource"
              headerMessage="Ajouter une ressource"
              isEdit={false}
            />
          </div>
        )}
      </div>

      <div className="containers">
        <div className="ressource-title">Nos ressources</div>

        <div className="ressources">
          {ressources.map((ressource) => (
            <Card key={ressource.id} {...ressource} />
          ))}
        </div>
      </div>
    </>
  );
};

ListRessources.propTypes = {
  ressources: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isLogged: PropTypes.bool,
};

export default ListRessources;
