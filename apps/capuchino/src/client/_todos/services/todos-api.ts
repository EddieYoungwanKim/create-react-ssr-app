import { AxiosInstance, AxiosResponse } from 'axios';
import { Todo } from 'Todo-Types';

export function fetchAll(http: AxiosInstance): Promise<AxiosResponse<Todo[]>> {
  return http.get('/todos');
}
