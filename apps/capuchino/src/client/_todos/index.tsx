import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState, Store } from 'typesafe-actions';
import { Todo } from 'Todo-Types';

import {
  TodoFormComponent,
  TodoListComponent,
  TodoComponent,
} from './components';
import * as selectors from './store/todos/selectors';
import * as actions from './store/todos/actions';

const TodosPage: FC<Props> = ({
  isLoading,
  todos,
  addTodo,
  removeTodo,
  loadTodos,
}) => {
  useEffect(() => {}, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Todos Page
      <div>
        <button
          onClick={() => {
            loadTodos({});
          }}
        >
          Load Todos
        </button>
      </div>
      <TodoFormComponent addTodo={addTodo} />
      <TodoListComponent
        todos={todos}
        render={(todo: Todo) => (
          <TodoComponent todo={todo} removeTodo={removeTodo} />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.todos.isLoadingTodos,
  todos: selectors.getTodos(state.todos),
});
const dispatchProps = {
  addTodo: actions.addTodo,
  removeTodo: actions.removeTodo,
  loadTodos: actions.loadTodosAsync.request,
};

interface TodosPageProps {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  TodosPageProps;

export const loadData = (store: Store) => {
  return Promise.all([
    new Promise((resolve, reject) =>
      store.dispatch(actions.loadTodosAsync.request({ resolve, reject }))
    ),
  ]);
};

export default {
  component: connect(
    mapStateToProps,
    dispatchProps
  )(TodosPage),
  loadData,
};
