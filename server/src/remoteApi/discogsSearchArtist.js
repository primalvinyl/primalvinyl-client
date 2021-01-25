const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue, discogsHeaders } = require('../utilities');
const { defaultDiscogsArtistSearchObject } = require('../../__types__/defaultObjects');

module.exports = async (artist, page = 1) => {
    // abandon if missing parameter
    if (hasMissingValue(artist)) return errorHandler('Missing artist name');

    const endpoint = urljoin(
        process.env.discogs_api_endpoint,
        `database/search?q=${artist}&type=artist&page=${page}&per_page=25`
    );
    const requestOptions = {
        method: 'GET', 
        headers: discogsHeaders
    };

    return fetch(endpoint, requestOptions)
        .then(response => response.json())

        .then(response => {

            // transform pagination
            const { pagination } = response;
            const transformedPagination = {
                page: pagination.page,
                pages: pagination.pages,
                per_page: pagination.per_page,
                items: pagination.items
            }
            // client pagination is zero indexed. API is 1 indexed.
            --transformedPagination.page;

            // transform results
            const transformedResults = response.results.map(element => {
                return {
                    id: element.id,
                    name: element.title,
                    thumbnail_url: element.thumb,
                    image_url: element.cover_image
                };
            });

            return {
                ...defaultDiscogsArtistSearchObject,
                pagination: transformedPagination,
                results: transformedResults
            };
        })

        .catch (error => errorHandler('Failed search for artist on Discogs API', error));
};
