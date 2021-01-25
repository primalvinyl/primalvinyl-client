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


export const lyricsSearchResults = (
    state = types.lyricsSearchResultsDefault,
    action: any
): types.LyricsSearchResultsType => {
    switch (action.type) {
        case types.PUT_LYRICS_SEARCH:
            return {
                ...state,
                ...action.payload
            }
        case types.CLEAR_LYRICS_SEARCH:
            return types.lyricsSearchResultsDefault
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
    lyricsSearchResults,
    artistSearchResults,
    artist
});

export interface RootState {
    query: string;
    lyricsSearchResults: types.LyricsSearchResultsType;
    artistSearchResults: types.ArtistSearchResultsType;
    artist: types.ArtistResultType;
}
