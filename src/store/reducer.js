export function Issues(state=[], action) {
	switch(action.type) {
		case 'ADD_DATA':
			console.log(action.payload)
			return action.payload
		default: 
			return state;
	}
}

export function popularRepos(state=[], action) {
	console.log(state, action)
	switch (action.type) {
		case 'ADD_TRENDING_REPOS':
			return [...state, action.popularData]
		default:
			return state;
	}
}
