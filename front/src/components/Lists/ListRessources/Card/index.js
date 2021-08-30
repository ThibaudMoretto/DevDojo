import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import cardImg from "src/assets/images/Card_Img.png";

const Card = ({ title, description, slug }) => (
  <article className="card">
    <div className="card--container">
      <img src={cardImg} alt="une image" />
      <div className="card-content">
        {/* Lien externe d'origine de la ressource sur toute la div article*/}
        {/* <a href={`http://localhost:8080/ressources/${slug}`} target="_blank"> */}

        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>

      <div className="card--conButton">
        {/* Lien vers la fiche ressource avec /slug */}
        <Link to={`/ressources/${slug}`} className="card-button">
          En savoir plus
        </Link>
      </div>
    </div>
  </article>
);

export default Card;
