import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as types from './types';


/****************************** Reducers *************************************/
export const query = createSlice({
    name: 'query',
    initialState: '',
    reducers: {
        putQuery: (state, action) => action.payload,
        clearQuery: () => ''
    }
});


export const songSearch = createSlice({
    name: 'songSearch',
    initialState: types.songSearchResultsDefault,
    reducers: {
        putSongs: (state, action) => action.payload,
        clearSongs: () => types.songSearchResultsDefault
    }
});


export const song = createSlice({
    name: 'song',
    initialState: types.songResultDefault,
    reducers: {
        putSong: (state, action) => action.payload,
        clearSong: () => types.songResultDefault
    }
});


export const artistSearch = createSlice({
    name: 'artistSearch',
    initialState: types.artistSearchResultsDefault,
    reducers: {
        putArtists: (state, action) => action.payload,
        clearArtists: () => types.artistSearchResultsDefault
    }
});


export const artist = createSlice({
    name: 'artist',
    initialState: types.artistResultDefault,
    reducers: {
        putArtist: (state, action) => action.payload,
        clearArtist: () => types.artistResultDefault
    }
});


/****************************** Root Reducer *************************************/
export default combineReducers({
    query: query.reducer,
    songSearch: songSearch.reducer,
    song: song.reducer,
    artistSearch: artistSearch.reducer,
    artist: artist.reducer
});
