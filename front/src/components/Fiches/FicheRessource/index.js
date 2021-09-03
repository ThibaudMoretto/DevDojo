import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Redirect } from 'react-router-dom';
import RessourceForm from 'src/containers/Forms/RessourceForm';
import RessourceDelete from 'src/containers/RessourceDelete';
import Card from 'src/components/Lists/ListMentors/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FicheRessource({ ressource, isLogged }) {
  if (!ressource) {
    return <Redirect to="/ressources" />;
  }

  return (
    <>
      <div className="containers">
        <div className="ressource-title">
          {ressource.title}
          <span className="button-add">
            {isLogged && (
              <div className="button-edit">
                <RessourceForm
                  ressource={ressource}
                  buttonMessage="Modifier"
                  headerMessage="Modifier la ressource"
                  isEdit
                />
                <RessourceDelete
                  ressource={ressource}
                  buttonMessage="Supprimer"
                  headerMessage="Supprimer la ressource"
                  isEdit
                />
              </div>
            )}
          </span>
        </div>
      </div>

      <div className="general-container">
      <div className="c--img">

        <img src="https://images.unsplash.com/photo-1537884944318-390069bb8665" alt="img" className="img" />
      <div className="ressource-mentor">
        <div className="mentors">
          <Card {...ressource.author} />
        </div>
      </div>

      </div>
        <div className="container-description">
          <p className="ressource-info-description-t">Description:</p>
          <div className="ressource-info-description">
            {ressource.description}
          </div>

        <div className="ressource-info">
          <div className="details">
            <p className="ressource-info-details"> Details</p>
            <div className="ressource-info-difficulty">
              Niveau de difficulté : {ressource.difficulty}
            </div>
            <div className="ressource-info-language">
              Langue : {ressource.language}
            </div>
            <div className="ressource-info-technologies">
              {ressource.technologiesRelated.map((technology) => (
                <FontAwesomeIcon
                  key={technology.id}
                  className="badges-techno"
                  icon={['fab', `${technology.logo}`]}
                />
              ))}
            </div>

            <div className="ressource-info-description-type">Type de ressource : {ressource.ressource_type}</div>


            <div className="ressource-info-second-info">
              <div className="ressource-info-publicationDate">
                Date de publication : {ressource.publication_date}
              </div>
              <div className="ressource-info-duration">
                Durée estimée de lecture : {ressource.duration} min
              </div>
              <div className="ressource-info-link">
                {' '}
                <a href={ressource.link} target="_blank" rel="noreferrer">
                  Lien vers la ressource
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>



    </>
  );
}

FicheRessource.propTypes = {
  ressource: PropTypes.object,
  isLogged: PropTypes.bool.isRequired,
};

FicheRessource.defaultProps = {
  ressource: null,
};

export default FicheRessource;
