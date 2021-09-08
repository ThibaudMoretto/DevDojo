import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Redirect } from 'react-router-dom';
import RessourceForm from 'src/containers/Forms/RessourceForm';
import RessourceDelete from 'src/containers/RessourceDelete';
import Card from 'src/components/Lists/ListMentors/Card';
import { Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FicheRessource({ ressource, isLogged }) {
  const ressourceImage = ressource.ressource_image === '' || null || undefined ? 'https://images.unsplash.com/photo-1537884944318-390069bb8665' : ressource.ressource_image;
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

        <div className="general-container">
          <div className="container-img">
            <img src={ressourceImage} alt="img" className="img" />
            <div className="ressource-mentor">
              <div className="mentors mentors-desktop">
                <Card {...ressource.author} />
              </div>
            </div>
          </div>
          <div className="container-description">
            <p className="ressource-info-description-t">Description :</p>
            <div className="ressource-info-description">
              {ressource.description}
            </div>

            <div className="ressource-info">
              <div className="details">
                <div className="ressource-info-publicationDate">
                  <span className="d-bold">Date de publication :</span> {ressource.publication_date}
                </div>
                <div className="ressource-info-duration">
                  <span className="d-bold">Durée :</span> {ressource.duration} min
                </div>
                <div className="ressource-info-difficulty">
                  <span className="d-bold">Niveau :</span> {ressource.difficulty}
                </div>
                <div className="ressource-info-language">
                  <span className="d-bold">Langues :</span> {ressource.language}
                </div>

                <div className="ressource-info-description-type"><span className="d-bold">Type de ressource :</span> <span className={`badge badge-${ressource.ressource_type}`}>{ressource.ressource_type}</span></div>

                <div>
                  <div><span className="d-bold">Technologies :</span></div>
                  <div className="ressource-info-technologies">
                    {ressource.technologiesRelated.map((technology) => (
                      <FontAwesomeIcon
                        key={technology.id}
                        className="badges-techno badges-techno2"
                        icon={['fab', `${technology.logo}`]}
                      />
                    ))}
                  </div>
                  <div className="ressource-info-link">
                    <Button className="ui facebook button" target="_blank" rel="noreferrer" href={ressource.link}>
                      Lien Ressource
                    </Button>
                  </div>
                </div>
                <div className="ressource-mentor">
                  <div className="mentors mentors-start">
                    <Card {...ressource.author} />
                  </div>
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
