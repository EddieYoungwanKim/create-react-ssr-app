import React, { FC, useState, ReactEventHandler } from 'react';

interface TodoFormProps {
  addTodo: (title: string) => void;
}

type Props = TodoFormProps;

export const TodoFormComponent: FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const onInputChange: ReactEventHandler<HTMLInputElement> = event => {
    setTitle(event.currentTarget.value);
  };
  const onSubmit = () => {
    addTodo(title);
    setTitle('');
  };
  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
      }}
    >
      <input
        style={{ width: 450 }}
        type="text"
        placeholder="Enter new item"
        value={title}
        onChange={onInputChange}
      />
      &nbsp;
      <button type="submit" onClick={onSubmit} disabled={!title}>
        Add
      </button>
    </form>
  );
};
