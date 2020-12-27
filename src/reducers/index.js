import postsReducer from './postsReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    posts: postsReducer,
    auth: authReducer
})