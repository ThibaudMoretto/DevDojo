import React from 'react';
import './styles.scss';
import image from 'src/assets/images/404.png';
import { Button } from 'semantic-ui-react';

function Error() {
  return (
    <div className="container">
      <div>
      <img src={image} alt="page 404" />
      </div>
      <a href="/"><Button color="red">REVENIR VERS LE DROIT CHEMIN</Button></a>
    </div>
  );
}

export default Error;
