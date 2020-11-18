import axios from 'axios';

export const getRequest = (endpoint: string, data: string) => {
    return axios.get(`${endpoint}/${data}`, {
        baseURL: process.env.REACT_APP_API_ENDPOINT
    })
    .then(response => response.data)
    .catch(error => error);
};

export const postRequest = (endpoint: string, data: object) => {
    return axios.post(endpoint, data, {
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.data)
    .catch(error => error);
};
