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
        <div className="title">{ressource.title}</div>
        <div className="author">Publié par un auteur</div>
        <div className="date">{ressource.publication_date}</div>
        <div className="description">{ressource.description}</div>
        <div className="techno">JavaScript</div>
        <div className="duration">Durée : {ressource.duration}min</div>
        <div className="difficulty">Difficulté : {ressource.difficulty_id}/5</div>
        <div className="category">Type de ressource : {ressource.ressource_type_id}</div>
        <div className="link">
          <a href="">Accéder à la ressource</a>
        </div>
        <div className="btn">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
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
