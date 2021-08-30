import React from 'react';
// import PropTypes from "prop-types";
import Card from 'src/components/Lists/ListRessources/Card';
import './styles.scss';
import { Redirect } from 'react-router-dom';
import MentorForm from 'src/containers/Forms/MentorForm';
import MentorDelete from 'src/containers/MentorDelete';

function FicheMentor({ mentor, isLogged }) {
  console.log('console log dans fiche mentor', mentor);
  if (!mentor) {
    return <Redirect to="/mentors" />;
  }

  return (
    <div className="containers">
      <div className="buttons">
        {!isLogged && (
          <div>
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

      <div className="mentor">
        <div className="mentor--name">{mentor.name}</div>
        <div className="mentor--description">{mentor.description}</div>

        <div className="fontColor">
          <div className="mentor--github">Github : {mentor.github_account}</div>
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
          <div className="mentor--twitch">Twitch : {mentor.twitch_account}</div>
        </div>
      </div>

      <div className="ressource-title">Ses ressources</div>

      <div className="ressources">
        {mentor.ressource.map((ress) => (
          <Card
            key={ress.id}
            name={ress.title}
            description={ress.description}
            slug={ress.slug}
          />
        ))}
      </div>
    </div>
  );
}

// FicheMentor.propTypes = {
//   mentor: PropTypes.object.isRequired,
// };

// FicheMentor.defaultProps = {
//   mentor: null,
// };

export default FicheMentor;
