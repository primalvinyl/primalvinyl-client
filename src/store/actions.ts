import * as types from './types';




/******************************************************************************/
/*********************************** Query ************************************/
/******************************************************************************/
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




/******************************************************************************/
/**************************** Song Search Results *****************************/
/******************************************************************************/
export const getSongSearch = (payload: types.RequestType): types.GetSongSearchActionType => {
    return {
        type: types.GET_SONG_SEARCH,
        payload: { ...types.getRequestDefault, ...payload }
    };
};

export const putSongSearch = (payload: types.SongSearchResultsType): types.SongSearchActionTypes => {
    return {
        type: types.PUT_SONG_SEARCH,
        payload: {...types.songSearchResultsDefault, ...payload}
    };
};

export const clearSongSearch = (): types.SongSearchActionTypes => {
    return {
        type: types.CLEAR_SONG_SEARCH
    };
};




/******************************************************************************/
/********************************** Song **************************************/
/******************************************************************************/
export const getSong = (payload: types.RequestType): types.GetSongActionType => {
    return {
        type: types.GET_SONG,
        payload: { ...types.getRequestDefault, ...payload }
    };
};

export const putSong = (payload: types.SongResultType): types.SongActionTypes => {
    return {
        type: types.PUT_SONG,
        payload: {...types.songResultDefault, ...payload}
    };
};

export const clearSong = (): types.SongActionTypes => {
    return {
        type: types.CLEAR_SONG
    };
};




/******************************************************************************/
/************************* Artist Search Results ******************************/
/******************************************************************************/
export const getArtistSearch = (payload: types.RequestType): types.GetArtistSearchActionType => {
    return {
        type: types.GET_ARTIST_SEARCH,
        payload: { ...types.getRequestPaginationDefault, ...payload }
    };
};

export const putArtistSearch = (payload: types.ArtistSearchResultsType): 
types.ArtistSearchActionTypes => {
    return {
        type: types.PUT_ARTIST_SEARCH,
        payload: {...types.artistSearchResultsDefault, ...payload}
    };
};

export const clearArtistSearch = (): types.ArtistSearchActionTypes => {
    return {
        type: types.CLEAR_ARTIST_SEARCH
    };
};




/******************************************************************************/
/******************************** Artist **************************************/
/******************************************************************************/
export const getArtist = (payload: types.RequestType): types.GetArtistActionType => {
    return {
        type: types.GET_ARTIST,
        payload: { ...types.getRequestDefault, ...payload }
    };
};

export const putArtist = (payload: types.ArtistResultType): types.ArtistActionTypes => {
    return {
        type: types.PUT_ARTIST,
        payload: { ...types.artistResultDefault, ...payload }
    };
};

export const clearArtist = (): types.ArtistActionTypes => {
    return {
        type: types.CLEAR_ARTIST
    };
};
