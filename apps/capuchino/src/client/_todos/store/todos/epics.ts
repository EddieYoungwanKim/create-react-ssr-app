import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError, tap } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { loadTodosAsync } from './actions';

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(action =>
      from(api.todos.fetchAll()).pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message))),
        tap(action.payload.resolve)
      )
    )
  );
