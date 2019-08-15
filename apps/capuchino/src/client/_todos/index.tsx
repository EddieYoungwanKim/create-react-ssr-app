import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'typesafe-actions';

import * as selectors from './store/todos/selectors';
import * as actions from './store/todos/actions';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.todos.isLoadingTodos,
  todos: selectors.getTodos(state.todos),
});
const dispatchProps = {
  addTodo: actions.addTodo,
  removeTodo: actions.removeTodo,
};

interface TodosPageProps {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchProps &
  TodosPageProps;

const TodosPage: FunctionComponent<Props> = ({
  isLoading,
  todos,
  addTodo,
  removeTodo,
}) => {
  useEffect(() => {}, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      Todos Page
      <div>
        <button onClick={() => addTodo('new todo')}>ADD TOdos</button>
      </div>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </div>
  );
};

export const loadData = (store: any) => {
  return Promise.all([]);
};

export default {
  component: connect(
    mapStateToProps,
    dispatchProps
  )(TodosPage),
  loadData,
};
