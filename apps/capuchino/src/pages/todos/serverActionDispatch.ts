import { Request, Response } from 'express';
import { Store } from 'typesafe-actions';
import * as actions from 'stateManager/todos/actions';

export default ({ store }: { store: Store; req: Request; res: Response }) => {
  return Promise.all([
    new Promise(resolve =>
      store.dispatch(actions.loadTodosAsync.request({ resolve }))
    ),
  ]);
};
