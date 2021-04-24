import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as types from './types';
import * as actions from './actions';


/****************************** Reducers *************************************/
export const query = createReducer('', builder => {
    builder
        .addCase(actions.putQuery, (state, action) => action.payload || '')
        .addCase(actions.clearQuery, () => '');
});


export const songSearchResults = createReducer(types.songSearchResultsDefault, builder => {
    builder
        .addCase(actions.putSongSearch, (state, action) => ({ ...state, ...action.payload }))
        .addCase(actions.clearSongSearch, () => types.songSearchResultsDefault);
});


export const song = createReducer(types.songResultDefault, builder => {
    builder
        .addCase(actions.putSong, (state, action) => ({ ...state, ...action.payload }))
        .addCase(actions.clearSong, () => types.songResultDefault);
});


export const artistSearchResults = createReducer(types.artistSearchResultsDefault, builder => {
    builder
        .addCase(actions.putArtistSearch, (state, action) => ({ ...state, ...action.payload }))
        .addCase(actions.clearArtistSearch, () => types.artistSearchResultsDefault);
});


export const artist = createReducer(types.artistResultDefault, builder => {
    builder
        .addCase(actions.putArtist, (state, action) => ({ ...state, ...action.payload }))
        .addCase(actions.clearArtist, () => types.artistResultDefault);
});


/****************************** Root Reducer *************************************/
export default combineReducers({
    query,
    songSearchResults,
    song,
    artistSearchResults,
    artist
});
