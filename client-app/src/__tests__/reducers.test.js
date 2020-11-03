import { artist } from '../reducers';
import { putArtist, artistDefault } from '../actions';

describe('artist', () => {
    it('should return the initial state', () => {
        const actualResult = artist(undefined, putArtist());
        expect(actualResult).toEqual(artistDefault);
    })
    it('should put a new artist', () => {
        const actualResult = artist(undefined, putArtist(artistDefault));
        expect(actualResult).toEqual(artistDefault);
    });
});
