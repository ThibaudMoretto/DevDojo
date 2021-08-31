/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({ name, image }) => {
  // Fonction provisoire pour générer des rôles qui seront intégrés dans la bdd plus tard ?
  const roles = [
    'Dev Front-End',
    'Dev Back-End',
    'UI/UX Designer',
    'Dev mobile',
    'Dev wordpress',
  ];
  const randomIndex = Math.floor(Math.random() * roles.length);
  const randomRole = roles[randomIndex];

  return (
    <Link to={`/mentors/${name}`}>
      <article className="card-mentor">
        <div className="card-mentor-content">
          <div className="card-mentor-info d-flex justify-content-start align-items-center">
            <div className="card-mentor-info-image">
              {image === '' ? (
                <img
                  src="https://edovel.com/wp-content/uploads/2019/06/Quentin.jpg"
                  alt="mentor"
                />
              ) : (
                <img src={image} alt="mentor" />
              )}
            </div>
            <div className="card-mentor-info-title">
              <div className="card-mentor-info-title-name">{name}</div>
              <div className="card-mentor-info-title-role">{randomRole}</div>
            </div>
          </div>
          <div className="card-mentor-technos">
            <span className="badge badge-html">html</span>
            <span className="badge badge-css">css</span>
            <span className="badge badge-javascript">javascript</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

{
  /* <article className="card">
    <div className="card--container">
      <div className="card-content"> */
}
{
  /* Lien vers la fiche mentor avec /ressources/+name */
}
//       <Link to={`/mentors/${name}`}>
//         <img src={image} alt="une de image mentor" className="card--img-mentor" />
//         <h2 className="card-title">{name}</h2>

//         <p className="card-description">{description}</p>
//       </Link>
//     </div>
//     {/* Lien vers la fiche mentor avec /ressources/+name */}
//   </div>
// </article>
