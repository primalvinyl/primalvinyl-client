import axios from 'axios';

export const getRequest = (endpoint: string) => {
    return axios.get(endpoint, {
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        // prevents axios from throwing an exception on 404
        validateStatus: () => true
    })
    .then(response => response.data)
    .catch(() => {});
};
