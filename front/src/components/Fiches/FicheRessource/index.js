/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
import Loading from 'src/components/App/Loading';
import image from 'src/assets/images/Card_Img.png';
import { Redirect } from 'react-router-dom';
import RessourceForm from 'src/containers/Forms/RessourceForm';
import RessourceDelete from 'src/containers/RessourceDelete';
import Card from 'src/components/Lists/ListMentors/Card';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

function FicheRessource({ ressource, isLogged, loading }) {
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

        <div className="ressource-info">
          <div className="ressource-info-description">
            {ressource.description}
          </div>
          <div className="ressource-info-publicationDate">
            Date de publication : {ressource.publication_date}
          </div>
          {/* Mettre plus tard des badges de difficulmté ici comme pour les badges de type de ressource */}
          <div className="ressource-info-difficulty">
            Niveau de difficulté : {ressource.difficulty}
          </div>
          <div className="ressource-info-duration">
            Durée estimée de lecture : {ressource.duration} min
          </div>
          <div className="ressource-info-language">
            Langue : {ressource.language}
          </div>
          {/* Reprendre les badges de couleur pour le type de ressource comme dans les cards ressources */}
          <div className="ressource-info-description">
            Type de ressource : {ressource.ressource_type}
          </div>
          <div className="ressource-info-link">
            {' '}
            <a href={ressource.link} target="_blank" rel="noreferrer">
              Lien vers la ressource
            </a>{' '}
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
        </div>

        <div className="ressource-mentor">
          <div className="mentors">
            <Card {...ressource.author} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FicheRessource;
