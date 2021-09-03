import React from 'react';
import Card from 'src/components/Lists/ListRessources/Card';
import PropTypes from 'prop-types';
import RessourceForm from 'src/containers/Forms/RessourceForm';
import './styles.scss';

const ListRessources = ({ ressources, isLogged }) => (
  <>
    <div className="containers">
      <div className="ressource-title">
        Nos <span className="ressource-title-red">Ressources</span>
        {isLogged && (
          <span className="button-add">
            <RessourceForm
              buttonMessage="Ajouter une ressource"
              headerMessage="Ajouter une ressource"
              isEdit={false}
            />
          </span>
        )}
      </div>

      <div className="ressources">
        {ressources.map((ressource) => (
          <Card key={ressource.id} {...ressource} />
        ))}
      </div>
    </div>
  </>
);

ListRessources.propTypes = {
  ressources: PropTypes.array.isRequired,
  isLogged: PropTypes.bool,
};

ListRessources.defaultProps = {
  isLogged: false,
};

export default ListRessources;
