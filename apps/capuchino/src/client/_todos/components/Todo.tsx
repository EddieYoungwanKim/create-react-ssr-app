import React, { FC } from 'react';
import { Todo } from 'Todo-Types';

interface TodoProps {
  todo: Todo;
  removeTodo: (id: number) => void;
  isActive: boolean;
}

type Props = TodoProps;
export const TodoComponent: FC<Props> = ({ todo, removeTodo, isActive }) => {
  return (
    <li style={{ backgroundColor: isActive ? 'green' : 'white' }}>
      {todo.title}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};
