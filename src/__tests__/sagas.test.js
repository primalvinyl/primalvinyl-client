import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import {
    getArtist,
    getArtists,
    putArtist
} from '../actions';
import {
    artist,
    artists
} from '../reducers';
import {
    getArtistWatcher,
    getArtistWorker,
    getArtistsWatcher,
    getArtistsWorker
} from '../sagas';
import {
    mockApiArtistObject,
    mockReduxArtistObject,
    mockApiArtistsObject
} from '../__mocks__/mockObjects';

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

describe('getArtistsWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistsObject });
        return expectSaga(getArtistsWorker)
            .withReducer(artists)
            .run();
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

describe('getArtistsWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistsObject });
        return expectSaga(getArtistsWatcher)
            .dispatch(getArtists('bling'))
            .silentRun();
    });
});
