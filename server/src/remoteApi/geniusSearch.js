const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue, geniusHeaders } = require('../utilities');
const { defaultGeniusSearchObject } = require('../../__types__/defaultObjects');

module.exports = async (query) => {
    // abandon if missing parameter
    if (hasMissingValue(query)) return errorHandler('Missing query parameter');

    const endpoint = urljoin(
        process.env.genius_api_endpoint,
        `/search?q=${query}`
    );
    const requestOptions = {
        method: 'GET', 
        headers: geniusHeaders
    };

    return fetch(endpoint, requestOptions)
        .then(response => response.json())

        // transform response
        .then(response => {
            const results = response.response.hits.map(element => {
                return {
                    id: element.result.id,
                    title: element.result.title,
                    type: element.type
                }
            });
            return { ...defaultGeniusSearchObject, results };
        })

        .catch (error => errorHandler('Failed search on Genius API', error));
};
