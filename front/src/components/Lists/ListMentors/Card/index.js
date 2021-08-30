import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({ name, description }) => (
  <article className="card">
    <div className="card--container">
      <div className="card-content">
        {/* Lien vers la fiche mentor avec /ressources/+name */}
        <Link to={`/mentors/${name}`}>
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{description}</p>
        </Link>
      </div>
      {/* Lien vers la fiche mentor avec /ressources/+name */}
    </div>
  </article>
);

export default Card;
