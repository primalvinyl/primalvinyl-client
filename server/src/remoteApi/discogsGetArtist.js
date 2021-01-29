const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue, discogsHeaders } = require('../utilities');
const { defaultArtistObject } = require('../../__types__/defaultObjects');

module.exports = async id => {
    // abandon if missing parameter
    if (hasMissingValue(id)) return errorHandler('Missing artist id');
    const endpoint = urljoin(
        process.env.discogs_api_endpoint,
        `artists/${id}`
    );
    const requestOptions = {
        method: 'GET', 
        headers: discogsHeaders
    };
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        // transform response
        .then(response => {
            const { name, realname, images, profile } = response;
            //get image url
            let image_url = '';
            if(Array.isArray(images) && images[0].hasOwnProperty('resource_url')){
                image_url = images[0].resource_url;
            }
            return { ...defaultArtistObject, name, realname, image_url, profile };
        })
        .catch (error => errorHandler('Failed getting artist details from Discogs API', error));
};
