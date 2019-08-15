import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import serialize from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';

import routeConfig from 'client/routes';
import App from 'App';

const renderMiddleware = () => (req: Request, res: Response) => {
  let html = req.html || '';
  const store = req.store;
  const routerContext = {};
  const sheet = new ServerStyleSheet();
  const htmlContent = ReactDOMServer.renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={req.url} context={routerContext}>
        {sheet.collectStyles(<App>{renderRoutes(routeConfig)}</App>)}
      </StaticRouter>
    </ReduxProvider>
  );
  const htmlReplacements: StringMap = {
    HTML_CONTENT: htmlContent,
    STYLE_TAGS: sheet.getStyleTags(),
    PRELOADED_STATE: serialize(store.getState(), { isJSON: true }),
  };

  Object.keys(htmlReplacements).forEach(key => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp('__' + escapeStringRegexp(key) + '__', 'g'),
      value
    );
  });
  res.send(html);
};

export default renderMiddleware;
