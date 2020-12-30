import fetch from 'node-fetch';
import getCaptcha from '../src/remoteApi/getCaptcha.js';

describe('getCaptcha', () => {
    it('if google score passes, it should be true', async () => {
        fetch.mockResolvedValueOnce({ json: () => Promise.resolve({ 'success': true, 'score': 1 }) });
        const response = await getCaptcha('123');
        expect(response).toBe(true);
    })

    it('if google score does not pass, it should be false', async () => {
        fetch.mockResolvedValueOnce({ json: () => Promise.resolve({ 'success': true, 'score': 0.1 }) });
        const response = await getCaptcha('123');
        expect(response).toBe(false);
    })

    it('if token missing, it should be false', async () => {
        const response = await getCaptcha();
        expect(response).toBe(false);
    })
});
