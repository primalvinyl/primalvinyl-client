import {
    putQuery,
    putSongSearch,
    putArtist,
    putArtistSearch,
    getSongSearch,
    getArtist,
    getArtistSearch } from '../store/actions';
import * as types from '../store/types';


/******************************* Reducer Actions *************************************/
describe('putQuery', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_QUERY,
            payload: 'test'
        };
        const actualResult = putQuery('test');
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('putSongSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_SONG_SEARCH,
            payload: types.songSearchResultsDefault
        };
        const actualResult = putSongSearch(types.songSearchResultsDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('putArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_ARTIST,
            payload: types.artistResultDefault
        };
        const actualResult = putArtist(types.artistResultDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('putArtistSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_ARTIST_SEARCH,
            payload: types.artistSearchResultsDefault
        };
        const actualResult = putArtistSearch(types.artistSearchResultsDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})


/******************************** Saga Actions **************************************/
describe('getSongSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.GET_SONG_SEARCH,
            payload: {
                query: '',
            }
        };
        const actualResult = getSongSearch(types.getRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.GET_ARTIST,
            payload: {
                query: '',
                page: 0,
                per_page: 15
            }
        };
        const actualResult = getArtist(types.getRequestPaginationDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getArtistSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.GET_ARTIST_SEARCH,
            payload: {
                query: '',
                page: 0,
                per_page: 15
            }
        };
        const actualResult = getArtistSearch(types.getRequestPaginationDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
