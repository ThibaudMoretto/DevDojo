import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import ressourcesMiddleware from 'src/middlewares/ressourcesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ressourcesMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
