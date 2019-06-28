export function Issues(state=[], action) {
	switch(action.type) {
		case 'ADD_DATA':
			console.log(action.payload, 'reducer')
			return action.payload;
		case 'TOGGLE':
			return [...state].map(value => action.payload.id === value.id ? ({...value, isClicked: !action.payload.isClicked}): {...value, isClicked: false})
		default: 
			return state;
	}
}

export function popularRepos(state=[], action) {
	console.log(state, action)
	switch (action.type) {
		case 'ADD_TRENDING_REPOS':
			return action.popularData.sort(() => Math.random() - 0.5) 
		default:
			return state;
	}
}
