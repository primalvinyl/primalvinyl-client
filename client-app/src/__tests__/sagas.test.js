import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import { getArtistWatcher, getArtistWorker } from '../sagas';
import { artist } from '../reducers';
import { getArtist, putArtist } from '../actions';
import { mockArtistApiObject, mockArtistReduxObject } from '../__mocks__/mockObjects';

describe('getArtist watcher and worker', () => {
    it('listens for action and gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockArtistApiObject });
        expectSaga(getArtistWatcher)
            .dispatch(getArtist())
            .call(getArtistWorker)
            .put(putArtist(mockArtistReduxObject))
            .withReducer(artist)
            .hasFinalState(mockArtistReduxObject)
            .run();
    });
});
