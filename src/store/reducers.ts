import { combineReducers } from 'redux';
import * as types from './types';



/******************************** Reducers ***************************************/
export const query = (
    state = '',
    action: any
) => {
    switch (action.type) {
        case types.PUT_QUERY:
            return action.payload
        case types.CLEAR_QUERY:
            return state
        default:
            return state
    }
};


export const songSearchResults = (
    state = types.songSearchResultsDefault,
    action: any
): types.SongSearchResultsType => {
    switch (action.type) {
        case types.PUT_SONG_SEARCH:
            return {
                ...state,
                ...action.payload
            }
        case types.CLEAR_SONG_SEARCH:
            return types.songSearchResultsDefault
        default:
            return state
    }
}


export const song = (
    state = types.songResultDefault,
    action: any
): types.SongResultType => {
    switch (action.type) {
        case types.PUT_SONG:
            return {
                ...state,
                ...action.payload
            }
        case types.CLEAR_SONG:
            return types.songResultDefault
        default:
            return state
    }
}


export const artistSearchResults = (
    state = types.artistSearchResultsDefault,
    action: any
): types.ArtistSearchResultsType => {
    switch (action.type) {
        case types.PUT_ARTIST_SEARCH:
            return {
                ...state,
                ...action.payload
            }
        case types.CLEAR_ARTIST_SEARCH:
            return types.artistSearchResultsDefault
        default:
            return state
    }
}


export const artist = (
    state = types.artistResultDefault,
    action: any
): types.ArtistResultType => {
    switch (action.type) {
        case types.PUT_ARTIST:
            return {
                ...state,
                ...action.payload
            }
        case types.CLEAR_ARTIST:
            return types.artistResultDefault
        default:
            return state
    }
}



/****************************** Root Reducer *************************************/
export default combineReducers({
    query,
    songSearchResults,
    song,
    artistSearchResults,
    artist
});

export interface RootState {
    query: string;
    songSearchResults: types.SongSearchResultsType;
    song: types.SongResultType;
    artistSearchResults: types.ArtistSearchResultsType;
    artist: types.ArtistResultType;
}
