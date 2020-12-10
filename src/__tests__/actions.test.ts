import { actionTypes, putQuery, putArtist, putArtists, getArtist, getArtists } from '../store/actions';
import { artistDefault, artistsDefault, sagaGetRequestDefault } from '../__types__';

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

describe('putArtists', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.PUT_ARTISTS,
            payload: artistsDefault
        };
        const actualResult = putArtists(artistsDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_ARTIST,
            payload: {
                query: '',
                page: 0,
                per_page: 15
            }
        };
        const actualResult = getArtist(sagaGetRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getArtists', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_ARTISTS,
            payload: {
                query: '',
                page: 0,
                per_page: 15
            }
        };
        const actualResult = getArtists(sagaGetRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
