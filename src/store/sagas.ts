import { take, put, call, fork, all } from 'redux-saga/effects';
import { actionTypes, putArtist, putArtists } from './actions';
import { getRequest } from '../utilities/services';
import { artistDefault, artistsDefault } from '../__types__';

/******************************** Workers *************************************/
export function* getArtistWorker(payload: string) {
    try {
        yield put(putArtist({ ...artistDefault, request_status: 'pending' }));
        const response = yield call(getRequest, '/artists', payload);
        yield put(putArtist({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtist({ ...artistDefault, request_status: 'resolved', error: true }));
    }
}

export function* getArtistsWorker(payload: string) {
    try {
        yield put(putArtists({ ...artistsDefault, request_status: 'pending' }));
        const response = yield call(getRequest, '/artists/search', payload);
        yield put(putArtists({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtists({ ...artistsDefault, request_status: 'resolved', error: true }));
    }
}

/******************************* Watchers *************************************/
export function* getArtistWatcher() {
    while (true) {
        const { payload } = yield take(actionTypes.GET_ARTIST);
        yield call(getArtistWorker, payload)
    }
}

export function* getArtistsWatcher() {
    while (true) {
        const { payload } = yield take(actionTypes.GET_ARTISTS);
        yield call(getArtistsWorker, payload)
    }
}

/******************************* Root Saga ************************************/
export default function* rootSaga() {
    yield all([
        fork(getArtistWatcher),
        fork(getArtistsWatcher)
    ]);
} 
