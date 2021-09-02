import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import Logo from 'src/assets/images/Logo_Dev_Dojo.png';

function NavBar({ resetSubmitValue }) {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <Link
          className="navbar__logo"
          to="/"
          onClick={() => {
            resetSubmitValue();
          }}
        >
          <img src={Logo} alt="Dev Dojo Logo" width="80%" />
        </Link>

        <ul className="navbar__links">
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link slideInDown-1"
            to="/"
            onClick={() => {
              resetSubmitValue();
              handleShowLinks();
            }}
          >
            Accueil
          </NavLink>
          <span className="navbar__item" />
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link slideInDown-2"
            to="/ressources"
            onClick={() => {
              resetSubmitValue();
              handleShowLinks();
            }}
          >
            Ressources
          </NavLink>

          <span className="navbar__item" />

          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link slideInDown-3"
            to="/mentors"
            onClick={() => {
              resetSubmitValue();
              handleShowLinks();
            }}
          >
            Mentors
          </NavLink>
        </ul>

        <button
          type="button"
          className="navbar__burger"
          onClick={handleShowLinks}
        >
          <span className="burger-bar" />
        </button>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  resetSubmitValue: PropTypes.func.isRequired,
};

export default NavBar;
