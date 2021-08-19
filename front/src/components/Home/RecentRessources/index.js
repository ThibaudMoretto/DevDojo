import React from 'react';
import './styles.scss';
import cardImg from '../../../assets/images/Card_Img.png'

function RecentRessources() {
  return (
    <div className="lastRessources">
      <div className="lastRessources--container">
        <h2 className=" lastRessources--title">Les dernières <span className="color--title">Ressources</span></h2>
        <div className="container">

              <div className="container--cards">
                    <div className="card--img">
                      <img src={cardImg} alt="Apprendre le HTML" />
                    </div>
                    <div className="card--title">
                      <h3>Apprendre le HTML</h3>
                    </div>
                    <p className="card--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus sed blandit nisi.</p>            
              </div>

              <div className="container--cards">
                    <div className="card--img">
                      <img src={cardImg} alt="Apprendre le HTML" />
                    </div>
                    <div className="card--title">
                      <h3>Apprendre le HTML</h3>
                    </div>
                    <p className="card--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus sed blandit nisi.</p>            
              </div>

              <div className="container--cards">
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
        <div className="button--position"></div>
        <button className="button--last_sources">clickclick</button>
      </div>
    </div>
  )
}

export default RecentRessources





{/* 





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
</div> */}
