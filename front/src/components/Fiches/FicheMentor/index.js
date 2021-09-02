/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from "prop-types";
import Card from 'src/components/Lists/ListRessources/Card';
import './styles.scss';
import { Redirect } from 'react-router-dom';
import MentorForm from 'src/containers/Forms/MentorForm';
import MentorDelete from 'src/containers/MentorDelete';
// import image from 'src/assets/images/mentor.jpg';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

function FicheMentor({ mentor, isLogged }) {
  if (!mentor) {
    return <Redirect to="/mentors" />;
  }

  return (

    <>

      <div className="containers">

        <div className="mentor-title">
          {mentor.name}
          <span className="button-add">
            {isLogged && (
              <div className="button-edit">
                <MentorForm
                  mentor={mentor}
                  buttonMessage="Modifier"
                  headerMessage="Modifier les informations du mentor"
                  isEdit
                />
                <MentorDelete
                  className="button-delete"
                  mentor={mentor}
                  buttonMessage="Supprimer"
                  headerMessage="Supprimer le mentor"
                  isEdit
                />
              </div>
            )}
          </span>
        </div>

        <div className="mentor-info">
          <div className="mentor-info-role">{mentor.dev_role}</div>
          <div className="mentor-info-description">{mentor.description}</div>
          <div className="mentor-info-technologies">
            {mentor.mainTechnologies.map((technology) => (
              <FontAwesomeIcon
                key={technology.id}
                className="badges-techno"
                icon={['fab', `${technology.logo}`]}
              />
            ))}
          </div>
          <div className="mentor-info-social">
            {mentor.github_account ? <a href={mentor.github_account} target="_blank" rel="noreferrer"> <FontAwesomeIcon className="mentor-info-social-badges" icon={['fab', 'github']} /> </a> : ''}
            {mentor.linkedin_account ? <a href={mentor.linkedin_account} target="_blank" rel="noreferrer"> <FontAwesomeIcon className="mentor-info-social-badges" icon={['fab', 'linkedin']} /> </a> : ''}
            {mentor.twitch_account ? <a href={mentor.twitch_account} target="_blank" rel="noreferrer"> <FontAwesomeIcon className="mentor-info-social-badges" icon={['fab', 'twitch']} /> </a> : ''}
            {mentor.twitter_account ? <a href={mentor.twitter_account} target="_blank" rel="noreferrer"> <FontAwesomeIcon className="mentor-info-social-badges" icon={['fab', 'twitter']} /> </a> : ''}
            {mentor.youtube_account ? <a href={mentor.youtube_account} target="_blank" rel="noreferrer"> <FontAwesomeIcon className="mentor-info-social-badges" icon={['fab', 'youtube']} /> </a> : ''}
          </div>
          <div className="mentor-info-website">
            <a href={mentor.website} target="_blank" rel="noreferrer"> Site internet | Portfolio </a>
          </div>
        </div>

        <div className="mentor-ressource">

          <div className="ressource-title">
            Ses <span className="ressource-title-red">Ressources</span>
          </div>

          <div className="ressources">
            {mentor.ressource.map((ressource) => (
              <Card key={ressource.id} author={mentor.name} {...ressource} />
            ))}
          </div>
        </div>

      </div>
    </>

  );
}

// FicheMentor.propTypes = {
//   mentor: PropTypes.object.isRequired,
// };

// FicheMentor.defaultProps = {
//   mentor: null,
// };

export default FicheMentor;
