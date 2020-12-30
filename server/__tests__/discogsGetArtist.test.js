import fetch from 'node-fetch';
import getArtist from '../src/remoteApi/discogsGetArtist.js';
import { mockGetArtistApiObject, mockGetArtistObject } from '../__types__/mockObjects';

describe('getArtist', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockGetArtistApiObject) });
    
    it('should get and transform data', async () => {
        const response = await getArtist('dingo');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toStrictEqual(mockGetArtistObject);
    })

    it('if token missing, it should return an error', async () => {
        const response = await getArtist();
        expect(response).toStrictEqual({ 'error': true, 'error_message': 'Missing artist id' });
    })
}); 
