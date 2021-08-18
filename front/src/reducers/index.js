import { combineReducers } from 'redux';

import ressourcesReducer from './ressources';

const rootReducer = combineReducers({
  ressources: ressourcesReducer,
});

export default rootReducer;
