import React from 'react';
import './styles.scss';
import heroBanner from '../../../assets/images/Herobanner.png';
import { Button } from 'semantic-ui-react'

function HeroBanner() {
  return (
   <div className="herobanner">
      <div className="herobanner--container">

      <div className="herobanner--title"> {/* contient toute la partie de gauche */}
        <h2 className="herobanner--subTitle"> <span className="herobanner--subTitle--color">Apprenez</span> à devenir un ninja du code </h2>
      

    <p className="herobanner--description"> Débutant, modéré ou  bien expert, notre plateforme répertorie toutes les ressources les plus efficaces et pertinentes du Web pour faciliter votre apprentissage et vous faire gagner du temps.
    </p>
        <div className="container--button">
          {/* <button className="button--source"> Découvrez les ressources</button>
          <button className="button--mentors"> Trouvez votre mentor</button> */}
              <Button color='red'> Découvrez les ressources </Button>
              <Button basic color='red'> Trouvez votre mentor </Button>
        </div>
      </div>
    
    <img src={heroBanner} alt="une image de ninja qui fonctionne pas " className="home--picture"/> 
   
     </div>
   </div>
  )
}

export default HeroBanner;

// 

