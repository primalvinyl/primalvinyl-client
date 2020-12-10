import { combineReducers } from 'redux';
import { actionTypes, PutQueryActionType, PutArtistActionType, PutArtistsActionType } from './actions';
import { ReduxArtistType, ReduxArtistsType, artistDefault, artistsDefault } from '../__types__';



/******************************** Reducers ***************************************/
export const query = (
    state = '', 
    action: PutQueryActionType
) => {
    switch(action.type) {
        case actionTypes.PUT_QUERY:
            return action.payload
        default: 
            return state
    }
};

export const artist = (
    state: ReduxArtistType = artistDefault, 
    action: PutArtistActionType
): ReduxArtistType => {
    switch(action.type){
        case actionTypes.PUT_ARTIST:
            return { ...state, ...action.payload }
        case actionTypes.CLEAR_ARTIST:
            return {} as ReduxArtistType
        default:
            return state
    }
}

export const artists = (
    state: ReduxArtistsType = artistsDefault,
    action: PutArtistsActionType
): ReduxArtistsType => {
    switch(action.type){
        case actionTypes.PUT_ARTISTS:
            return { ...state, ...action.payload }
        case actionTypes.CLEAR_ARTIST:
            return {} as ReduxArtistsType
        default:
            return state
    }
}



/****************************** Root Reducer *************************************/
export default combineReducers({
    query,
    artist,
    artists
});

export interface RootState {
    query: string;
    artist: ReduxArtistType;
    artists: ReduxArtistsType;
}
