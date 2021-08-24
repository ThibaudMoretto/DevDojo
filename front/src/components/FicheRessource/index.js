import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Loading from 'src/components/App/Loading'

function FicheRessource({ ressource, isLogged, loading }) {
  if (loading) {
    return <Loading />;
  };

  return (

    <div className="containers">

      <div className="buttons">
        {isLogged && (
          <div>
            <button className="ui primary button">Modifier</button>
            <button className="ui secondary button">Supprimer</button>
          </div>
        )}
      </div>

      <div className="ressource">
        <div className="ressource--title">{ressource.title}</div>
        <div className="ressource--description">{ressource.description}</div>
        <div className="ressource--techno">JavaScript</div>
        <div className="font-color">
          <div className="ressource--publication">
            <div className="ressource--publication--author">Publié par un auteur le </div>
            <div className="ressource--publication--date">{ressource.publication_date}</div>
          </div>
          <div className="ressource--information">
            <div className="ressource--information--duration">Durée : {ressource.duration}min</div>
            <div className="ressource--information--difficulty">Difficulté : {ressource.difficulty_id}/5</div>
          </div>
          <div className="ressource--category">Type de ressource : {ressource.ressource_type_id}</div>
        </div>
        <div className="ressource--link">
          <a href="">Accéder à la ressource</a>
        </div>
      </div>

    </div>
  )
}

FicheRessource.propTypes = {
  ressource: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

FicheRessource.defaultProps = {
  ressource: null,
};

export default FicheRessource;
