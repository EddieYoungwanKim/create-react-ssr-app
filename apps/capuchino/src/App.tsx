import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';

import styled from 'styled-components';
import './App.scss';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: gray;
`;

interface AppProps {
  route: { routes: Array<RouteConfig> };
}

const App: FC<AppProps> = props => {
  return (
    <div className="App">
      <Title>Example App!</Title>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App;
