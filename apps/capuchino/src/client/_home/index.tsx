import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;
interface Props {}

const Home: FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <Title>This is Home Page</Title>
    </div>
  );
};

export default Home;
