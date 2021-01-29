import fetch from 'node-fetch';
import getSong from '../src/remoteApi/geniusGetSong.js';
import { mockGeniusSongObject, mockSongObject } from '../__types__/mockObjects';

describe('getArtist', () => {
    it('should get and transform data', async () => {
        fetch
            .mockResolvedValueOnce({ json: () => Promise.resolve(mockGeniusSongObject) })
            .mockResolvedValueOnce({ text: () => Promise.resolve('<p class="lyrics">test<p>')});
        const response = await getSong('test');
        expect(fetch).toHaveBeenCalledTimes(2);
        expect(response).toStrictEqual(mockSongObject);
    })

    it('if token missing, it should return an error', async () => {
        const response = await getSong();
        expect(response).toStrictEqual({ 'error': true, 'error_message': 'Missing song id' });
    })
});
