import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import {
    getSongSearch,
    getArtistSearch,
    getArtist,
    putArtist
} from '../store/actions';
import {
    songSearchResults,
    artistSearchResults,
    artist
} from '../store/reducers';
import {
    getSongSearchWatcher,
    getSongSearchWorker,
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
describe('getSongSearchWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiSearchObject });
        return expectSaga(getSongSearchWorker)
            .withReducer(songSearchResults)
            .run();
    });
});

describe('getDiscogsArtistSearchWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistSearchObject });
        return expectSaga(getArtistSearchWorker)
            .withReducer(artistSearchResults)
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
describe('getSongSearchWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiSearchObject });
        return expectSaga(getSongSearchWatcher)
            .dispatch(getSongSearch('test'))
            .silentRun();
    });
});

describe('getDiscogsArtistSearchWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistSearchObject });
        return expectSaga(getArtistSearchWatcher)
            .dispatch(getArtistSearch('test'))
            .silentRun();
    });
});

describe('getArtistWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistObject });
        return expectSaga(getArtistWatcher)
            .dispatch(getArtist('1234'))
            .silentRun();
    });
});
