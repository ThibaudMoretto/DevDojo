import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
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
          <div className="c--img">
            <img src={ressourceImage} alt="img" className="img" />

          </div>
          <div className="container-description">
            <p className="ressource-info-description-t">Description:</p>
            <div className="ressource-info-description">
              {ressource.description}
            </div>
            <p className="ressource-info-description-t">Auteur:</p>
            <div className="ressource-mentor">
              <div className="mentors mentors-start">
                <Card {...ressource.author} />
              </div>
            </div>
            <div className="ressource-info">
              <div className="details">
                <p className="ressource-info-details">Details:</p>
                <div className="ressource-info-difficulty">
                  <span className="d-bold">Niveau:</span> {ressource.difficulty}
                </div>
                <div className="ressource-info-language">
                  <span className="d-bold">Langues :</span> {ressource.language}
                </div>
                <div><span className="d-bold">Technologies:</span></div>
                <div className="ressource-info-technologies">
                  {ressource.technologiesRelated.map((technology) => (
                    <FontAwesomeIcon
                      key={technology.id}
                      className="badges-techno badges-techno2"
                      icon={['fab', `${technology.logo}`]}
                    />
                  ))}
                </div>

                <div className="ressource-info-description-type"><span className="d-bold">Type de ressource :</span> {ressource.ressource_type}</div>
                <div className="ressource-info-link">
                    {/* {' '}
                  <a href={ressource.link} target="_blank" rel="noreferrer">
                    Lien vers la ressource
                  </a>{' '} */}
                  {/* <button class="ui facebook button button">Lien Ressource</button> */}
                  <Button className="ui facebook button button" as={Link} href={ressource.link}>
                  Lien Ressource
                  </Button>
                </div>

                <div className="ressource-info-second-info">
                  <div className="ressource-info-publicationDate">
                    Date de publication : {ressource.publication_date}
                  </div>
                  <div className="ressource-info-duration">
                    Durée : {ressource.duration} min
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
