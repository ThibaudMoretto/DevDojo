import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

function NavBar() {
  return (
    <nav className="nav">
      <NavLink
        exact
        activeClassName="nav-link--active"
        className="nav-link"
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        exact
        activeClassName="nav-link--active"
        className="nav-link"
        to="/ressources"
      >
        Ressources
      </NavLink>
      <NavLink
        exact
        activeClassName="nav-link--active"
        className="nav-link"
        to="/mentors"
      >
        Mentors
      </NavLink>
    </nav>
  )
}

export default NavBar;
