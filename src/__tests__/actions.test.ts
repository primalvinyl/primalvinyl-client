import * as actions from '../store/actions';
import * as types from '../store/types';




describe('putQuery', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_QUERY,
            payload: 'test'
        };
        const actualResult = actions.putQuery('test');
        expect(actualResult).toEqual(expectedResult);
    })
})




describe('getSongSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.GET_SONG_SEARCH,
            payload: {
                query: '',
            }
        };
        const actualResult = actions.getSongSearch(types.getRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
describe('putSongSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_SONG_SEARCH,
            payload: types.songSearchResultsDefault
        };
        const actualResult = actions.putSongSearch(types.songSearchResultsDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})




describe('getSong', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.GET_SONG,
            payload: {
                query: ''
            }
        };
        const actualResult = actions.getSong(types.getRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
describe('putSong', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_SONG,
            payload: types.songResultDefault
        };
        const actualResult = actions.putSong(types.songResultDefault);
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
        const actualResult = actions.getArtistSearch(types.getRequestPaginationDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
describe('putArtistSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_ARTIST_SEARCH,
            payload: types.artistSearchResultsDefault
        };
        const actualResult = actions.putArtistSearch(types.artistSearchResultsDefault);
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
        const actualResult = actions.getArtist(types.getRequestPaginationDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
describe('putArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: types.PUT_ARTIST,
            payload: types.artistResultDefault
        };
        const actualResult = actions.putArtist(types.artistResultDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})
