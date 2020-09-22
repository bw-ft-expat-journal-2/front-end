const initialState = {
	data: []
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_DATA':
			console.log('REDUCER FETCH_DATA', payload)
			return {
				...state,
				data: payload
			}
		case 'POST_STORY':
			return {
				...state,
				data: [ ...state.data, payload ]
			}

		default:
			return state
	}
}