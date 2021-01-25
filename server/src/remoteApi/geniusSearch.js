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
            const transformedResults = response.response.hits.map(element => {
                const { result } = element;
                const { primary_artist } = result;
                return {
                    id: result.id,
                    song_title: result.title,
                    song_thumbnail_url: result.song_art_image_thumbnail_url,
                    song_image_url: result.song_art_image_url,
                    artist_name: primary_artist.name,
                    artist_image_url: primary_artist.image_url,
                };
            });
            return { ...defaultGeniusSearchObject, results: transformedResults };
        })

        .catch (error => errorHandler('Failed search on Genius API', error));
};
