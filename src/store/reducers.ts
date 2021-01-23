import { combineReducers } from 'redux';
import {
    actionTypes,
    PutQueryActionType,
    PutLyricsSearchActionType,
    PutArtistSearchActionType,
    PutArtistActionType } from './actions';
import {
    ReduxLyricsSearchType,
    ReduxArtistSearchType,
    ReduxArtistType,
    lyricsSearchDefault,
    artistSearchDefault,
    artistDefault } from '../__types__';



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

export const search = (
    state: ReduxLyricsSearchType = lyricsSearchDefault,
    action: PutLyricsSearchActionType
): ReduxLyricsSearchType => {
    switch(action.type){
        case actionTypes.PUT_LYRICS_SEARCH:
            return { ...state, ...action.payload }
        case actionTypes.CLEAR_LYRICS_SEARCH:
            return {} as ReduxLyricsSearchType
        default:
            return state
    }
}

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
    state: ReduxArtistSearchType = artistSearchDefault,
    action: PutArtistSearchActionType
): ReduxArtistSearchType => {
    switch(action.type){
        case actionTypes.PUT_ARTIST_SEARCH:
            return { ...state, ...action.payload }
        case actionTypes.CLEAR_ARTIST:
            return {} as ReduxArtistSearchType
        default:
            return state
    }
}



/****************************** Root Reducer *************************************/
export default combineReducers({
    query,
    search,
    artist,
    artists
});

export interface RootState {
    query: string;
    artist: ReduxArtistType;
    artists: ReduxArtistSearchType;
}
