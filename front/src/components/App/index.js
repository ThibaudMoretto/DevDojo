import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import ListMentors from 'src/containers/ListMentors';
import ListRessources from 'src/containers/ListRessources';
import FicheRessource from 'src/components/FicheRessource';
import FicheMentor from 'src/containers/FicheMentor';
import SearchResults from 'src/components/SearchResults';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import Header from 'src/components/Header';

import './styles.scss';

function App({ getRessources, getMentors }) {
  useEffect(() => {
    getRessources();
    getMentors();
  }, []);

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

        <Route exact path="/ressources/:id">
          <FicheRessource />
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

export default App;
