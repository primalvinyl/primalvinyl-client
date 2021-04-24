import { createAction } from '@reduxjs/toolkit'; 
import * as types from './types';


/*********************************** Query ************************************/
export const putQuery = createAction<string | undefined>('PUT_QUERY');
export const clearQuery = createAction('CLEAR_QUERY');


/**************************** Song Search Results *****************************/
export const getSongSearch = createAction<types.RequestType | undefined>('GET_SONG_SEARCH');
export const putSongSearch = createAction<types.SongSearchResultsType | undefined>('PUT_SONG_SEARCH');
export const clearSongSearch = createAction('CLEAR_SONG_SEARCH');


/********************************** Song **************************************/
export const getSong = createAction<types.RequestType | undefined>('GET_SONG');
export const putSong = createAction<types.SongResultType | undefined>('PUT_SONG');
export const clearSong = createAction('CLEAR_SONG');


/************************* Artist Search Results ******************************/
export const getArtistSearch = createAction<types.RequestType | undefined>('GET_ARTIST_SEARCH');
export const putArtistSearch = createAction<types.ArtistSearchResultsType | undefined>('PUT_ARTIST_SEARCH');
export const clearArtistSearch = createAction('CLEAR_ARTIST_SEARCH');


/******************************** Artist **************************************/
export const getArtist = createAction<types.RequestType | undefined>('GET_ARTIST');
export const putArtist = createAction<types.ArtistResultType | undefined>('PUT_ARTIST');
export const clearArtist = createAction('CLEAR_ARTIST');
