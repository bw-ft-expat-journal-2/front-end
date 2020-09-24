import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { POSTS_PATH } from '../utils/URLS'

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const POST_STORY = 'POST_STORY';
export const POST_STORY_SUCCESS = 'POST_STORY_SUCCESS'
export const EDIT_STORY = 'EDIT_STORY';
export const EDIT_STORY_SUCCESS = 'EDIT_STORY_SUCCESS'
export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS'

export const fetchData = () => dispatch => {
    return (dispatch) => {
    dispatch({
        type: FETCH_DATA
    })
    axiosWithAuth()
        .get(`/api/posts`)
        .then(res => {
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('Yikes', err)
        })
    }
}

export const addStory = post => {
    const addNewStory = axiosWithAuth()
        .post(`/api/posts`, post)
    return (dispatch) => {
        dispatch({
            type: POST_STORY
        })
        addNewStory
            .then(({data}) => {
                dispatch({
                    type: POST_STORY_SUCCESS,
                    payload: data
                })
            .catch(err => {
                console.log('No new story :c', err)
            })
            })
    }
}

export const editStory = post => dispatch => {
    dispatch({
        type: EDIT_STORY
    })
    axiosWithAuth()
        .put(`/api/posts/${post.id}`, post)
        .then(res => {
            dispatch({
                type: EDIT_STORY_SUCCESS, 
                payload: res.data
            })
            window.location = '/protected'
        })
}

export const deleteStory = post => dispatch =>{
        console.log('something')
        axiosWithAuth()
        .delete(`/api/posts/${post.id}`)
        .then(data => {
            dispatch({
                type: DELETE_STORY_SUCCESS,
                payload: data
            })
        })
        .catch(err => {
            console.log(`That didn't delete :/`, err)
        })
}