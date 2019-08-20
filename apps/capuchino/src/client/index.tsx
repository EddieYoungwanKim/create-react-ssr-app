import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';

import './index.scss';
import routeConfig from './routes';
import configureStore from './store';

const store = configureStore();

loadableReady(() => {
  ReactDOM.hydrate(
    <ReduxProvider store={store}>
      <BrowserRouter>{renderRoutes(routeConfig)}</BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root')
  );
});
