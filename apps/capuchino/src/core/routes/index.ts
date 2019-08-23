import loadable from '@loadable/component';
import UniversalRouter from 'universal-router';
import { RouteConfig } from 'react-router-config';

import App from 'core/App';
import DefaultLayout from 'core/layout/defaultLayout';
import ToolbarLayout from 'core/layout/toolbarLayout';

const routes = [
  { path: '/', content: 'hello world', protected: false },
  { path: '/todos', content: 'todos' },
];

const router = new UniversalRouter(routes);

router.resolve({ pathname: '/todos' }).then(page => {
  if (page.redirect) {
    console.log(`Redirect from ${page.from} to ${page.redirect}`);
    window.location = page.redirect;
  } else {
    document.body.innerHTML = page.content;
  }
});

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: DefaultLayout,
        routes: [
          {
            component: loadable(() => import('pages/home')),
            layout: 'default',
            resolve: () => {},
          },
        ],
      },
      {
        path: '/todos',
        component: ToolbarLayout,
        routes: [
          {
            component: loadable(() => import('pages/todos')),
            serverActionDispatch: require('pages/todos/serverActionDispatch')
              .default,
          },
        ],
      },
      // {
      //   path: '/login',
      //   component: loadable(() => import('pages/login')),
      // },
    ],
  },
] as RouteConfig[];
