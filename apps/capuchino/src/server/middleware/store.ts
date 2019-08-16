import { createStore, applyMiddleware } from 'redux';
import { Request, Response, NextFunction } from 'express';
import { matchRoutes } from 'react-router-config';

import rootReducer from 'client/store/root-reducer';
import rootEpic from 'client/store/root-epic';
import services from 'client/services';
import routeConfig from 'client/routes';

import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';

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

const configureStore = () => {
  const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
  epicMiddleware.run(rootEpic);
  return store;
};

const storeMiddleware = () => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const store = configureStore();
  req.store = store;
  const promises = matchRoutes(routeConfig, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  console.log('////', promises);
  Promise.all(promises).then(data => {
    console.log('DATA', data);
    next();
  });
};

export default storeMiddleware;
