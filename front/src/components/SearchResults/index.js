import React from 'react'
import ListMentors from '../ListMentors'
import ListRessources from '../ListRessources'

import './styles.scss';

function SearchResults() {
  return (
    <div>
      <ListMentors />
      <ListRessources />
    </div>
  )
}

export default SearchResults
