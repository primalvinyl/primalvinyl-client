import * as reducers from '../store/reducers';
import * as types from '../store/types';


    
describe('query', () => {
    it('should put a new query', () => {
        const response = reducers.query.reducer(undefined, reducers.query.actions.putQuery('test'));
        expect(response).toEqual('test');
    });
    it('should put default state when cleared', () => {
        const response = reducers.query.reducer(undefined, reducers.query.actions.clearQuery());
        expect(response).toEqual('');
    }); 
});



describe('song search', () => {
    it('should put a new song search list', () => {
        const response = reducers.songSearch.reducer(undefined, reducers.songSearch.actions.putSongs(types.songSearchResultsDefault));
        expect(response).toEqual(types.songSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.songSearch.reducer(undefined, reducers.songSearch.actions.clearSongs());
        expect(response).toEqual(types.songSearchResultsDefault);
    }); 
});



describe('song', () => {
    it('should put a new song', () => {
        const response = reducers.song.reducer(undefined, reducers.song.actions.putSong(types.songResultDefault));
        expect(response).toEqual(types.songResultDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.song.reducer(undefined, reducers.song.actions.clearSong());
        expect(response).toEqual(types.songResultDefault);
    });
});



describe('artist search', () => {
    it('should put new artist search list', () => {
        const response = reducers.artistSearch.reducer(undefined, reducers.artistSearch.actions.putArtists(types.artistSearchResultsDefault));
        expect(response).toEqual(types.artistSearchResultsDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.artistSearch.reducer(undefined, reducers.artistSearch.actions.clearArtists());
        expect(response).toEqual(types.artistSearchResultsDefault);
    }); 
});



describe('artist', () => {
    it('should put a new artist', () => {
        const response = reducers.artist.reducer(undefined, reducers.artist.actions.putArtist(types.artistResultDefault));
        expect(response).toEqual(types.artistResultDefault);
    });
    it('should put default state when cleared', () => {
        const response = reducers.artist.reducer(undefined, reducers.artist.actions.clearArtist());
        expect(response).toEqual(types.artistResultDefault);
    });
});
