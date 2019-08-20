import loadable from '@loadable/component';
import App from 'App';
import { RouteConfig } from 'react-router-config';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: loadable(() => import('./_home')),
      },
      {
        path: '/todos',
        component: loadable(() => import('./_todos')),
        serverActionDispatch: require('./_todos/serverActionDispatch').default,
      },
    ],
  },
] as RouteConfig[];
