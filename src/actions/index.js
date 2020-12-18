import {FETCH_POSTS, SELECT_POST} from './types';
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = location => async dispatch => {
    const response = await jsonPlaceholder(location);
    const json = await response.json();
    dispatch({
        type: FETCH_POSTS,
        payload: json
    })
}

export const selectPost = id => async (dispatch, getState) => {
    const state = getState();
    const match = state.posts.list.find((el) => el.id === id)
    dispatch({
        type: SELECT_POST,
        payload: match
    })
}