export function Issues(state=[], action) {
	switch(action.type) {
		case 'ADD_DATA':
			console.log(action.payload)
			return action.payload;
		case 'TOGGLE':
		console.log(state)
		console.log(action.payload)
			return [...state].map(value => action.payload.id === value.id ? ({...value, isClicked: !action.payload.isClicked}): value)
		default: 
			return state;
	}
}
