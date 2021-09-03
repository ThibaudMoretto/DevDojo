import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Home from 'src/containers/Home';
import ListMentors from 'src/containers/Lists/ListMentors';
import ListRessources from 'src/containers/Lists/ListRessources';
import FicheRessource from 'src/containers/Fiches/FicheRessource';
import FicheMentor from 'src/containers/Fiches/FicheMentor';
import SearchResults from 'src/components/SearchResults';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import Header from 'src/components/Header';
import Contact from 'src/components/Footer/Contact';
import About from 'src/components/Footer/About';
import Loading from './Loading';

import './styles.scss';

library.add(fab);

function App({
  getRessources, getMentors, loading, submited, checkIsLogged,
}) {
  useEffect(() => {
    getRessources();
    getMentors();
    checkIsLogged();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      {submited && <Redirect to="/search-results" />}

      <Switch>
        <Route exact path="/">
          <Header displaySearchBar={false} />
          <Home />
        </Route>

        <Route exact path="/ressources">
          <Header displaySearchBar />
          <ListRessources />
        </Route>

        <Route exact path="/mentors">
          <Header displaySearchBar />
          <ListMentors />
        </Route>

        <Route exact path="/ressources/:slug">
          <Header displaySearchBar />
          <FicheRessource />
        </Route>

        <Route exact path="/mentors/:name">
          <Header displaySearchBar />
          <FicheMentor />
        </Route>

        <Route exact path="/search-results">
          <Header displaySearchBar />
          <SearchResults />
        </Route>

        <Route exact path="/contact">
          <Header displaySearchBar />
          <Contact />
        </Route>

        <Route exact path="/about">
          <Header displaySearchBar />
          <About />
        </Route>

        <>
          <Header displaySearchBar />
          <Error />
        </>

      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  submited: PropTypes.bool,
  getMentors: PropTypes.func.isRequired,
  getRessources: PropTypes.func.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
  submited: false,
};

export default App;
