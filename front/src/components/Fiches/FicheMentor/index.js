/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from "prop-types";
import Card from 'src/components/Lists/ListRessources/Card';
import './styles.scss';
import { Redirect } from 'react-router-dom';
import MentorForm from 'src/containers/Forms/MentorForm';
import MentorDelete from 'src/containers/MentorDelete';
import image from 'src/assets/images/mentor.jpg';

function FicheMentor({ mentor, isLogged }) {
  console.log('console log dans fiche mentor', mentor);

  if (!mentor) {
    return <Redirect to="/mentors" />;
  }

  return (
    <>
      <div className="buttons">
        {isLogged && (
          <div className="buttons--c">
            <MentorForm
              mentor={mentor}
              buttonMessage="Modifier"
              headerMessage="Modifier les informations du mentor"
              isEdit
            />
            <MentorDelete
              mentor={mentor}
              buttonMessage="Supprimer"
              headerMessage="Supprimer le mentor"
              isEdit
            />
          </div>
        )}
      </div>
      <div className="containers">
        <div className="mentor">
          <img
            src={image}
            alt="une de image mentor"
            className="mentor--img-mentor"
          />

          <div className="mentor--information">
            <div className="mentor--name">{mentor.name}</div>
            <div className="mentor--description">{mentor.description}</div>
            <div className="fontColor">
              <div className="mentor--github">
                Github : {mentor.github_account}
              </div>
              <div className="mentor--youtube">
                Youtube : {mentor.youtube_account}
              </div>
              <div className="mentor--website">Site Web : {mentor.website}</div>
              <div className="mentor--twitter">
                Twitter : {mentor.twitter_account}
              </div>
              <div className="mentor--linkedin">
                Linkedin : {mentor.linkedin_account}
              </div>
              <div className="mentor--twitch">
                Twitch : {mentor.twitch_account}
              </div>
            </div>
          </div>
        </div>

        <div className="ressource-title">Ses ressources</div>

        <div className="ressources">
          {mentor.ressource.map((ressource) => (
            <Card key={ressource.id} author={mentor.name} {...ressource} />
          ))}
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
