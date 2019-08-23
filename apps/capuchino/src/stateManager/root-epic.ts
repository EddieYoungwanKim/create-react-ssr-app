import { combineEpics } from 'redux-observable';

import * as todosEpics from './todos/epics';

export default combineEpics(...Object.values(todosEpics));
