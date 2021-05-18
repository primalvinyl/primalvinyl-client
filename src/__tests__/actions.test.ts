import * as actions from '../store/actions';
import * as reducers from '../store/reducers';
import * as types from '../store/types';




describe('putQuery', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: reducers.query.actions.putQuery.toString(),
            payload: 'test'
        };
        const actualResult = reducers.query.actions.putQuery('test');
        expect(actualResult).toEqual(expectedResult);
    })
})


describe('getSongSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actions.getSongSearch.toString(),
            payload: {
                query: '',
            }
        };
        const actualResult = actions.getSongSearch(types.getRequestDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})


describe('putSongs', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: reducers.songSearch.actions.putSongs.toString(),
            payload: types.songSearchResultsDefault
        };
        const actualResult = reducers.songSearch.actions.putSongs(
            types.songSearchResultsDefault
        );
        expect(actualResult).toEqual(expectedResult);
    })
})


describe('getSong', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actions.getSong.toString(),
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
            type: reducers.song.actions.putSong.toString(),
            payload: types.songResultDefault
        };
        const actualResult = reducers.song.actions.putSong(types.songResultDefault);
        expect(actualResult).toEqual(expectedResult);
    })
})


describe('getArtistSearch', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actions.getArtistSearch.toString(),
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


describe('putArtists', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: reducers.artistSearch.actions.putArtists.toString(),
            payload: types.artistSearchResultsDefault
        };
        const actualResult = reducers.artistSearch.actions.putArtists(
            types.artistSearchResultsDefault
        );
        expect(actualResult).toEqual(expectedResult);
    })
})


describe('getArtist', () => {
    it('returns an action object', () => {
        const expectedResult = {
            type: actions.getArtist.toString(),
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
            type: reducers.artist.actions.putArtist.toString(),
            payload: types.artistResultDefault
        };
        const actualResult = reducers.artist.actions.putArtist(
            types.artistResultDefault
        );
        expect(actualResult).toEqual(expectedResult);
    })
})
