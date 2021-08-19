import React from 'react'
import ListMentors from 'src/containers/ListMentors'
import ListRessources from 'src/containers/ListRessources'
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './styles.scss';

function SearchResults() {
  return (
    <div>
      <ListRessources />
      <ListMentors />
    </div>
  )
}

export default SearchResults
