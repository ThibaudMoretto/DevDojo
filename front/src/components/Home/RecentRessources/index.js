import React from 'react';
import './styles.scss';
import cardImg from '../../../assets/images/Card_Img.png';
import { Button } from 'semantic-ui-react';

function RecentRessources() {
  return (
    <div className="lastRessources">
      <div className="lastRessources--container">
        <h2 className=" lastRessources--title">Les dernières <span className="title--color">Ressources</span></h2>
        <div className="container">
        <div className="card">

              <div className="card--container">
                    <div className="card--img">
                      <img src={cardImg} alt="Apprendre le HTML" />
                    </div>
                    <div className="card--title">
                      <h3>Apprendre le HTML</h3>
                    </div>
                    <p className="card--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus sed blandit nisi.</p>            
              </div>

              <div className="card--container">
                    <div className="card--img">
                      <img src={cardImg} alt="Apprendre le HTML" />
                    </div>
                    <div className="card--title">
                      <h3>Apprendre le HTML</h3>
                    </div>
                    <p className="card--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus sed blandit nisi.</p>            
              </div>

              <div className="card--container">
                    <div className="card--img">
                      <img src={cardImg} alt="Apprendre le HTML" />
                    </div>
                    <div className="card--title">
                      <h3>Apprendre le HTML</h3>
                    </div>
                    <p className="card--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus sed blandit nisi.</p>            
              </div>
            </div>
        </div>
          
            <div className="button">
              {/* <button className="button--last_sources">clickclick</button> */}
              <Button color='red'> Afficher nos dernières ressources </Button>
            </div>
          
      </div>
    </div>
  )
}

export default RecentRessources





