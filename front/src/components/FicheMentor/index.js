import React from 'react';
import Card from '../ListMentors/Card';
import PropTypes from 'prop-types';
import './styles.scss';
import { Redirect } from 'react-router-dom';

function FicheMentor({ mentor, isLogged }) {
  if (!mentor) {
    return <Redirect to="/error" />;
  }
  return (
    <div className="container">

      <div className="button">
        {isLogged && (
          <div>
            <button class="ui primary button">Modifier</button>
            <button class="ui secondary button">Supprimer</button>
          </div>
        )}
      </div>

      <div className="container--sourceList">
        <div className="name">Nom : {mentor.name}</div>
        <div className="description">Présentation : {mentor.description}</div>
        <div className="github">Github : {mentor.github_account}</div>
        <div className="youtube">Youtube : {mentor.youtube_account}</div>
        <div className="website">Site Web : {mentor.website}</div>
        <div className="twitter">Twitter : {mentor.twitter_account}</div>
        <div className="linkedin">Linkedin : {mentor.linkedin_account}</div>
        <div className="twitch">Twitch : {mentor.twitch_account}</div>
        <div className="ressources"> Mes ressources :
          {mentor.ressource.map((ress) => (
            <Card
              key={ress.id}
              {...ress}
            />
          ))}
        </div>
        <div className="btn">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
      {/* <ListRessources /> */}
    </div>
  )
};

FicheMentor.propTypes = {
  mentor: PropTypes.object.isRequired,
};

FicheMentor.defaultProps = {
  mentor: null,
};

export default FicheMentor;
