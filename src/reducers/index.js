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
			console.log('REDUCER FETCH_DATA')
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
				updated: true
			}
		case DELETE_STORY:
			return {
				...state,
				data: action.payload
			}
		case DELETE_STORY_SUCCESS:
			return {
				...state,
				updated: false,
				data: [...action.payload.data],
				loading: false
			}

		default:
			return state
	}
}