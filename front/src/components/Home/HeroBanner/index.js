import React from 'react';
import './styles.scss';
import heroBanner from 'src/assets/images/HeroBanner.png';
import SearchBar from 'src/containers/SearchBar';

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
          <div className="container--searchbar">
            <SearchBar />
          </div>
        </div>

        <img
          src={heroBanner}
          alt="ninja ne qui fonctionne pas "
          className="home--picture"
        />
      </div>
    </div>
  );
}

export default HeroBanner;

//
