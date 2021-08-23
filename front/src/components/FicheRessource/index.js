import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function FicheRessource({ ressource, isLogged }) {
  if (!ressource) {
    return <Redirect to="/error" />;
  }

  return (

    <div className="container">

      <div className="button">
        {isLogged && (
          <div>
            <button class="ui primary button">Modifier</button>
            <button class="ui secondary button">Supprimer</button>
          </div>
        )}
      </div>

      <div className="ressource">
        <div className="ressource-title">{ressource.title}</div>
        <div className="container-ressource-author">Batman</div>
        <div className="container-ressource-description">{ressource.description}</div>
        <div className="container-ressource-techno">JavaScript</div>
        <div className="container-ressource-link">
          <a href="">Accéder à la ressource</a>
        </div>

      </div>
    </div>
  )
}

FicheRessource.propTypes = {
  ressource: PropTypes.object.isRequired,
};

FicheRessource.defaultProps = {
  ressource: null,
};

export default FicheRessource;
