import {FETCH_POSTS, SELECT_POST} from '../actions/types'

const postsReducer = (state = {list:[], selectedPost:{}}, action) => {
    if (action.type === FETCH_POSTS) return {...state, list: action.payload};
    else if (action.type === SELECT_POST) return {...state, selectedPost: action.payload};
    else return state;
}

export default postsReducer;