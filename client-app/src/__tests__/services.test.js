import axios from 'axios';
import { discogsGetRequest } from '../utilities/services';
import { mockArtistApiObject } from '../__mocks__/mockObjects';

describe('discogsGetRequest', () => {
    it('gets data', async () => {
        axios.get.mockResolvedValueOnce({ data: mockArtistApiObject });
        const result = await discogsGetRequest({});
        expect(result).toStrictEqual(mockArtistApiObject);
    });
});
