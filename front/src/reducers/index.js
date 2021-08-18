import { combineReducers } from 'redux';

import ressourcesReducer from './ressources';
import mentorsReducer from './mentors';

const rootReducer = combineReducers({
  ressources: ressourcesReducer,
  mentors: mentorsReducer,
});

export default rootReducer;
