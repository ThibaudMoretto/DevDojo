import { createStore, applyMiddleware, compose } from "redux";

import reducer from "src/reducers";

import ressourcesMiddleware from "src/middlewares/ressourcesMiddleware";
import mentorsMiddleware from "src/middlewares/mentorsMiddleware";
import authMiddleware from "src/middlewares/authMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ressourcesMiddleware, mentorsMiddleware, authMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
