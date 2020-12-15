import {FETCH_POSTS} from './types';
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = location => async dispatch => {
    const response = await jsonPlaceholder(location);
    const json = await response.json();
    dispatch({
        type: FETCH_POSTS,
        payload: json
    })
}