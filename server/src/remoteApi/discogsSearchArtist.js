const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue, discogsHeaders } = require('../utilities');
const { defaultArtistsObject } = require('../../__types__/defaultObjects');

module.exports = async (artist, page = 1) => {
    // abandon if missing parameter
    if (hasMissingValue(artist)) return errorHandler('Missing artist name');

    const endpoint = urljoin(
        process.env.api_endpoint,
        `database/search?q=${artist}&type=artist&page=${page}&per_page=25`
    );
    const requestOptions = {
        method: 'GET', 
        headers: discogsHeaders
    };

    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        // transform response
        .then(response => {

            let pagination = (({
                    page,
                    pages,
                    per_page,
                    items
                }) => ({ 
                    page,
                    pages,
                    per_page,
                    items
            }))(response.pagination);

            //client app is zero indexed. API is 1 indexed.
            --pagination.page;

            const results = response.results.map(element => {
                return (({
                    id,
                    title: name,
                    thumb: thumbnail_url,
                    cover_image: image_url
                }) => ({ 
                    id,
                    name,
                    thumbnail_url,
                    image_url
                }))(element);
            });
            return { ...defaultArtistsObject, pagination, results };
        })
        .catch (error => errorHandler('Failed search for artist on Discogs API', error));
};
