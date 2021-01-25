import { take, put, call, fork, all } from 'redux-saga/effects';
import { getRequest } from './services';
import {
    putQuery,
    putLyricsSearch,
    putArtistSearch,
    putArtist } from './actions';
import * as types from './types';




/******************************** Workers *************************************/
export function* getLyricsSearchWorker(payload: types.RequestType = types.getRequestDefault) {
    const { query } = payload;
    try {
        yield put(putQuery(query));
        yield put(putLyricsSearch({ ...types.lyricsSearchResultsDefault, request_status: 'pending' }));
        const response = yield call(
            getRequest,
            `/search/${query}`
        );
        yield put(putLyricsSearch({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putLyricsSearch({ ...types.lyricsSearchResultsDefault, request_status: 'resolved', error: true }));
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
export function* getLyricsSearchWatcher() {
    while (true) {
        const { payload } = yield take(types.GET_LYRICS_SEARCH);
        yield call(getLyricsSearchWorker, payload)
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
        fork(getLyricsSearchWatcher),
        fork(getArtistWatcher),
        fork(getArtistSearchWatcher)
    ]);
} 
