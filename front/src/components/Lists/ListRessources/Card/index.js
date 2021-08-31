import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// import cardImg from 'src/assets/images/Card_Img.png';

const Card = ({ title, description, slug }) => (
  <article className="card-ressource card-ressource-1">
    <div className="card-ressource-content">
        <div className="card-ressource-badge">
            <span className="badge badge-facile">Facile</span>
        </div>
        <div className="card-ressource-description">
            <h3>Apprendre le html par la pratique</h3>
            <div className="card-ressource-description-details">
                <p>par <span>Rémi et Thibaud</span></p>
                <p>Durée - <span>10 min</span></p>
            </div>
        </div>
    </div>
</article>
);

export default Card;



{/* <article className="card">
    <div className="card--container">
      <img src={cardImg} alt="une image" />
      <div className="card-content"> */}
        {/* Lien externe d'origine de la ressource sur toute la div article */}
        {/* <a href={`http://localhost:8080/ressources/${slug}`} target="_blank"> */}

  //       <h2 className="card-title">{title}</h2>
  //       <p className="card-description">{description}</p>
  //     </div>

  //     <div className="card--conButton">
  //       {/* Lien vers la fiche ressource avec /slug */}
  //       <Link to={`/ressources/${slug}`} className="card-button">
  //         En savoir plus
  //       </Link>
  //     </div>
  //   </div>
  // </article>