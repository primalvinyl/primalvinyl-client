import fetch from 'node-fetch';
import getArtist from '../src/remoteApi/discogsGetArtist.js';
import { mockDiscogsArtistObject, mockArtistObject } from '../__types__/mockObjects';

describe('getArtist', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockDiscogsArtistObject) });
    
    it('should get and transform data', async () => {
        const response = await getArtist('test');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toStrictEqual(mockArtistObject);
    })

    it('if token missing, it should return an error', async () => {
        const response = await getArtist();
        expect(response).toStrictEqual({ 'error': true, 'error_message': 'Missing artist id' });
    })
});
