import React from 'react'
import ListMentors from 'src/containers/ListMentors'
import ListRessources from 'src/containers/ListRessources'

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
