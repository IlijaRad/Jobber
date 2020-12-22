import {FETCH_POSTS, SELECT_POST, SELECT_TYPE} from '../actions/types'

const postsReducer = (state = {list:[], selectedPost:{}, full_time: true}, action) => {
    if (action.type === FETCH_POSTS) return {...state, list: action.payload};
    else if (action.type === SELECT_POST) return {...state, selectedPost: action.payload};
    else if (action.type === SELECT_TYPE) {
        return {...state, full_time: !state.full_time}
    }
    else return state;
}

export default postsReducer;