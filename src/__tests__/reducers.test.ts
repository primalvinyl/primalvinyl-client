import {
    query,
    songSearchResults,
    artistSearchResults,
    artist
} from '../store/reducers';
import {
    putQuery,
    putSongSearch,
    putArtistSearch,
    putArtist,
    clearQuery,
    clearSongSearch,
    clearArtistSearch,
    clearArtist
} from '../store/actions';
import {
    songSearchResultsDefault,
    artistResultDefault,
    artistSearchResultsDefault
} from '../store/types';


    
describe('query', () => {
    it('should put default state if no payload', () => {
        const response = query(undefined, putQuery());
        expect(response).toEqual('');
    })
    it('should put a new query', () => {
        const response = query(undefined, putQuery('test'));
        expect(response).toEqual('test');
    });
    it('should put default state when cleared', () => {
        const response = query(undefined, clearQuery());
        expect(response).toEqual('');
    }); 
});



describe('lyrics search', () => {
    it('should put default state if no payload', () => {
        const response = songSearchResults(undefined, putSongSearch());
        expect(response).toEqual(songSearchResultsDefault);
    })
    it('should put a new lyrics search list', () => {
        const response = songSearchResults(undefined, putSongSearch(songSearchResultsDefault));
        expect(response).toEqual(songSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = songSearchResults(undefined, clearSongSearch());
        expect(response).toEqual(songSearchResultsDefault);
    }); 
});



describe('artist search', () => {
    it('should put default state if no payload', () => {
        const response = artistSearchResults(undefined, putArtistSearch());
        expect(response).toEqual(artistSearchResultsDefault);
    })
    it('should put new artist search list', () => {
        const response = artistSearchResults(undefined, putArtistSearch(artistSearchResultsDefault));
        expect(response).toEqual(artistSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = artistSearchResults(undefined, clearArtistSearch());
        expect(response).toEqual(artistSearchResultsDefault);
    }); 
});



describe('artist', () => {
    it('should put default state if no payload', () => {
        const response = artist(undefined, putArtist());
        expect(response).toEqual(artistResultDefault);
    })
    it('should put a new artist', () => {
        const response = artist(undefined, putArtist(artistResultDefault));
        expect(response).toEqual(artistResultDefault);
    });
    it('should put default state when cleared', () => {
        const response = artist(undefined, clearArtist());
        expect(response).toEqual(artistResultDefault);
    });
});
