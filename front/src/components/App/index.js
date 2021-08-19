import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from 'src/components/Home';
import ListMentors from 'src/containers/ListMentors';
import ListRessources from 'src/containers/ListRessources';
import FicheRessource from 'src/containers/FicheRessource';
import FicheMentor from 'src/containers/FicheMentor';
import SearchResults from 'src/components/SearchResults';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import Header from 'src/components/Header';
import Loading from './Loading'

import './styles.scss';

function App({ getRessources, getMentors, loading, submited }) {

  console.log(submited);

  useEffect(() => {
    getRessources();
    getMentors();
  }, []);

  if (loading) {
    return <Loading />;
  };

  return (
    <div className="app">

      {submited && (
        <Redirect to="/search-results" />)}

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

        <Route exact path="/ressources/:slug" component={FicheRessource}>
        </Route>

        <Route exact path="/mentors/:name" component={FicheMentor}>
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
  getRessources: PropTypes.func.isRequired,
  submited: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
