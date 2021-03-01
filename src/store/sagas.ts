import { take, put, call, fork, all } from 'redux-saga/effects';
import { getRequest } from './services';
import * as actions from './actions';
import * as types from './types';




/******************************** Workers *************************************/
export function* getSongSearchWorker(payload: types.RequestType = types.getRequestDefault) {
    const { query } = payload;
    try {
        yield put(actions.putQuery(query));
        yield put(actions.putSongSearch({ ...types.songSearchResultsDefault, request_status: 'pending' }));
        // make request
        const response = yield call(
            getRequest,
            `/songs/search/${query}`
        );
        yield put(actions.putSongSearch({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(actions.putSongSearch({
            ...types.songSearchResultsDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}

export function* getSongWorker(payload: types.RequestType = types.getRequestDefault) {
    const { query } = payload;
    try {
        yield put(actions.putSong({ ...types.songResultDefault, request_status: 'pending' }));
        // make request
        const response = yield call(
            getRequest,
            `/songs/${query}`
        );
        yield put(actions.putSong({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(actions.putSong({
            ...types.songResultDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}

export function* getArtistSearchWorker(
    payload: types.RequestType = types.getRequestPaginationDefault
) {
    const { query, page, per_page } = payload;
    try {
        yield put(actions.putQuery(query));
        yield put(actions.putArtistSearch({ ...types.artistSearchResultsDefault, request_status: 'pending' }));
        // make request
        const response = yield call(
            getRequest, 
            `/artists/search/${query}?page=${page}&per_page=${per_page}`
        );
        yield put(actions.putArtistSearch({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(actions.putArtistSearch({
            ...types.artistSearchResultsDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}

export function* getArtistWorker(payload: types.RequestType = types.getRequestDefault) {
    const { query } = payload;
    try {
        yield put(actions.putQuery(query));
        yield put(actions.putArtist({ ...types.artistResultDefault, request_status: 'pending' }));
        // make request
        const response = yield call(
            getRequest,
            `/artists/${query}`
        );
        yield put(actions.putArtist({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(actions.putArtist({
            ...types.artistResultDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}




/******************************* Watchers *************************************/
export function* getSongSearchWatcher() {
    while (true) {
        const { payload } = yield take(types.GET_SONG_SEARCH);
        yield call(getSongSearchWorker, payload)
    }
}

export function* getSongWatcher() {
    while (true) {
        const { payload } = yield take(types.GET_SONG);
        yield call(getSongWorker, payload)
    }
}

export function* getArtistSearchWatcher() {
    while (true) {
        const { payload } = yield take(types.GET_ARTIST_SEARCH);
        yield call(getArtistSearchWorker, payload)
    }
}

export function* getArtistWatcher() {
    while (true) {
        const { payload } = yield take(types.GET_ARTIST);
        yield call(getArtistWorker, payload)
    }
}




/******************************* Root Saga ************************************/
export default function* rootSaga() {
    yield all([
        fork(getSongSearchWatcher),
        fork(getSongWatcher),
        fork(getArtistWatcher),
        fork(getArtistSearchWatcher)
    ]);
} 
