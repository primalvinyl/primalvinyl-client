import axios from 'axios';
import { getRequest } from '../utilities/services';
import { mockApiArtistObject } from '../__mocks__/mockObjects';

describe('getRequest', () => {
    it('gets artist data', async () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistObject });
        const response = await getRequest('/artists', '278763');
        expect(response).toStrictEqual(mockApiArtistObject);
    });
    it('gets artists data list', async () => {
        axios.get.mockResolvedValueOnce({ data: mockApiArtistObject });
        const response = await getRequest('/artists/search', 'bling');
        expect(response).toStrictEqual(mockApiArtistObject);
    });
});
