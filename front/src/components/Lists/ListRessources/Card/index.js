/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({
  title, slug, author, duration, ressource_type,
}) => (
  <Link to={`/ressources/${slug}`}>
    <article className="card-ressource card-ressource-1">
      <div className="card-ressource-content">
        <div className="card-ressource-badge">
          <span className={`badge badge-${ressource_type}`}>
            {' '}
            {ressource_type}{' '}
          </span>
        </div>
        <div className="card-ressource-content">
          <h3>{title}</h3>
          <div className="card-ressource-content-details">
            <p>
              par {author.name}
            </p>
            <p>
              Durée - <span>{duration} min</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  </Link>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  duration: PropTypes.number,
  ressource_type: PropTypes.string,
};

Card.defaultProps = {
  duration: null,
  ressource_type: '',
};

export default Card;
