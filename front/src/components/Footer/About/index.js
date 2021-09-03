import React from 'react';
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Remi from 'src/assets/images/Team_Remi.jpg';
import Anthony from 'src/assets/images/Team_Anthony.jpg';
import Thibaud from 'src/assets/images/Team_Thibaud.jpg';
import Michel from 'src/assets/images/Team_Michel.jpg';
import Francois from 'src/assets/images/Team_Francois.jpg';

library.add(fab);

function About() {
  return (
    <div className="container-global">
      <h2>Notre <span>Equipe</span></h2>
      <div className="container-team">
        <article className="card-team">
          <div className="profile">
            <img src={Remi} alt="team rémi" />
            <h3>Rémi</h3>
            <p>Scrum Master</p>
          </div>
          <div className="description">
            <p>"Si tu téléphones à une voyante et qu'elle ne décroche pas avant que ça sonne, raccroche."</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Anthony} alt="team anthony" />
            <h3>Anthony</h3>
            <p>Lead Dev Front</p>
          </div>
          <div className="description">
            <p>"Si tu parles à ton eau de Javel pendant que tu fais la vaisselle, elle est moins concentrée."</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Thibaud} alt="team thibaud" />
            <h3>Thibaud</h3>
            <p>Lead Dev Back</p>
          </div>
          <div className="description">
            <p>"Moi, Adam et Eve, j'y crois plus, parce que je suis pas un idiot : la pomme ça peut pas être mauvais, c'est plein de pectine..."</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Michel} alt="team michel" />
            <h3>Michel</h3>
            <p>Git Master</p>
          </div>
          <div className="description">
            <p>"Moi un Jean Valjean des temps modernes ? Euh, non, je n'ai jamais vu son film !"</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Francois} alt="team françois" />
            <h3>François</h3>
            <p>Product Owner</p>
          </div>
          <div className="description">
            <p>"L'air tu peux pas le toucher... ça existe et ça existe pas... Ca nourrit l'homme sans qu'il ait faim."</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default About;
