import fetch from 'node-fetch';
import search from '../src/remoteApi/geniusSearchSong.js';
import { mockGeniusSearchObject, mockSongSearchObject } from '../__types__/mockObjects';

describe('search', () => {
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockGeniusSearchObject) });
    
    it('should get and transform data', async () => {
        const response = await search('test');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toStrictEqual(mockSongSearchObject);
    })

    it('if token missing, it should return an error', async () => {
        const response = await search();
        expect(response).toStrictEqual({ 'error': true, 'error_message': 'Missing query parameter' });
    })
});
