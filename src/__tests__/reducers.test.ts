import { artist, artists } from '../reducers';
import { putArtist, putArtists } from '../actions';
import { artistDefault, artistsDefault } from '../__types__';

describe('artist', () => {
    it('should return the initial state', () => {
        const response = artist(undefined, putArtist());
        expect(response).toEqual(artistDefault);
    })
    it('should put a new artist', () => {
        const response = artist(undefined, putArtist(artistDefault));
        expect(response).toEqual(artistDefault);
    });
});

describe('artists', () => {
    it('should return the initial state', () => {
        const response = artists(undefined, putArtists());
        expect(response).toEqual(artistsDefault);
    })
    it('should put new artists list', () => {
        const response = artists(undefined, putArtists(artistsDefault));
        expect(response).toEqual(artistsDefault);
    });
});
