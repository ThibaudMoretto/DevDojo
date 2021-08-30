import React from 'react';
import './styles.scss';
import Card from 'src/components/Lists/ListRessources/Card';
import { Button } from 'semantic-ui-react';
// import PropTypes from 'prop-Types';

function RecentRessources({ ressources }) {
  return (
    <div className="lastRessources">
      <div className="lastRessources--container">
        <h2 className=" lastRessources--title">
          Les dernières <span className="title--color">Ressources</span>
        </h2>
        <div className="card">
          {ressources.map((ressource) => (
            <Card key={ressource.id} {...ressource} />
          ))}
        </div>

        <div className="button">
          <Button color="red"> Afficher nos dernières ressources </Button>
        </div>
      </div>
    </div>
  );
}

// RecentRessources.propTypes ={
//   ressources:PropTypes.
// }

export default RecentRessources;
