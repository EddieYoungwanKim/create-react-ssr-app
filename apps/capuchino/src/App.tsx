import React, { FC } from 'react';

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
      <Title>Fuck Yeah!</Title>
      {props.children}
    </div>
  );
};

export default App;
