import React from 'react';
import Card from '../ListMentors/Card';
import './styles.scss';

function FicheMentor({ mentor }) {
  console.log(mentor);
  return (
    <div>
      <div className="container">
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
}

export default FicheMentor;
