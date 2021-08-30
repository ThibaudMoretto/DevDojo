import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'src/containers/Home';
import ListMentors from 'src/containers/Lists/ListMentors';
import ListRessources from 'src/containers/Lists/ListRessources';
import FicheRessource from 'src/containers/Fiches/FicheRessource';
import FicheMentor from 'src/containers/Fiches/FicheMentor';
import SearchResults from 'src/components/SearchResults';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import Header from 'src/components/Header';
import Loading from './Loading';

import './styles.scss';

function App({
  getRessources,
  getMentors,
  loading,
  submited,
  isLogged,
  checkIsLogged,
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

        <Route
          exact
          path="/ressources/:slug"
          component={FicheRessource}
        ></Route>

        <Route exact path="/mentors/:name" component={FicheMentor}></Route>

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
  getRessources: PropTypes.func.isRequired,
  submited: PropTypes.bool,
  checkIsLogged: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
  isLogged: false,
};

export default App;
