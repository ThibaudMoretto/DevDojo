/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import image from 'src/assets/images/mentor.jpg';

const Card = ({ name, description }) => (
  <article className="card">
    <div className="card--container">
      <div className="card-content">
        {/* Lien vers la fiche mentor avec /ressources/+name */}
        <Link to={`/mentors/${name}`}>
          <img src={image} alt="une de image mentor" className="card--img-mentor" />
          <h2 className="card-title">{name}</h2>

          <p className="card-description">{description}</p>
        </Link>
      </div>
      {/* Lien vers la fiche mentor avec /ressources/+name */}
    </div>
  </article>
);

Card.propTypes = {

  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
