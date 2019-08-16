import axios from 'axios';
import { Todo } from 'Todo-Types';

export function fetchAll(): Promise<Todo[]> {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.data);
}
