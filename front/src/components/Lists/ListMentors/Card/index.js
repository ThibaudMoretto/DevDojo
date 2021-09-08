/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';
import defaultImage from 'src/assets/images/defaultMentor.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({
  name, image, dev_role, mainTechnologies,
}) => (
  <Link to={`/mentors/${name}`}>
    <article className="card-mentor">
      <div className="card-mentor-content">
        <div className="card-mentor-info d-flex justify-content-start align-items-center">
          <div className="card-mentor-info-image">
            {image === '' ? (
              <img src={defaultImage} alt="mentor" />
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
          {mainTechnologies?.map((technology) => (
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
  dev_role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  mainTechnologies: PropTypes.array,
};

Card.defaultProps = {
  mainTechnologies: null,
};

export default Card;
