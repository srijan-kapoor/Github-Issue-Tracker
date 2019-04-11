import {createStore, combineReducers} from 'redux';
import {Issues, QueryIssues} from './reducer';

const rootReducer = combineReducers({
	Issues: Issues,
	QueryIssues: QueryIssues,
})

export const store = createStore(rootReducer);