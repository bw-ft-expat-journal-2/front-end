import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const POST_STORY = 'POST_STORY';
export const EDIT_STORY = 'EDIT_STORY';
export const DELETE_STORY = 'DELETE_STORY';

export const fetchData = () => {
    return dispatch => {
        dispatch({
            type: FETCH_DATA
        })
        axiosWithAuth()
            .get('')
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: FETCH_DATA_SUCCESS
                })
            })
    }
}