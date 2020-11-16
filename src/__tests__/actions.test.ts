import { actionTypes, putArtist, putArtists, getArtist, getArtists } from '../store/actions';
import { artistDefault, artistsDefault } from '../__types__';

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
            payload: '1234'
        };
        const actualResult = getArtist('1234');
        expect(actualResult).toEqual(expectedResult);
    })
})

describe('getArtists', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actionTypes.GET_ARTISTS,
            payload: 'bling'
        };
        const actualResult = getArtists('bling');
        expect(actualResult).toEqual(expectedResult);
    })
})
