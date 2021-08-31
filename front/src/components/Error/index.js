import React from 'react';
import './styles.scss';
import image from '../../assets/images/404picture.png';

function Error() {
  return (
    <div className="container">
      <img src={image} alt="une image de ninja" />
      <div className="container--message">ERROR 404 !</div>
    </div>
  );
}

export default Error;
