import React, { FC, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from 'typesafe-actions';
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
  addTodo,
  removeTodo,
  loadTodos,
  todos,
}) => {
  // const isLoading = useSelector(selectors.getIsLoadingTodos);
  // const todos = useSelector(selectors.getTodos);
  // const dispatch = useDispatch();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Todos Page!
      <div>
        <button
          onClick={() => {
            loadTodos({});
          }}
        >
          Load Todos!
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

interface TodosPageProps extends RouteComponentProps {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  TodosPageProps;

export default connect(
  mapStateToProps,
  dispatchProps
)(TodosPage);
