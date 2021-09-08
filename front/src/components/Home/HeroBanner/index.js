import React from 'react';
import './styles.scss';
import SearchBar from 'src/containers/SearchBar';
import heroBanner from 'src/assets/images/Herobanner.png';
import DevDojo from 'src/assets/images/DevDojo.gif';

function HeroBanner() {
  return (
    <div className="herobanner">
      <div className="herobanner--container">
        <div className="herobanner--title">
          {' '}
          {/* contient toute la partie de gauche */}
          <h2 className="herobanner--subTitle">
            {' '}
            <span className="herobanner--subTitle--color">Apprenez</span> à
            devenir un ninja du code{' '}
          </h2>
          <p className="herobanner--description">
            {' '}
            Débutant, modéré ou bien expert, notre plateforme répertorie toutes
            les ressources les plus efficaces et pertinentes du Web pour
            faciliter votre apprentissage et vous faire gagner du temps.
          </p>
          <SearchBar />
        </div>

        <img
          src={DevDojo}
          alt="img"
          className="home--picture"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
