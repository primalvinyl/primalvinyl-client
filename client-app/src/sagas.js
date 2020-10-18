import { take, put, call, fork, all } from 'redux-saga/effects';
import { actionTypes, putUser, putUsers } from './actions';
import { apiMethod } from './utilities';

/******************************** Workers *************************************/
export function* getUserWorker(id) {
    try {
        yield put(putUser({ request_status: 'pending' }));
        const response = yield call(apiMethod, 'user', id);
        yield put(putUser({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putUser({ request_status: 'resolved', error: true }));
    }
}

export function* saveUserWorker(user) {
    try {
        const data = JSON.stringify(user);
        yield put(putUser({ request_status: 'pending' }));
        yield call(apiMethod, 'user', data);
        yield put(putUser({ ...user, request_status: 'resolved' }));
    } catch (error) {
        yield put(putUser({ error: true, request_status: 'resolved' }));
    }
}

export function* getUsersWorker(name) {
    try {
        yield put(putUsers({ request_status: 'pending' }));
        const response = yield call(apiMethod, 'users', name);
        yield put(putUsers({ ...response, request_status: 'resolved' }));
    } catch (error) {
        yield put(putUsers({ error: true, request_status: 'resolved' }));
    }
}

/******************************* Watchers *************************************/
export function* getUserWatcher() {
    while (true) {
        const { id } = yield take(actionTypes.GET_USER);
        yield call(getUserWorker, id)
    }
}

export function* saveUserWatcher() {
    while (true) {
        const { user } = yield take(actionTypes.SAVE_USER);
        yield call(saveUserWorker, user)
    }
}

export function* getUsersWatcher() {
    while (true) {
        const { name } = yield take(actionTypes.GET_USERS);
        yield call(getUsersWorker, name)
    }
}

/******************************* Root Saga ************************************/
export default function* rootSaga() {
    yield all([
        fork(getUserWatcher),
        fork(saveUserWatcher),
        fork(getUsersWatcher)
    ]);
} 
