import axios from 'axios';
import { getRequest } from '../store/services';
import { mockApiArtistResults } from '../__mocks__/mockObjects';

describe('getRequest', () => {
    it('gets artist data', async () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistResults });
        const response = await getRequest('/artists', '278763');
        expect(response).toStrictEqual(mockApiArtistResults);
    });
    it('gets artists data list', async () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistResults });
        const response = await getRequest('/artists/search', 'bling');
        expect(response).toStrictEqual(mockApiArtistResults);
    });
});
