import { combineEpics } from 'redux-observable';

import * as todosEpics from 'client/_todos/store/todos/epics';

export default combineEpics(...Object.values(todosEpics));
