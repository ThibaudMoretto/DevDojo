import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'src/components/Header'
import Home from 'src/components/Home';
import ListMentors from 'src/components/ListMentors';
import ListRessources from 'src/containers/ListRessources';
import FicheRessource from 'src/components/FicheRessource';
import FicheMentor from 'src/components/FicheMentor';
import SearchResults from 'src/components/SearchResults';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

import './styles.scss';

function App({ getRessources }) {

  useEffect(() => {
    getRessources();
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
};

export default App;
