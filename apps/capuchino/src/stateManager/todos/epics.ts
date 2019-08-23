import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError, tap } from 'rxjs/operators';
import {
  RootAction,
  RootState,
  HttpClientAndAPIs,
  isActionOf,
} from 'typesafe-actions';

import { loadTodosAsync } from './actions';

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  HttpClientAndAPIs
> = (action$, state$, { api, http }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    switchMap(action =>
      from(api.todos.fetchAll(http)).pipe(
        map(res => res.data.filter(todo => todo.id < 5)),
        map(loadTodosAsync.success),
        catchError(() => of(loadTodosAsync.failure())),
        tap(() => {
          if (action.payload.resolve) action.payload.resolve();
        })
      )
    )
  );
