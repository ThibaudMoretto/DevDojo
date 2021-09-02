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
            <img src={Remi} alt="photo team rémi" />
            <h3>Rémi</h3>
            <p>Scrum Master</p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor dolor a enim semper, ac sodales ligula ullamcorper.</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Anthony} alt="photo team anthony" />
            <h3>Anthony</h3>
            <p>Lead Dev Front</p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor dolor a enim semper, ac sodales ligula ullamcorper.</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Thibaud} alt="photo team thibaud" />
            <h3>Thibaud</h3>
            <p>Lead Dev Back</p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor dolor a enim semper, ac sodales ligula ullamcorper.</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Michel} alt="photo team michel" />
            <h3>Michel</h3>
            <p>Git Master</p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor dolor a enim semper, ac sodales ligula ullamcorper.</p>
          </div>
          <ul className="social">
              <li><FontAwesomeIcon icon={["fab", "github"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "linkedin"]} /></li>
              <li><FontAwesomeIcon icon={["fab", "twitter"]} /></li>
          </ul>
        </article>

        <article className="card-team">
          <div className="profile">
            <img src={Francois} alt="photo team françois" />
            <h3>François</h3>
            <p>Product Owner</p>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor dolor a enim semper, ac sodales ligula ullamcorper.</p>
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
