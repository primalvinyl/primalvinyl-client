import { query, search, artist, artists } from '../store/reducers';
import {
    putQuery,
    putLyricsSearch,
    putArtist,
    putArtistSearch } from '../store/actions';
import {
    lyricsSearchDefault,
    artistDefault,
    artistSearchDefault } from '../__types__';


    
describe('query', () => {
    it('should return the initial state', () => {
        const response = query(undefined, putQuery());
        expect(response).toEqual('');
    })
    it('should put a new query', () => {
        const response = query(undefined, putQuery('test'));
        expect(response).toEqual('test');
    });
});



describe('genius search', () => {
    it('should return the initial state', () => {
        const response = search(undefined, putLyricsSearch());
        expect(response).toEqual(lyricsSearchDefault);
    })
    it('should put a new artist', () => {
        const response = search(undefined, putLyricsSearch(lyricsSearchDefault));
        expect(response).toEqual(lyricsSearchDefault);
    });
});



describe('discogs artist', () => {
    it('should return the initial state', () => {
        const response = artist(undefined, putArtist());
        expect(response).toEqual(artistDefault);
    })
    it('should put a new artist', () => {
        const response = artist(undefined, putArtist(artistDefault));
        expect(response).toEqual(artistDefault);
    });
});



describe('discogs artists search', () => {
    it('should return the initial state', () => {
        const response = artists(undefined, putArtistSearch());
        expect(response).toEqual(artistSearchDefault);
    })
    it('should put new artists list', () => {
        const response = artists(undefined, putArtistSearch(artistSearchDefault));
        expect(response).toEqual(artistSearchDefault);
    });
});
