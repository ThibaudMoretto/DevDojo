import { combineReducers } from 'redux';

import mentorsReducer from './mentors';

const rootReducer = combineReducers({
  mentors: mentorsReducer,
});

export default rootReducer;
