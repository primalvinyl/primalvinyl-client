import { take, put, call, fork, all } from 'redux-saga/effects';
import { getRequest } from './services';
import {
    putQuery,
    putSongSearch,
    putArtistSearch,
    putArtist } from './actions';
import * as types from './types';




/******************************** Workers *************************************/
export function* getSongSearchWorker(payload: types.RequestType = types.getRequestDefault) {
    const { query } = payload;
    try {
        yield put(putQuery(query));
        yield put(putSongSearch({ ...types.songSearchResultsDefault, request_status: 'pending' }));
        const response = yield call(
            getRequest,
            `/songs/search/${query}`
        );
        yield put(putSongSearch({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putSongSearch({ ...types.songSearchResultsDefault, request_status: 'resolved', error: true }));
    }
}

export function* getArtistSearchWorker(payload: types.RequestType = types.getRequestPaginationDefault) {
    const { query, page, per_page } = payload;
    try {
        yield put(putQuery(query));
        yield put(putArtistSearch({ ...types.artistSearchResultsDefault, request_status: 'pending' }));
        const response = yield call(
            getRequest, 
            `/artists/search/${query}?page=${page}&per_page=${per_page}`
        );
        yield put(putArtistSearch({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtistSearch({ ...types.artistSearchResultsDefault, request_status: 'resolved', error: true }));
    }
}

export function* getArtistWorker(payload: types.RequestType = types.getRequestPaginationDefault) {
    const { query } = payload;
    try {
        yield put(putQuery(query));
        yield put(putArtist({ ...types.artistResultDefault, request_status: 'pending' }));
        const response = yield call(
            getRequest,
            `/artists/${query}`
        );
        yield put(putArtist({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putArtist({ ...types.artistResultDefault, request_status: 'resolved', error: true }));
    }
}




/******************************* Watchers *************************************/
export function* getSongSearchWatcher() {
    while (true) {
        const { payload } = yield take(types.GET_SONG_SEARCH);
        yield call(getSongSearchWorker, payload)
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
        fork(getArtistWatcher),
        fork(getArtistSearchWatcher)
    ]);
} 
