import {createStore, combineReducers} from 'redux';
import {Issues} from './reducer';

const rootReducer = combineReducers({
	Issues,
})

export const store = createStore(rootReducer);