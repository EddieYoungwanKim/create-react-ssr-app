import React from 'react';
import loadable from '@loadable/component';
import App from 'core/App';
import DefaultLayout from 'core/layout/defaultLayout';
import ToolbarLayout from 'core/layout/toolbarLayout';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '/',
        async action() {
          const prom = () =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve('resolver finished');
              }, 3000);
            });
          const result = await prom();
          const Home = loadable(() => import('pages/home'));
          return <Home />;
        },
      },
      {
        path: '/todos',
        async action() {
          const Todos = loadable(() => import('pages/todos'));
          return <Todos />;
        },
      },
    ],
    async action(some: any) {
      const children = await some.next();
      return <App>{children}</App>;
    },
  },
];

export default routes;
