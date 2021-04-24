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
/**************************** Song Search Results *****************************/
/******************************************************************************/
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
//redux store type
export interface SongResultType {
    id: number;
    song_title: string;
    song_release_date: string;
    song_writers: string[];
    song_thumbnail_url: string;
    song_image_url: string;
    artist_name: string;
    artist_image_url: string;
    album_name: string;
    album_image_url: string;
    lyrics: string;
    media_spotify_track_id: string;
    media_soundcloud_track_id: string;
    error: boolean;
    error_message: string;
    request_status: string;
}

//redux store initial value
export const songResultDefault: SongResultType = {
    id: 0,
    song_title: '',
    song_release_date: '',
    song_writers: [],
    song_thumbnail_url: '',
    song_image_url: '',
    artist_name: '',
    artist_image_url: '',
    album_name: '',
    album_image_url: '',
    lyrics: '',
    media_spotify_track_id: '',
    media_soundcloud_track_id: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};





/******************************************************************************/
/************************* Artist Search Results ******************************/
/******************************************************************************/
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
