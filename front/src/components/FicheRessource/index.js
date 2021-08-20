import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function FicheRessource({ ressource }) {
  if (!ressource) {
    return <Redirect to="/error" />;
  }
  console.log(ressource);
  return (
    <div>
      <div className="container">
        <div className="container--title">{ressource.title}</div>
        <div className="container--description">{ressource.description}</div>
        <div className="container--techno">JavaScript</div>
          <div className="font-color">
            <div className="publication">
              <div className="container--author">Publié par un auteur le </div>
              <div className="container--date">{ressource.publication_date}</div>
            </div>

            <div className="information">
              <div className="container--duration">Durée : {ressource.duration}min</div>
              <div className="container--difficulty">Difficulté : {ressource.difficulty_id}/5</div>
            </div>
            <div className="container--category">Type de ressource : {ressource.ressource_type_id}</div>
          </div>
            <div className="container--link">
          <a href="">Accéder à la ressource</a>
        </div>
        <div className="btn">
          <button className="btn--edit">Edit</button>
          <button className="btn--delete">Delete</button>
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
