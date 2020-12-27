import {FETCH_POSTS, SELECT_POST, SELECT_TYPE, SELECT_LOCATION, SIGN_IN, SIGN_OUT} from './types';
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = (location, description, full_time, locationOverwrite) => async dispatch => {
    const response = await jsonPlaceholder(location, description, full_time, locationOverwrite);
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

export const selectType = () => {
    return {
        type: SELECT_TYPE
    }
}

export const selectLocation = loc => {
    return {
        type: SELECT_LOCATION,
        payload: loc
    }
}

export const signIn = () => {
    return {
        type: SIGN_IN
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}