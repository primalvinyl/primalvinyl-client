import {
    ReduxArtistType,
    ReduxArtistsType,
    artistDefault,
    artistsDefault
} from '../__types__';



/********************************* Action Types *************************************/
export const actionTypes = {
    GET_ARTIST: 'GET_ARTIST',
    GET_ARTISTS: 'GET_ARTISTS',
    PUT_ARTIST: 'PUT_ARTIST',
    PUT_ARTISTS: 'PUT_ARTISTS',
    CLEAR_ARTIST: 'CLEAR_ARTIST',
    CLEAR_ARTISTS: 'CLEAR_ARTISTS',
};




/******************************* Reducer Actions *************************************/
export interface PutArtistActionType {
    type: typeof actionTypes.PUT_ARTIST;
    payload: ReduxArtistType;
}
export const putArtist = (payload: ReduxArtistType = artistDefault): PutArtistActionType => { 
    return {
        type: actionTypes.PUT_ARTIST,
        payload
    };
};


export interface ClearArtistActionType {
    type: typeof actionTypes.CLEAR_ARTIST;
}
export const clearArtist = (): ClearArtistActionType => { 
    return {
        type: actionTypes.CLEAR_ARTIST
    };
};


export interface PutArtistsActionType {
    type: typeof actionTypes.PUT_ARTISTS;
    payload: ReduxArtistsType;
}
export const putArtists = (payload: ReduxArtistsType = artistsDefault): PutArtistsActionType => { 
    return {
        type: actionTypes.PUT_ARTISTS,
        payload
    };
};


export interface ClearArtistsActionType {
    type: typeof actionTypes.CLEAR_ARTISTS;
}
export const clearArtists = (): ClearArtistsActionType => { 
    return {
        type: actionTypes.CLEAR_ARTISTS
    };
};




/******************************** Saga Actions **************************************/
export interface GetArtistActionType {
    type: typeof actionTypes.GET_ARTIST;
    payload: string;
}
export const getArtist = (payload: string): GetArtistActionType => {
    return {
        type: actionTypes.GET_ARTIST,
        payload
    };
};


export interface GetArtistsActionType {
    type: typeof actionTypes.GET_ARTISTS;
    payload: string;
}
export const getArtists = (payload: string): GetArtistsActionType => {
    return {
        type: actionTypes.GET_ARTISTS,
        payload
    };
}; 
