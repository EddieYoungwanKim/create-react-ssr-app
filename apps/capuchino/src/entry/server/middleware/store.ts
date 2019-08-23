import { createStore, applyMiddleware } from 'redux';
import { Request, Response, NextFunction } from 'express';
import { matchRoutes } from 'react-router-config';
import axios from 'axios';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, HttpClientAndAPIs } from 'typesafe-actions';

import rootReducer from 'stateManager/root-reducer';
import rootEpic from 'stateManager/root-epic';
import api from 'stateManager/root-api';
import routeConfig from 'core/routes';

const configureStore = (req: Request) => {
  const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: { Authorization: req.get('cookie') || '' },
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
  const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
  epicMiddleware.run(rootEpic);
  return store;
};

const storeMiddleware = () => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const store = configureStore(req);
  req.store = store;
  // const promises = matchRoutes(routeConfig, req.path).map(({ route }) => {
  //   return route.serverActionDispatch
  //     ? route.serverActionDispatch({ store, req, res })
  //     : null;
  // });

  // Promise.all(promises).then(data => {
  //   next();
  // });
};

export default storeMiddleware;
