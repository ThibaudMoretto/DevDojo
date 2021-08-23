import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import cardImg from '../../../assets/images/Card_Img.png'

const Card = ({
  title,
  description,
  slug,
}) => (
  <article className="card">
    <div className="container--card">
      <img src={cardImg} alt="une image" />
      <div className="card-content">
        {/* Lien externe d'origine de la ressource sur toute la div article*/}
        <a href={`https://www.youtube.com/watch?v=oavMtUWDBTM`} target="_blank">

          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </a>
      </div>
      {/* Lien vers la fiche ressource avec /slug */}
      <Link to={`/ressources/${slug}`} className="card-button">En savoir plus</Link>
    </div>
  </article>
);

export default Card;
