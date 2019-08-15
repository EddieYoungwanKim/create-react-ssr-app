import { combineReducers } from 'redux';
import todosReducer from 'client/_todos/store/todos/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
