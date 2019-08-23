import React, { FC } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

import './App.scss';

interface Props {
  route: { routes: Array<RouteConfig> };
}

const App: FC<Props> = ({ route }) => {
  return <div className="App">{renderRoutes(route.routes)}</div>;
};

export default App;
