import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import * as actions from '../store/actions';
import * as reducers from '../store/reducers';
import * as sagas from '../store/sagas';
import * as mocks from '../__mocks__/mockObjects';



/******************************** Workers *************************************/
describe('getSongSearchWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiSongSearchResults });
        return expectSaga(sagas.getSongSearchWorker)
            .withReducer(reducers.songSearch.reducer)
            .run();
    });
});

describe('getSongWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiSongResults });
        return expectSaga(sagas.getSongWorker)
            .withReducer(reducers.song.reducer)
            .run();
    });
});

describe('getArtistSearchWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiArtistSearchResults });
        return expectSaga(sagas.getArtistSearchWorker)
            .withReducer(reducers.artistSearch.reducer)
            .run();
    });
});

describe('getArtistWorker', () => {
    it('gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiArtistResults });
        return expectSaga(sagas.getArtistWorker)
            .put(reducers.artist.actions.putArtist(mocks.mockReduxArtist))
            .withReducer(reducers.artist.reducer)
            .hasFinalState(mocks.mockReduxArtist)
            .run();
    });
});



/******************************* Watchers *************************************/
describe('getSongSearchWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiSongSearchResults });
        return expectSaga(sagas.getSongSearchWatcher)
            .dispatch(actions.getSongSearch('test'))
            .silentRun();
    });
});

describe('getSongWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiSongResults });
        return expectSaga(sagas.getSongWatcher)
            .dispatch(actions.getSong('1234'))
            .silentRun();
    });
});

describe('getArtistSearchWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiArtistSearchResults });
        return expectSaga(sagas.getArtistSearchWatcher)
            .dispatch(actions.getArtistSearch('test'))
            .silentRun();
    });
});

describe('getArtistWatcher', () => {
    it('listens for action', () => {
        axios.get.mockResolvedValueOnce({ data: mocks.mockApiArtistResults });
        return expectSaga(sagas.getArtistWatcher)
            .dispatch(actions.getArtist('1234'))
            .silentRun();
    });
});
