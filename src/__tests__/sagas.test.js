import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';
import {
    getArtist,
    getArtists,
    putArtist,
    putArtists } from '../actions';
import {
    artist,
    artists } from '../reducers';
import {
    getArtistWatcher,
    getArtistWorker,
    getArtistsWatcher,
    getArtistsWorker } from '../sagas';
import {
    mockArtistApiObject,
    mockArtistReduxObject,
    mockArtistsApiObject,
    mockArtistsReduxObject } from '../__mocks__/mockObjects';

describe('getArtist', () => {
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

describe('getArtists', () => {
    it('listens for action and gets and puts data', () => {
        axios.get.mockResolvedValueOnce({ data: mockArtistsApiObject });
        expectSaga(getArtistsWatcher)
            .dispatch(getArtists())
            .call(getArtistsWorker)
            .put(putArtists(mockArtistsReduxObject))
            .withReducer(artists)
            .hasFinalState(mockArtistsReduxObject)
            .run();
    });
});
