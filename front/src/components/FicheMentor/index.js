import React from 'react';
import Card from '../ListMentors/Card';
import PropTypes from 'prop-types';
import './styles.scss';
import { Redirect } from 'react-router-dom';

function FicheMentor({ mentor }) {
  if (!mentor) {
    return <Redirect to="/error" />;
  }
  console.log(mentor);
  return (
    <div className="containerMentor">
      <div className="containerMentor--sourceList">
        <div className="containerMentor--name">Nom : {mentor.name}</div>
        <div className="containerMentor--description">Présentation : {mentor.description}</div>
        <div className="containerMentor--github">Github : {mentor.github_account}</div>
        <div className="containerMentor--youtube">Youtube : {mentor.youtube_account}</div>
        <div className="containerMentor--website">Site Web : {mentor.website}</div>
        <div className="containerMentor--witter">Twitter : {mentor.twitter_account}</div>
        <div className="containerMentor--linkedin">Linkedin : {mentor.linkedin_account}</div>
        <div className="containerMentor--twitch">Twitch : {mentor.twitch_account}</div>
        <div className="containerMentor--ressources"> Mes ressources :
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
