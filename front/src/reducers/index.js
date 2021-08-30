import { combineReducers } from "redux";

import ressourcesReducer from "./ressources";
import ressourceReducer from "./ressource";
import mentorsReducer from "./mentors";
import mentorReducer from "./mentor";
import searchBarReducer from "./searchBar";
import usersReducer from "./users";
import datasReducer from "./datas";

const rootReducer = combineReducers({
  datas: datasReducer,
  ressources: ressourcesReducer,
  ressource: ressourceReducer,
  mentors: mentorsReducer,
  mentor: mentorReducer,
  searchBar: searchBarReducer,
  user: usersReducer,
});

export default rootReducer;
