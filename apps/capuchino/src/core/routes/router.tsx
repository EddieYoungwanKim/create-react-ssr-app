import React, { FC } from 'react';
import { useRouter } from './useRouter';

interface Route {
  path: string;
  action: Function;
}
interface Props {
  routes: Route[];
  history: any; // what is the type of history?
}

const HistoryContext = React.createContext({});

const Router: FC<Props> = ({ routes, history }) => {
  const Component = useRouter(routes, history);
  return (
    <HistoryContext.Provider value={history}>
      {Component || null}
    </HistoryContext.Provider>
  );
};

export default Router;
