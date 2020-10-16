import { combineReducers } from 'redux';
import { actionTypes, userDefault, usersDefault } from './actions';

export const user = (state = userDefault, action) => {
    switch(action.type){
        case actionTypes.PUT_USER:
            return {
                ...state,
                ...action.user
            }
        default:
            return state
    }
}

export const users = (state = usersDefault, action) => {
    switch(action.type){
        case actionTypes.PUT_USERS:
            return [
                ...state,
                ...action.users
            ]
        default:
            return state
    }
} 

//root reducer
export default combineReducers({
    users,
    user
}); 
