import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import {
    getGeniusSearch,
    getDiscogsArtist,
    getDiscogsArtists,
    putArtist
} from '../store/actions';
import {
    search,
    artist,
    artists
} from '../store/reducers';
import {
    getLyricsSearchWatcher,
    getLyricsSearchWorker,
    getArtistSearchWatcher,
    getArtistSearchWorker,
    getArtistWatcher,
    getArtistWorker,
} from '../store/sagas';
import {
    mockApiSearchObject,
    mockApiArtistObject,
    mockReduxArtistObject,
    mockApiArtistSearchObject
} from '../__mocks__/mockObjects';



/******************************** Workers *************************************/
describe('getLyricsSearchWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiSearchObject });
        return expectSaga(getLyricsSearchWorker)
            .withReducer(search)
            .run();
    });
});

describe('getDiscogsArtistSearchWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistSearchObject });
        return expectSaga(getArtistSearchWorker)
            .withReducer(artists)
            .run();
    });
});

describe('getArtistWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistObject });
        return expectSaga(getArtistWorker)
            .put(putArtist(mockReduxArtistObject))
            .withReducer(artist)
            .hasFinalState(mockReduxArtistObject)
            .run();
    });
});



/******************************* Watchers *************************************/
describe('getLyricsSearchWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiSearchObject });
        return expectSaga(getLyricsSearchWatcher)
            .dispatch(getGeniusSearch('test'))
            .silentRun();
    });
});

describe('getDiscogsArtistSearchWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistSearchObject });
        return expectSaga(getArtistSearchWatcher)
            .dispatch(getDiscogsArtists('test'))
            .silentRun();
    });
});

describe('getArtistWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistObject });
        return expectSaga(getArtistWatcher)
            .dispatch(getDiscogsArtist('1234'))
            .silentRun();
    });
});
