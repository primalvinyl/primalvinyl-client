import { take, put, call, fork, all } from 'redux-saga/effects';
import { actionTypes, putArtist, putArtists } from './actions';
import { getRequest, postRequest } from './utilities/services';

/******************************** Workers *************************************/
export function* getArtistWorker(data) {
    try {
        yield put(putArtist({ request_status: 'pending' }));
        const response = yield call(getRequest, '/artists', data);
        yield put(putArtist({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtist({ request_status: 'resolved', error: true, error_message: 'no data' }));
    }
}

export function* patchArtistWorker(data) {
    try { 
        const stringData = JSON.stringify(data);
        yield put(putArtist({ request_status: 'pending' }));
        yield call(postRequest, '/artists', stringData);
        yield put(putArtist({ ...stringData, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtist({ error: true, request_status: 'resolved' }));
    }
}

export function* getArtistsWorker(data) {
    try {
        yield put(putArtists({ request_status: 'pending' }));
        const response = yield call(getRequest, '/artists/search', data);
        yield put(putArtists({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtists({ error: true, request_status: 'resolved' }));
    }
}

/******************************* Watchers *************************************/
export function* getArtistWatcher() {
    while (true) {
        const { data } = yield take(actionTypes.GET_ARTIST);
        yield call(getArtistWorker, data)
    }
}

export function* patchArtistWatcher() {
    while (true) {
        const { data } = yield take(actionTypes.PATCH_ARTIST);
        yield call(patchArtistWorker, data)
    }
}

export function* getArtistsWatcher() {
    while (true) {
        const { data } = yield take(actionTypes.GET_ARTISTS);
        yield call(getArtistsWorker, data)
    }
}

/******************************* Root Saga ************************************/
export default function* rootSaga() {
    yield all([
        fork(getArtistWatcher),
        fork(patchArtistWatcher),
        fork(getArtistsWatcher)
    ]);
} 
