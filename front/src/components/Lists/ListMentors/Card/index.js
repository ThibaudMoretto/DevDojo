/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const Card = ({ name, image, dev_role, mainTechnologies }) => (
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
            <div className="card-mentor-info-title-role">{dev_role}</div>
          </div>
        </div>
        <div className="card-mentor-technos">
          {mainTechnologies.map((technology) => (
            <FontAwesomeIcon
              key={technology.id}
              className="badges-techno"
              icon={['fab', `${technology.logo}`]}
            />
          ))}
        </div>
      </div>
    </article>
  </Link>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default Card;

{
  /* <div className="card-mentor-technos">
          <span className="badge badge-html">html</span>
          <span className="badge badge-css">css</span>
          <span className="badge badge-javascript">javascript</span>
        </div> */
}
