import React from 'react';
import './styles.scss';
import heroBanner from '../../../assets/images/Herobanner.png';

function HeroBanner() {
  return (
   <div className="herobanner">
      <div className="herobanner--container">

      <div className="herobanner--title"> {/* contient toute la partie de gauche */}
        <h2 className="herobanner--subTitle"> <span className="herobanner--subTitle--color">Apprenez</span> de nouvelles choses </h2>
      

    <p className="herobanner--description"> <span className="description--color">Ne perdez pas de temps, Dev Dojo est là pour vous!</span> Que vous soyez débutant, modéré ou expert, Dev Dojo répertorie toutes les ressources les plus efficaces et pertinentes du Web pour faciliter votre apprentissage et vous faire gagner du temps. La recherche étant assez chronophage et fastidieuse, profitez de nos ressources et mentors mis à disposition pour apprendre dès maintenant!
    </p>
        <div className="container--button">
          <button className="button--source">RESSOURCES</button>
          <button className="button--mentors">MENTORS</button>
        </div>
      </div>
    
    <img src={heroBanner} alt="une image de ninja qui fonctionne pas " className="home--picture"/> 
   
     </div>
   </div>
  )
}

export default HeroBanner;

// 

