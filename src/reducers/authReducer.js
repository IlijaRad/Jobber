import {SIGN_IN, SIGN_OUT} from '../actions/types'

export default (state = {isSignedIn: null}, action) => {
    if (action.type === SIGN_IN) {
        return {...state, isSignedIn: true}
    } else if (action.type === SIGN_OUT) {
        return {...state, isSignedIn: false}
    } else {
        return state;
    }
}