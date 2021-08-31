/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// import cardImg from 'src/assets/images/Card_Img.png';

const Card = ({
  title, slug, author, duration, ressource_type,
}) => (
  <article className="card-ressource card-ressource-1">
    <div className="card-ressource-content">
      <div className="card-ressource-badge">
        <span className={`badge badge-${ressource_type}`}> {ressource_type} </span>
      </div>
      <div className="card-ressource-content">
        <Link to={`/ressources/${slug}`}><h3>{title}</h3></Link>
        <div className="card-ressource-content-details">
          <p>par <Link to={`/mentors/${author.name}`}>{author.name}</Link></p>
          <p>Durée - <span>{duration} min</span></p>
        </div>
      </div>
    </div>
  </article>
);

export default Card;
