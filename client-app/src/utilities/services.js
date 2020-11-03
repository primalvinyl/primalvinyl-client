import axios from 'axios';

export const discogsGetRequest = (endpoint, data) => {
    return axios.get(`${endpoint}/${data}`, {
        baseURL: process.env.REACT_APP_DISCOGS_ENDPOINT
    })
    .then(response => response.data)
    .catch(error => error);
};

export const discogsPostRequest = (endpoint, data) => {
    return axios.post(endpoint, data, {
        baseURL: process.env.REACT_APP_DISCOGS_ENDPOINT,
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.data)
    .catch(error => error);
};
