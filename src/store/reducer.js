export function Issues(state=[], action) {
	switch(action.type) {
		case 'ADD_DATA':
			console.log(action.payload)
			return action.payload
		default: 
			return state;
	}
}
