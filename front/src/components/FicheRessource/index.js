import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function FicheRessource({ ressource, isLogged }) {
  if (!ressource) {
    return <Redirect to="/error" />;
  }

  return (


    <div className="containers">

      <div className="button">
        {isLogged && (
          <div>
            <button class="ui primary button">Modifier</button>
            <button class="ui secondary button">Supprimer</button>
          </div>
        )}
      </div>

      <div className="containers--title">{ressource.title}</div>
      <div className="containers--description">{ressource.description}</div>
      <div className="containers--techno">JavaScript</div>
      <div className="font-color">
        <div className="publication">
          <div className="containers--author">Publié par un auteur le </div>
          <div className="containers--date">{ressource.publication_date}</div>
        </div>

        <div className="information">
          <div className="containers--duration">Durée : {ressource.duration}min</div>
          <div className="containers--difficulty">Difficulté : {ressource.difficulty_id}/5</div>
        </div>
        <div className="containers--category">Type de ressource : {ressource.ressource_type_id}</div>
      </div>
      <div className="containers--link">
        <a href="">Accéder à la ressource</a>
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
