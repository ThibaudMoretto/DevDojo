import React from 'react';
import './styles.scss';
import cardImg from '../../../assets/images/Card_Img.png'

function RecentRessources() {
  return (
    <div className="lastRessources">
      <h2>Les dernières <span>Ressources</span></h2>
      <div className="lastRessources-card">
        <div className="lastRessources-card-img">
          <img src={cardImg} alt="Apprendre le HTML" />
        </div>
        <div className="lastRessources-card-content">
          <h3>Apprendre le HTML</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed blandit nisi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecentRessources
