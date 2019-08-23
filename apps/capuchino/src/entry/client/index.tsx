import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { loadableReady } from '@loadable/component';

import Router from 'core/routes/router';
import routes from 'core/routes';
import configureStore from './helper/store';

const store = configureStore();

const history = createBrowserHistory();
loadableReady(() => {
  ReactDOM.hydrate(
    <ReduxProvider store={store}>
      <Router history={history} routes={routes} />
    </ReduxProvider>,
    document.getElementById('root')
  );
});
