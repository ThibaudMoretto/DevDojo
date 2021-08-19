import { combineReducers } from 'redux';

import ressourcesReducer from './ressources';
import mentorsReducer from './mentors';
import searchBarReducer from './searchBar';

const rootReducer = combineReducers({
  ressources: ressourcesReducer,
  mentors: mentorsReducer,
  searchBar: searchBarReducer,
});

export default rootReducer;
