import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import './App.scss';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: gray;
`;

const App: FC = props => {
  return (
    <div className="App">
      <Title>Example App</Title>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos/0">Todos</Link>
        </li>
        <li>
          <Link to="/todos/1">Todos</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default App;
