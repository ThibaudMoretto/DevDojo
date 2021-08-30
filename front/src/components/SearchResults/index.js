import React from "react";
import ListMentors from "src/containers/Lists/ListMentors";
import ListRessources from "src/containers/Lists/ListRessources";

import "./styles.scss";

function SearchResults() {
  return (
    <div>
      <ListRessources />
      <ListMentors />
    </div>
  );
}

export default SearchResults;
