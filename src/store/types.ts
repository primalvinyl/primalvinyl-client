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
/*************************** Current Search Query *****************************/
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
/**************************** Lyrics Search ***********************************/
/******************************************************************************/
//action types
export const GET_LYRICS_SEARCH = 'GET_LYRICS_SEARCH';
export const PUT_LYRICS_SEARCH = 'PUT_LYRICS_SEARCH';
export const CLEAR_LYRICS_SEARCH = 'CLEAR_LYRICS_SEARCH';

//action object types
export interface GetLyricsSearchActionType {
    type: typeof GET_LYRICS_SEARCH;
    payload: RequestType;
}

interface PutLyricsSearchActionType {
    type: typeof PUT_LYRICS_SEARCH;
    payload: LyricsSearchResultsType;
}

interface ClearLyricsSearchActionType {
    type: typeof CLEAR_LYRICS_SEARCH;
}

export type LyricsSearchActionTypes = PutLyricsSearchActionType | ClearLyricsSearchActionType;

//redux store type
interface LyricsSearchItemType {
    id: number;
    song_title: string;
    song_thumbnail_url: string;
    song_image_url: string;
    artist_name: string;
    artist_image_url: string;
}

export interface LyricsSearchResultsType {
    results: LyricsSearchItemType[];
    error: boolean;
    error_message: string;
    request_status: string;
}

//redux store initial value
export const lyricsSearchResultsDefault: LyricsSearchResultsType = {
    results: [],
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
