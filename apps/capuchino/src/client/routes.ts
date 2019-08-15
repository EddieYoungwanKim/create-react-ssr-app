import Home from './_home';
import Todos from './_todos';

export default [
  {
    path: '/',
    exact: true,
    ...Home,
  },
  {
    path: '/todos',
    ...Todos,
  },
];
