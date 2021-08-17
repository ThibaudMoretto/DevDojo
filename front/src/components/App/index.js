import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from 'src/components/Error';
import FicheRessource from 'src/components/FicheRessource';
import FicheMentor from 'src/components/FicheMentor';
import Header from '../Header'
import Footer from 'src/components/Footer';
import Home from '../Home';
import ListMentors from '../ListMentors';
import ListRessources from '../ListRessources';
import SearchResults from '../SearchResults';

import './styles.scss';

const App = () => (
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

export default App;
