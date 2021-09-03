/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({
  title, slug, author, duration, ressource_type, technologiesRelated,
}) => (
  <Link to={`/ressources/${slug}`}>
    <article className="card-ressource card-ressource-1">
      <div className="card-ressource-content">
        <div className="card-ressource-badge">
          <span className={`badge badge-${ressource_type}`}>
            {' '}
            {ressource_type}{' '}
          </span>
          <span>Durée de lecture - {duration} min</span>
        </div>
        <div className="card-ressource-content">
          <h3>{title}</h3>
          <div className="card-ressource-content-details">
            <span className="author">
              par {author.name}
            </span>
            <span className="ressource-info-technologies">
              {technologiesRelated.map((technology) => (
                <FontAwesomeIcon
                  key={technology.id}
                  className="badges-techno badges-techno-card"
                  icon={['fab', `${technology.logo}`]}
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </article>
  </Link>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  technologiesRelated: PropTypes.array,
  slug: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  duration: PropTypes.number,
  ressource_type: PropTypes.string,
};

Card.defaultProps = {
  duration: null,
  ressource_type: '',
  technologiesRelated: null,
};

export default Card;
