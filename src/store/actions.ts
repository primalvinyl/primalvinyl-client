import * as types from '../__types__';





/********************************* Action Types *************************************/
export const actionTypes = {
    PUT_QUERY: 'PUT_QUERY',
    PUT_LYRICS_SEARCH: 'PUT_LYRICS_SEARCH',
    PUT_ARTIST_SEARCH: 'PUT_ARTIST_SEARCH',
    PUT_ARTIST: 'PUT_ARTIST',
    CLEAR_LYRICS_SEARCH: 'CLEAR_LYRICS_SEARCH',
    CLEAR_ARTIST_SEARCH: 'CLEAR_ARTIST_SEARCH',
    CLEAR_ARTIST: 'CLEAR_ARTIST',
    GET_LYRICS_SEARCH: 'GET_LYRICS_SEARCH',
    GET_ARTIST: 'GET_ARTIST',
    GET_ARTIST_SEARCH: 'GET_ARTIST_SEARCH'
};





/******************************* Reducer Actions *************************************/
export interface PutQueryActionType {
    type: typeof actionTypes.PUT_QUERY;
    payload: string
}
export const putQuery = (payload: string = ''): PutQueryActionType => {
    return {
        type: actionTypes.PUT_QUERY,
        payload
    }
};




export interface PutLyricsSearchActionType {
    type: typeof actionTypes.PUT_LYRICS_SEARCH;
    payload: types.ReduxLyricsSearchType;
}
export const putLyricsSearch = (payload: types.ReduxLyricsSearchType = types.lyricsSearchDefault): PutLyricsSearchActionType => { 
    return {
        type: actionTypes.PUT_LYRICS_SEARCH,
        payload
    };
};

export interface ClearLyricsSearchActionType {
    type: typeof actionTypes.CLEAR_LYRICS_SEARCH;
}
export const clearGeniusSearch = (): ClearLyricsSearchActionType => { 
    return {
        type: actionTypes.CLEAR_LYRICS_SEARCH
    };
};




export interface PutArtistSearchActionType {
    type: typeof actionTypes.PUT_ARTIST_SEARCH;
    payload: types.ReduxArtistSearchType;
}
export const putArtistSearch = (payload: types.ReduxArtistSearchType = types.artistSearchDefault): PutArtistSearchActionType => { 
    return {
        type: actionTypes.PUT_ARTIST_SEARCH,
        payload
    };
};

export interface ClearArtistSearchActionType {
    type: typeof actionTypes.CLEAR_ARTIST_SEARCH;
}
export const clearArtistSearch = (): ClearArtistSearchActionType => { 
    return {
        type: actionTypes.CLEAR_ARTIST_SEARCH
    };
};




export interface PutArtistActionType {
    type: typeof actionTypes.PUT_ARTIST;
    payload: types.ReduxArtistType;
}
export const putArtist = (payload: types.ReduxArtistType = types.artistDefault): PutArtistActionType => { 
    return {
        type: actionTypes.PUT_ARTIST,
        payload
    };
};

export interface ClearArtistActionType {
    type: typeof actionTypes.CLEAR_ARTIST;
}
export const clearDiscogsArtist = (): ClearArtistActionType => { 
    return {
        type: actionTypes.CLEAR_ARTIST
    };
};





/******************************** Saga Actions **************************************/
export interface GetLyricsSearchActionType {
    type: typeof actionTypes.GET_LYRICS_SEARCH;
    payload: types.SagaRequestType;
}
export const getGeniusSearch = (payload: types.SagaRequestType = types.lyricsGetRequestDefault): GetLyricsSearchActionType => {
    return {
        type: actionTypes.GET_LYRICS_SEARCH,
        payload: { ...types.lyricsGetRequestDefault, ...payload }
    };
};




export interface GetArtistSearchActionType {
    type: typeof actionTypes.GET_ARTIST_SEARCH;
    payload: types.SagaRequestType;
}
export const getDiscogsArtists = (payload: types.SagaRequestType = types.artistGetRequestDefault): GetArtistSearchActionType => {
    return {
        type: actionTypes.GET_ARTIST_SEARCH,
        payload: { ...types.artistGetRequestDefault, ...payload }
    };
}; 




export interface GetDiscogsArtistActionType {
    type: typeof actionTypes.GET_ARTIST;
    payload: types.SagaRequestType;
}
export const getDiscogsArtist = (payload: types.SagaRequestType = types.artistGetRequestDefault): GetDiscogsArtistActionType => {
    return {
        type: actionTypes.GET_ARTIST,
        payload: { ...types.artistGetRequestDefault, ...payload }
    };
};
