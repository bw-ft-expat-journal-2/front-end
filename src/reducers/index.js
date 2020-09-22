// import { bindActionCreators } from "redux"
import { FETCH_DATA, POST_STORY, FETCH_DATA_SUCCESS, EDIT_STORY, DELETE_STORY } from '../actions'

const initialState = {
	data: [],
	loading: false,
	error: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			console.log('REDUCER FETCH_DATA', action.payload)
			return {
				...state,
				data: action.payload,
				loading: true
			}
			case FETCH_DATA_SUCCESS:
				return {
					...state,
					data: action.payload,
					loading: false,
					error: ""
				}
		case POST_STORY:
			return {
				...state,
				data: [ ...state.data, action.payload ],
				loading: true
			}
		case EDIT_STORY:
			return {
				...state,
				data: action.payload
			}
		case DELETE_STORY:
			return {
				...state,
				data: action.payload
			}

		default:
			return state
	}
}