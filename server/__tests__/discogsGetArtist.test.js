import fetch from 'node-fetch';
import getDiscogsArtist from '../src/remoteApi/discogsGetArtist.js';
import { mockDiscogsArtistObject, mockGetArtistObject } from '../__types__/mockObjects';

describe('getDiscogsArtist', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockDiscogsArtistObject) });
    
    it('should get and transform data', async () => {
        const response = await getDiscogsArtist('test');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toStrictEqual(mockGetArtistObject);
    })

    it('if token missing, it should return an error', async () => {
        const response = await getDiscogsArtist();
        expect(response).toStrictEqual({ 'error': true, 'error_message': 'Missing artist id' });
    })
});
