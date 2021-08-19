import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import mentorsMiddleware from 'src/middlewares/mentorsMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(mentorsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
