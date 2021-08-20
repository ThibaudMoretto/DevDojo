import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav--home">
        <NavLink
          exact
          activeClassName="nav-link--active"
          className="nav-link"
          to="/"
        >
          Accueil
        </NavLink>
      </div>
      <div className="nav--source">
        <NavLink
          exact
          activeClassName="nav-link--active"
          className="nav-link"
          to="/ressources"
        >
          Ressources
        </NavLink>
      </div>
      <div className="nav--mentor">
        <NavLink
          exact
          activeClassName="nav-link--active"
          className="nav-link"
          to="/mentors"
        >
          Mentors
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
