/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { css, cx } from '@emotion/css';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Card = ({
  title, slug, author, duration, ressource_type, technologiesRelated, ressource_image,
}) => {
  const ressourceImage = ressource_image === '' || null || undefined ? 'https://images.unsplash.com/photo-1537884944318-390069bb8665' : ressource_image;

  return (
    <Link to={`/ressources/${slug}`}>
      <article
        className={css`
      border-radius: 20px;
      overflow: hidden;
      height: 23rem;
      width: 25rem;
      @media (max-width: 540px) {
        height: 16rem;
        width: 18rem;
      }
      color: #fff;
      font-weight: 400;
      font-size: 0.875rem;
      background-size: cover;
      margin-bottom: 2rem;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
      background-image: linear-gradient(180.28deg,rgba(36, 42, 92, 0) -71.51%,rgba(36, 42, 92, 0.8) 99.75%),url(${ressourceImage});
      background-position: center center;
    `}
      >
        <div className="card-ressource-content">
          <div className="card-ressource-badge">
            <span className={`badge badge-${ressource_type}`}>
              {' '}
              {ressource_type}{' '}
            </span>
            <span><FontAwesomeIcon icon={faClock} /> {duration} min</span>
          </div>
          <div className="card-ressource-content">
            <h3>{title}</h3>
            <div className="card-ressource-content-details">
              <span className="author">
                {author.name}
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
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  technologiesRelated: PropTypes.array,
  slug: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  duration: PropTypes.number,
  ressource_type: PropTypes.string,
  ressource_image: PropTypes.string,
};

Card.defaultProps = {
  duration: null,
  ressource_type: '',
  technologiesRelated: null,
  ressource_image: '',
};

export default Card;
