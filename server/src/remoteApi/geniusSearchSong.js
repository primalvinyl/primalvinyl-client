const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue, geniusHeaders } = require('../utilities');
const { defaultSongSearchObject } = require('../../__types__/defaultObjects');

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
        .then(response => {
            const { hits } = response.response;

            // the api returns a 200 success and empty set if nothing is found
            if (hits.length < 1) throw new Error();

            // transform response
            const transformedResults = hits.map(element => {
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

            return { ...defaultSongSearchObject, results: transformedResults };
        });
        // let route handle error and server response
};
