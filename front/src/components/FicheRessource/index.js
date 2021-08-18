import React from 'react';
import './styles.scss';

function FicheRessource({ ressource }) {
  console.log(ressource); 
  return (
    <div>
      <div className="container">
      <div className="title">{ressource.title}</div>
      <div className="author">Publié par Grafikart</div>
      <div className="date">{ressource.publication_date}</div>
      <div className="description">{ressource.description}</div>
      <div className="techno">{ressource.language_id}</div>
      <div className="duration">{ressource.duration}</div>
      <div className="difficulty">{ressource.difficulty_id}</div>
      <div className="category">{ressource.ressource_type_id}</div>
      <div className="link">{ressource.link}</div>
      <div className="btn">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
    </div>
  )
}

export default FicheRessource;
