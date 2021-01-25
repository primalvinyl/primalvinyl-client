import {
    query,
    lyricsSearchResults,
    artistSearchResults,
    artist
} from '../store/reducers';
import {
    putQuery,
    putLyricsSearch,
    putArtistSearch,
    putArtist,
    clearQuery,
    clearLyricsSearch,
    clearArtistSearch,
    clearArtist
} from '../store/actions';
import {
    lyricsSearchResultsDefault,
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
        const response = lyricsSearchResults(undefined, putLyricsSearch());
        expect(response).toEqual(lyricsSearchResultsDefault);
    })
    it('should put a new lyrics search list', () => {
        const response = lyricsSearchResults(undefined, putLyricsSearch(lyricsSearchResultsDefault));
        expect(response).toEqual(lyricsSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = lyricsSearchResults(undefined, clearLyricsSearch());
        expect(response).toEqual(lyricsSearchResultsDefault);
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
