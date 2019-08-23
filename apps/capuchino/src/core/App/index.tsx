import React, { FC } from 'react';

import './App.scss';

interface Props {}

const App: FC<Props> = ({ children }) => {
  return <div className="App">{children}</div>;
};

export default App;
