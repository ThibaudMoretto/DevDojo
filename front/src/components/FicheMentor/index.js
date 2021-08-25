import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/ListRessources/Card';
import './styles.scss';
import { Redirect } from 'react-router-dom';

function FicheMentor({ mentor, isLogged }) {
  if (!mentor) {
    return <Redirect to="/error" />;
  }
  return (
    <>

      <div className="buttons">
        {isLogged && (
          <div>
            <button className="ui primary button">Modifier</button>
            <button className="ui secondary button">Supprimer</button>
          </div>
        )}
      </div>

    <div className="containers">

      <div className="mentor">
        <div className="mentor--name">{mentor.name}</div>
        <div className="mentor--description">{mentor.description}</div>

      <div className="fontColor">
        <div className="mentor--github">Github : {mentor.github_account}</div>
        <div className="mentor--youtube">Youtube : {mentor.youtube_account}</div>
        <div className="mentor--website">Site Web : {mentor.website}</div>
        <div className="mentor--twitter">Twitter : {mentor.twitter_account}</div>
        <div className="mentor--linkedin">Linkedin : {mentor.linkedin_account}</div>
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

    </>
  )
};

FicheMentor.propTypes = {
  mentor: PropTypes.object.isRequired,
};

FicheMentor.defaultProps = {
  mentor: null,
};

export default FicheMentor;


