import { combineReducers } from 'redux';

import ressourcesReducer from './ressources';
import mentorsReducer from './mentors';
import searchBarReducer from './searchBar';
import usersReducer from './users';

const rootReducer = combineReducers({
  ressources: ressourcesReducer,
  mentors: mentorsReducer,
  searchBar: searchBarReducer,
  user: usersReducer,
});

export default rootReducer;
