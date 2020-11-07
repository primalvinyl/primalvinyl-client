import axios from 'axios';

export const getRequest = (endpoint, data) => {
    return axios.get(`${endpoint}/${data}`, {
        baseURL: process.env.REACT_APP_API_ENDPOINT
    })
    .then(response => response.data)
    .catch(error => error);
};

export const postRequest = (endpoint, data) => {
    return axios.post(endpoint, data, {
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.data)
    .catch(error => error);
};
