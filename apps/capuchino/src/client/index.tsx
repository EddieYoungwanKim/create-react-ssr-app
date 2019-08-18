import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';

import './index.scss';
import App from 'App';
import routeConfig from './routes';
import configureStore from './store';

const store = configureStore();

loadableReady(() => {
  ReactDOM.hydrate(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App>{renderRoutes(routeConfig)}</App>
      </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root')
  );
});
