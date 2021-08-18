import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({
  id,
  name,
  description,
}) => (
  <article className="card">
    <div className="card-content">
      {/* Lien vers la fiche mentor avec /ressources/+name/+id */}
      <Link to={`/mentors/${name}/${id}`}>
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
      </Link>
    </div>
    {/* Lien vers la fiche mentor avec /ressources/+name/+id */}
    <Link to={`/mentors/${name}`} className="card-button">En savoir plus</Link>
  </article>
);

export default Card;
