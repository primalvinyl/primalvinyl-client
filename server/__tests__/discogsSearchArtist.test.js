import fetch from 'node-fetch';
import searchArtist from '../src/remoteApi/discogsSearchArtist.js';
import { mockDiscogsArtistSearchObject, mockArtistSearchObject } from '../__types__/mockObjects';

describe('searchArtist', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockDiscogsArtistSearchObject) });
    
    it('should get and transform data', async () => {
        const response = await searchArtist('dingo');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toStrictEqual(mockArtistSearchObject);
    })

    it('if token missing, it should return an error', async () => {
        const response = await searchArtist();
        expect(response).toStrictEqual({ 'error': true, 'error_message': 'Missing artist name' });
    })
}); 
