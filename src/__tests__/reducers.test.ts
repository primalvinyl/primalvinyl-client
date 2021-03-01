import * as reducers from '../store/reducers';
import * as actions from '../store/actions';
import * as types from '../store/types';


    
describe('query', () => {
    it('should put default state if no payload', () => {
        const response = reducers.query(undefined, actions.putQuery());
        expect(response).toEqual('');
    })
    it('should put a new query', () => {
        const response = reducers.query(undefined, actions.putQuery('test'));
        expect(response).toEqual('test');
    });
    it('should put default state when cleared', () => {
        const response = reducers.query(undefined, actions.clearQuery());
        expect(response).toEqual('');
    }); 
});



describe('song search', () => {
    it('should put default state if no payload', () => {
        const response = reducers.songSearchResults(undefined, actions.putSongSearch());
        expect(response).toEqual(types.songSearchResultsDefault);
    })
    it('should put a new song search list', () => {
        const response = reducers.songSearchResults(undefined, actions.putSongSearch(types.songSearchResultsDefault));
        expect(response).toEqual(types.songSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.songSearchResults(undefined, actions.clearSongSearch());
        expect(response).toEqual(types.songSearchResultsDefault);
    }); 
});



describe('song', () => {
    it('should put default state if no payload', () => {
        const response = reducers.song(undefined, actions.putSong());
        expect(response).toEqual(types.songResultDefault);
    })
    it('should put a new song', () => {
        const response = reducers.song(undefined, actions.putSong(types.songResultDefault));
        expect(response).toEqual(types.songResultDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.song(undefined, actions.clearSong());
        expect(response).toEqual(types.songResultDefault);
    });
});



describe('artist search', () => {
    it('should put default state if no payload', () => {
        const response = reducers.artistSearchResults(undefined, actions.putArtistSearch());
        expect(response).toEqual(types.artistSearchResultsDefault);
    })
    it('should put new artist search list', () => {
        const response = reducers.artistSearchResults(undefined, actions.putArtistSearch(types.artistSearchResultsDefault));
        expect(response).toEqual(types.artistSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.artistSearchResults(undefined, actions.clearArtistSearch());
        expect(response).toEqual(types.artistSearchResultsDefault);
    }); 
});



describe('artist', () => {
    it('should put default state if no payload', () => {
        const response = reducers.artist(undefined, actions.putArtist());
        expect(response).toEqual(types.artistResultDefault);
    })
    it('should put a new artist', () => {
        const response = reducers.artist(undefined, actions.putArtist(types.artistResultDefault));
        expect(response).toEqual(types.artistResultDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.artist(undefined, actions.clearArtist());
        expect(response).toEqual(types.artistResultDefault);
    });
});
