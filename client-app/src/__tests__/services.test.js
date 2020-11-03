import axios from 'axios';
import { getRequest } from '../utilities/services';
import { mockArtistApiObject } from '../__mocks__/mockObjects';

describe('getRequest', () => {
    it('gets artist data', async () => {
        axios.get.mockResolvedValueOnce({ data: mockArtistApiObject });
        const response = await getRequest('/artists', '278763');
        expect(response).toStrictEqual(mockArtistApiObject);
    });
    it('gets artists data list', async () => {
        axios.get.mockResolvedValueOnce({ data: mockArtistApiObject });
        const response = await getRequest('/artists/search', 'bling');
        expect(response).toStrictEqual(mockArtistApiObject);
    });
});
