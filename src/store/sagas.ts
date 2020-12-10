import { take, put, call, fork, all } from 'redux-saga/effects';
import { actionTypes, putQuery, putArtist, putArtists } from './actions';
import { getRequest } from './services';
import { artistDefault, artistsDefault, sagaGetRequestDefault, SagaGetRequest } from '../__types__';

/******************************** Workers *************************************/
export function* getArtistWorker(payload: SagaGetRequest = sagaGetRequestDefault) {
    const { query } = payload;
    try {
        yield put(putQuery(query));
        yield put(putArtist({ ...artistDefault, request_status: 'pending' }));
        const response = yield call(
            getRequest,
            `/artists/${query}`
        );
        yield put(putArtist({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtist({ ...artistDefault, request_status: 'resolved', error: true }));
    }
}

export function* getArtistsWorker(payload: SagaGetRequest = sagaGetRequestDefault) {
    const { query, page, per_page } = payload;
    try {
        yield put(putQuery(query));
        yield put(putArtists({ ...artistsDefault, request_status: 'pending' }));
        const response = yield call(
            getRequest, 
            `/artists/search/${query}?page=${page}&per_page=${per_page}`
        );
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
