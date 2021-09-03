import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import image from 'src/assets/images/404.png';
import { Button } from 'semantic-ui-react';

function Error() {
  return (
    <div className="container">
      <div>
        <img src={image} alt="page 404" />
      </div>
      <Link to="/">
        <Button color="red">REVENIR VERS LE DROIT CHEMIN</Button>
      </Link>
    </div>
  );
}

export default Error;
