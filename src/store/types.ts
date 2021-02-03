/******************************************************************************/
/**************************** Saga Request Types ******************************/
/******************************************************************************/
//request type
export interface RequestType {
    query: string;
    page?: number;
    per_page?: number; 
}

//request default values
export const getRequestDefault: RequestType = {
    query: ''
};

export const getRequestPaginationDefault: RequestType = {
    query: '',
    page: 0,
    per_page: 15
};





/******************************************************************************/
/******************************** Search Query ********************************/
/******************************************************************************/
//action types
export const PUT_QUERY = 'PUT_QUERY';
export const CLEAR_QUERY = 'CLEAR_QUERY';

//action object types
interface PutQueryActionType {
    type: typeof PUT_QUERY;
    payload: string
}

interface ClearQueryActionType {
    type: typeof CLEAR_QUERY;
}

export type QueryActionTypes = PutQueryActionType | ClearQueryActionType;





/******************************************************************************/
/****************************** Song Search ***********************************/
/******************************************************************************/
//action types
export const GET_SONG_SEARCH = 'GET_SONG_SEARCH';
export const PUT_SONG_SEARCH = 'PUT_SONG_SEARCH';
export const CLEAR_SONG_SEARCH = 'CLEAR_SONG_SEARCH';

//action object types
export interface GetSongSearchActionType {
    type: typeof GET_SONG_SEARCH;
    payload: RequestType;
}

interface PutSongSearchActionType {
    type: typeof PUT_SONG_SEARCH;
    payload: SongSearchResultsType;
}

interface ClearSongSearchActionType {
    type: typeof CLEAR_SONG_SEARCH;
}

export type SongSearchActionTypes = PutSongSearchActionType | ClearSongSearchActionType;

//redux store type
interface SongSearchItemType {
    id: number;
    song_title: string;
    song_thumbnail_url: string;
    song_image_url: string;
    artist_name: string;
    artist_image_url: string;
}

export interface SongSearchResultsType {
    results: SongSearchItemType[];
    error: boolean;
    error_message: string;
    request_status: string;
}

//redux store initial value
export const songSearchResultsDefault: SongSearchResultsType = {
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};





/******************************************************************************/
/*********************************** Song *************************************/
/******************************************************************************/
//action types
export const GET_SONG = 'GET_SONG';
export const PUT_SONG = 'PUT_SONG';
export const CLEAR_SONG = 'CLEAR_SONG';

//action object types
export interface GetSongActionType {
    type: typeof GET_SONG;
    payload: RequestType;
}

interface PutSongActionType {
    type: typeof PUT_SONG;
    payload: SongResultType;
}

interface ClearSongActionType {
    type: typeof CLEAR_SONG;
}

export type SongActionTypes = PutSongActionType | ClearSongActionType;

//redux store type
export interface SongResultType {
    id: number;
    song_title: string;
    song_writers: string[];
    song_thumbnail_url: string;
    song_image_url: string;
    artist_name: string;
    artist_image_url: string;
    album_name: string;
    album_image_url: string;
    lyrics: string;
    error: boolean;
    error_message: string;
    request_status: string;
}

//redux store initial value
export const songResultDefault: SongResultType = {
    id: 0,
    song_title: '',
    song_writers: [],
    song_thumbnail_url: '',
    song_image_url: '',
    artist_name: '',
    artist_image_url: '',
    album_name: '',
    album_image_url: '',
    lyrics: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};





/******************************************************************************/
/**************************** Artist Search ***********************************/
/******************************************************************************/
//action types
export const GET_ARTIST_SEARCH = 'GET_ARTIST_SEARCH';
export const PUT_ARTIST_SEARCH = 'PUT_ARTIST_SEARCH';
export const CLEAR_ARTIST_SEARCH = 'CLEAR_ARTIST_SEARCH';

//action object types
export interface GetArtistSearchActionType {
    type: typeof GET_ARTIST_SEARCH;
    payload: RequestType;
}

interface PutArtistSearchActionType {
    type: typeof PUT_ARTIST_SEARCH;
    payload: ArtistSearchResultsType;
}

interface ClearArtistSearchActionType {
    type: typeof CLEAR_ARTIST_SEARCH;
}

export type ArtistSearchActionTypes = PutArtistSearchActionType | ClearArtistSearchActionType;

//redux store type
interface PaginationType {
    page: number;
    pages: number;
    per_page: number;
    items: number;
}

interface ArtistSearchItemType {
    id: number;
    name: string;
    thumbnail_url: string;
    image_url: string;
}

export interface ArtistSearchResultsType {
    pagination: PaginationType,
    results: ArtistSearchItemType[];
    error: boolean;
    error_message: string;
    request_status: string;
}

//redux store initial value
export const paginationDefault: PaginationType = {
    page: 0,
    pages: 1,
    per_page: 15,
    items: 0
};

export const artistSearchResultsDefault: ArtistSearchResultsType = {
    pagination: paginationDefault as PaginationType,
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};





/******************************************************************************/
/********************************* Artist *************************************/
/******************************************************************************/
//action types
export const GET_ARTIST = 'GET_ARTIST';
export const PUT_ARTIST = 'PUT_ARTIST';
export const CLEAR_ARTIST = 'CLEAR_ARTIST';

//action object types
export interface GetArtistActionType {
    type: typeof GET_ARTIST;
    payload: RequestType;
}

interface PutArtistActionType {
    type: typeof PUT_ARTIST;
    payload: ArtistResultType;
}

interface ClearArtistActionType {
    type: typeof CLEAR_ARTIST;
}

export type ArtistActionTypes = PutArtistActionType | ClearArtistActionType;

//redux store type
export interface ArtistResultType {
    name: string;
    realname: string;
    image_url: string;
    error: boolean;
    error_message: string;
    request_status: string;
}

//redux store initial value
export const artistResultDefault: ArtistResultType = {
    name: '',
    realname: '',
    image_url: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};
