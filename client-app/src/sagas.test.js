import { expectSaga } from 'redux-saga-test-plan';
import { getUserWorker } from './sagas';
import { getUser, putUser } from './actions';
import { fetchResponse, mockUserApiObject, mockUserObject } from '../__mocks__';

describe('getUserWorker', () => {
    fetch.mockResolvedValue(fetchResponse(mockUserApiObject));
    it('is called by watcher, transforms, and puts data', () => {
        return expectSaga(getUserWorker)
            .dispatch(getUser('1234'))
            .put(putUser(mockUserObject))
            .run();
    });
});
