export function Issues(state=[], action) {
	switch(action.type) {
		case 'ADD_DATA':
			return [...state, ...action.payload];
		default: 
			return state;
	}
}


export function QueryIssues(state=[], action) {
	switch(action.type) {
		case 'ADD_QUERY':
			return [...state, ...action.payload];
		default:
			return state;
	}
}