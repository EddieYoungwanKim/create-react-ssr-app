import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, HttpClientAndAPIs } from 'typesafe-actions';

import { composeEnhancers } from 'stateManager/utils';
import rootReducer from 'stateManager/root-reducer';
import rootEpic from 'stateManager/root-epic';
import api from 'stateManager/root-api';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  //headers: { Authorization: localStorage.getItem('auth-token') },
});

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  HttpClientAndAPIs
>({
  dependencies: { api, http },
});

// configure middlewares
const middlewares = [epicMiddleware];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// create store
const configureStore = () => {
  const preloadedState = window.PRELOADED_STATE;

  const store = createStore(rootReducer, preloadedState, enhancer);
  epicMiddleware.run(rootEpic);

  return store;
};

// export store singleton instance
export default configureStore;
