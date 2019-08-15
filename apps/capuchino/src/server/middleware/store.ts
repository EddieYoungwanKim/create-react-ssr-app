import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Request, Response, NextFunction } from 'express';
import { matchRoutes } from 'react-router-config';

import rootReducer from 'client/store/root-reducer';
import routeConfig from 'client/routes';

const configureStore = () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));

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
  Promise.all(promises).then(() => {
    next();
  });
};

export default storeMiddleware;
