import {
    actionTypes,
    putQuery,
    putLyricsSearch,
    putArtist,
    putArtistSearch,
    getGeniusSearch,
    getDiscogsArtist,
    getDiscogsArtists } from '../store/actions';
import {
    lyricsSearchDefault,
    artistDefault,
    artistSearchDefault,
    lyricsGetRequestDefault,
    artistGetRequestDefault } from '../__types__';


/******************************* Reducer Actions *************************************/
describe('putQuery', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.PUT_QUERY,
            payload: 'test'
        };
        const actualResult = putQuery('test');
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('putLyricsSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.PUT_LYRICS_SEARCH,
            payload: lyricsSearchDefault
        };
        const actualResult = putLyricsSearch(lyricsSearchDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('putArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.PUT_ARTIST,
            payload: artistDefault
        };
        const actualResult = putArtist(artistDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('putArtistSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.PUT_ARTIST_SEARCH,
            payload: artistSearchDefault
        };
        const actualResult = putArtistSearch(artistSearchDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})


/******************************** Saga Actions **************************************/
describe('getGeniusSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_LYRICS_SEARCH,
            payload: {
                query: '',
            }
        };
        const actualResult = getGeniusSearch(lyricsGetRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getDiscogsArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_ARTIST,
            payload: {
                query: '',
                page: 0,
                per_page: 15
            }
        };
        const actualResult = getDiscogsArtist(artistGetRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getDiscogsArtists', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_ARTIST_SEARCH,
            payload: {
                query: '',
                page: 0,
                per_page: 15
            }
        };
        const actualResult = getDiscogsArtists(artistGetRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
