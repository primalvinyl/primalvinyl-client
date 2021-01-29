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




export const getSongSearch = (
    payload: types.RequestType = types.getRequestDefault
): types.GetSongSearchActionType => {
    return {
        type: types.GET_SONG_SEARCH,
        payload: { ...types.getRequestDefault, ...payload }
    };
};

export const putSongSearch = (
    payload: types.SongSearchResultsType = types.songSearchResultsDefault
): types.SongSearchActionTypes => {
    return {
        type: types.PUT_SONG_SEARCH,
        payload
    };
};

export const clearSongSearch = (): types.SongSearchActionTypes => {
    return {
        type: types.CLEAR_SONG_SEARCH
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
