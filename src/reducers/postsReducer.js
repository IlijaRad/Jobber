import {FETCH_POSTS} from '../actions/types'

const postsReducer = (state = [], action) => {
    if (action.type === FETCH_POSTS) return action.payload;
    else return state;
}

export default postsReducer;