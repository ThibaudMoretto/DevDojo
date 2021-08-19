import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'src/components/Home';
import ListMentors from 'src/containers/ListMentors';
import ListRessources from 'src/containers/ListRessources';
import FicheRessource from 'src/containers/FicheRessource';
import FicheMentor from 'src/components/FicheMentor';
import SearchResults from 'src/components/SearchResults';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import Header from 'src/components/Header';
import Loading from './Loading'

import './styles.scss';

function App({ getRessources, getMentors, loading }) {

  useEffect(() => {
    getRessources();
    getMentors();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/ressources">
          <ListRessources />
        </Route>

        <Route exact path="/mentors">
          <ListMentors />
        </Route>

        <Route exact path="/ressources/:slug">
          <FicheRessource />
        </Route>

        <Route exact path="/mentors/:id">
          <FicheMentor />
        </Route>

        <Route exact path="/search-results">
          <SearchResults />
        </Route>

        <Error />
      </Switch>
      <Footer />
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  getMentors: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
