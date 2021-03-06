// import { bindActionCreators } from "redux"
import { FETCH_DATA, POST_STORY, POST_STORY_SUCCESS, FETCH_DATA_SUCCESS, EDIT_STORY, EDIT_STORY_SUCCESS, DELETE_STORY, DELETE_STORY_SUCCESS } from '../actions'

const initialState = {
	data: [],
	loading: false,
	error: "",
	updated: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:

			console.log('REDUCER FETCH_DATA', action.payload)

			return {
				...state,
				data: action.payload,
				loading: true,
				error: '',
				updated: false
			}
			case FETCH_DATA_SUCCESS:
				return {
					...state,
					data: action.payload,
					loading: false,
					error: '',
					updated: false
				}
		case POST_STORY:
			return {
				...state,
				data: [ ...state.data, action.payload ],
				loading: true
			}
		case POST_STORY_SUCCESS:
			return {
				...state,
				updated: true
			}
		case EDIT_STORY:
			return {
				...state,
				data: action.payload
			}
		case EDIT_STORY_SUCCESS:
			return {
				...state,
				updated: !state.updated
			}
		case DELETE_STORY:
			return {
				...state,
				data: state.data.filter(val => val.id !== action.id)
			}
		case DELETE_STORY_SUCCESS:
			return {
				...state,
				updated: !state.updated,
				loading: false
			}

		default:
			return state
	}
}