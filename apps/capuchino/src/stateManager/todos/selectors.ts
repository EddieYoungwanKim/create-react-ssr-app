// import { createSelector } from 'reselect';

import { TodosState } from './reducer';

export const getTodos = (state: TodosState) => state.todos;
export const getIsLoadingTodos = (state: TodosState) => state.isLoadingTodos;
