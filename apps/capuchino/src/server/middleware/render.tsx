import path from 'path';
import escapeStringRegexp from 'escape-string-regexp';
import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { StaticRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import serialize from 'serialize-javascript';
import { renderRoutes } from 'react-router-config';
import { ChunkExtractor } from '@loadable/server';

import routeConfig from 'client/routes';

const renderMiddleware = () => (req: Request, res: Response) => {
  let html = req.html || '';
  const store = req.store;
  const sheet = new ServerStyleSheet();
  const statsFile = path.resolve(__dirname, 'public/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });

  const htmlContent = ReactDOMServer.renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {extractor.collectChunks(
          sheet.collectStyles(renderRoutes(routeConfig))
        )}
      </StaticRouter>
    </ReduxProvider>
  );

  // const nonMainScripts = extractor.getScriptElements().filter(script => {
  //   const scriptObj: any = script;
  //   if (
  //     scriptObj.props['data-chunk'] &&
  //     scriptObj.props['data-chunk'] !== 'main'
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }).map(script => {
  //   return script.props.src
  // });

  // console.log('asdf', nonMainScripts);

  const htmlReplacements: StringMap = {
    HTML_CONTENT: htmlContent,
    STYLE_TAGS: sheet.getStyleTags(),
    JS_CHUNKS: extractor.getScriptTags(),
    CSS_CHUNKS: extractor.getStyleTags(),
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
