import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({
  id,
  title,
  description,
  link,
}) => (
  <article className="card">
    <div className="container--card">
    <div className="card-content">
      {/* Lien externe d'origine de la ressource sur toute la div article*/}
      <a href={`https://www.youtube.com/watch?v=oavMtUWDBTM`} target="_blank">
      <img src="#" alt="une image"/>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </a>
    </div>
    {/* Lien vers la fiche ressource avec /ressources/+title/+id */}
    <Link to={`/ressources/${title}/${id}`} className="card-button">En savoir plus</Link>
    </div>
    
  </article>
);

export default Card;
