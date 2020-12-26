import {FETCH_POSTS, SELECT_POST, SELECT_TYPE, SELECT_LOCATION} from '../actions/types'

const postsReducer = (state = {list:[], selectedPost:{}, full_time: true, location: 'Berlin'}, action) => {
    if (action.type === FETCH_POSTS) return {...state, list: action.payload};
    else if (action.type === SELECT_POST) return {...state, selectedPost: action.payload};
    else if (action.type === SELECT_TYPE)  return {...state, full_time: !state.full_time};
    else if (action.type === SELECT_LOCATION) return {...state, location: action.payload}
    else return state;
}

export default postsReducer;