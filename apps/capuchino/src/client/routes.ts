import loadable from '@loadable/component';

export default [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('./_home')),
  },
  {
    path: '/todos/:id',
    component: loadable(() => import('./_todos')),
    serverActionDispatch: require('./_todos/serverActionDispatch').default,
  },
];
