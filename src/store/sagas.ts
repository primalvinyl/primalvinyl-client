import { take, put, call, fork, all } from 'redux-saga/effects';
import { getRequest } from './services';
import * as actions from './actions';
import * as types from './types';
import * as reducers from './reducers';




/******************************** Workers *************************************/
export function* getSongSearchWorker(payload: types.RequestType = types.getRequestDefault): any {
    const { query } = payload;
    try {
        yield put(reducers.query.actions.putQuery(query));
        // start request
        yield put(reducers.songSearch.actions.putSongs({
            ...types.songSearchResultsDefault,
            request_status: 'pending'
        }));
        // make request
        const response = yield call(
            getRequest,
            `/songs/search/${query}`
        );
        // resolve request
        yield put(reducers.songSearch.actions.putSongs({
            ...response,
            request_status: 'resolved'
        }));
    } catch (error) {
        yield put(reducers.songSearch.actions.putSongs({
            ...types.songSearchResultsDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}

export function* getSongWorker(payload: types.RequestType = types.getRequestDefault): any {
    const { query } = payload;
    try {
        // start request
        yield put(reducers.song.actions.putSong({
            ...types.songResultDefault,
            request_status: 'pending'
        }));
        // make request
        const response = yield call(
            getRequest,
            `/songs/${query}`
        );
        // resolve request
        yield put(reducers.song.actions.putSong({
            ...response,
            request_status: 'resolved'
        }));
    } catch (error) {
        yield put(reducers.song.actions.putSong({
            ...types.songResultDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}

export function* getArtistSearchWorker(
    payload: types.RequestType = types.getRequestPaginationDefault
): any {
    const { query, page, per_page } = payload;
    try {
        yield put(reducers.query.actions.putQuery(query));
        // start request
        yield put(reducers.artistSearch.actions.putArtists({
            ...types.artistSearchResultsDefault,
            request_status: 'pending'
        }));
        // make request
        const response = yield call(
            getRequest, 
            `/artists/search/${query}?page=${page}&per_page=${per_page}`
        );
        // resolve request
        yield put(reducers.artistSearch.actions.putArtists({
            ...response,
            request_status: 'resolved'
        }));
    } catch (error) {
        yield put(reducers.artistSearch.actions.putArtists({
            ...types.artistSearchResultsDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}

export function* getArtistWorker(payload: types.RequestType = types.getRequestDefault): any {
    const { query } = payload;
    try {
        yield put(reducers.query.actions.putQuery(query));
        // start request
        yield put(reducers.artist.actions.putArtist({
            ...types.artistResultDefault,
            request_status: 'pending'
        }));
        // make request
        const response = yield call(
            getRequest,
            `/artists/${query}`
        );
        // resolve request
        yield put(reducers.artist.actions.putArtist({
            ...response,
            request_status: 'resolved'
        }));
    } catch (error) {
        yield put(reducers.artist.actions.putArtist({
            ...types.artistResultDefault,
            request_status: 'resolved',
            error: true
        }));
    }
}




/******************************* Watchers *************************************/
export function* getSongSearchWatcher() {
    while (true) {
        const { payload } = yield take(actions.getSongSearch.toString());
        yield call(getSongSearchWorker, payload)
    }
}

export function* getSongWatcher() {
    while (true) {
        const { payload } = yield take(actions.getSong.toString());
        yield call(getSongWorker, payload)
    }
}

export function* getArtistSearchWatcher() {
    while (true) {
        const { payload } = yield take(actions.getArtistSearch.toString());
        yield call(getArtistSearchWorker, payload)
    }
}

export function* getArtistWatcher() {
    while (true) {
        const { payload } = yield take(actions.getArtist.toString());
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
