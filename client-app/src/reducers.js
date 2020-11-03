import { combineReducers } from 'redux';
import { actionTypes, artistDefault, artistsDefault } from './actions';

export const artist = (state = artistDefault, action) => {
    switch(action.type){
        case actionTypes.PUT_ARTIST:
            return { ...state, ...action.data }
        default:
            return state
    }
}

export const artists = (state = artistsDefault, action) => {
    switch(action.type){
        case actionTypes.PUT_ARTISTS:
            return { ...state, ...action.data }
        default:
            return state
    }
}

//root reducer
export default combineReducers({
    artist,
    artists
}); 
