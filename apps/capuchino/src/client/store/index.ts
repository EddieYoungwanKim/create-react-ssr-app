import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, HttpClientAndAPIs } from 'typesafe-actions';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import api from './root-api';

const http = axios.create({
  baseURL: '/api',
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
