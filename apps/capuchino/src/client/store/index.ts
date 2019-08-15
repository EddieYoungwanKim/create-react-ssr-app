import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';

import { composeEnhancers } from './utils';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from 'client/services';

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
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
