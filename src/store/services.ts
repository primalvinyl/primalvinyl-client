import axios from 'axios';

export const getRequest = (endpoint: string) => {
    return axios.get(endpoint, {
        baseURL: process.env.REACT_APP_API_ENDPOINT
    })
    .then(response => response.data)
    .catch(error => error);
};
