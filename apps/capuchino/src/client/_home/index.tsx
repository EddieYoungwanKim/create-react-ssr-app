import React, { FunctionComponent } from 'react';

interface Props {}

const Home: FunctionComponent<Props> = (props: Props) => {
  return <div>This is Home Page</div>;
};

export const loadData = (store: any) => {
  return Promise.all([]);
};

export default {
  component: Home,
  loadData,
};
