import * as types from './types';




export const putQuery = (payload: string = ''): types.QueryActionTypes => {
    return {
        type: types.PUT_QUERY,
        payload
    }
};

export const clearQuery = (): types.QueryActionTypes => {
    return {
        type: types.CLEAR_QUERY
    };
};




export const getLyricsSearch = (
    payload: types.RequestType = types.getRequestDefault
): types.GetLyricsSearchActionType => {
    return {
        type: types.GET_LYRICS_SEARCH,
        payload: { ...types.getRequestDefault, ...payload }
    };
};

export const putLyricsSearch = (
    payload: types.LyricsSearchResultsType = types.lyricsSearchResultsDefault
): types.LyricsSearchActionTypes => {
    return {
        type: types.PUT_LYRICS_SEARCH,
        payload
    };
};

export const clearLyricsSearch = (): types.LyricsSearchActionTypes => {
    return {
        type: types.CLEAR_LYRICS_SEARCH
    };
};




export const getArtistSearch = (
    payload: types.RequestType = types.getRequestPaginationDefault
): types.GetArtistSearchActionType => {
    return {
        type: types.GET_ARTIST_SEARCH,
        payload: { ...types.getRequestPaginationDefault, ...payload }
    };
};

export const putArtistSearch = (
    payload: types.ArtistSearchResultsType = types.artistSearchResultsDefault
): types.ArtistSearchActionTypes => {
    return {
        type: types.PUT_ARTIST_SEARCH,
        payload
    };
};

export const clearArtistSearch = (): types.ArtistSearchActionTypes => {
    return {
        type: types.CLEAR_ARTIST_SEARCH
    };
};




export const getArtist = (
    payload: types.RequestType = types.getRequestPaginationDefault
): types.GetArtistActionType => {
    return {
        type: types.GET_ARTIST,
        payload: { ...types.getRequestPaginationDefault, ...payload }
    };
};

export const putArtist = (
    payload: types.ArtistResultType = types.artistResultDefault
): types.ArtistActionTypes => {
    return {
        type: types.PUT_ARTIST,
        payload
    };
};

export const clearArtist = (): types.ArtistActionTypes => {
    return {
        type: types.CLEAR_ARTIST
    };
};
