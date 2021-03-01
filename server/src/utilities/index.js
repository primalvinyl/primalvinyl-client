// add environment variables in development and test environments
if (process.env.node_env !== 'production') {
    require('dotenv').config();
}



// Genius API headers
exports.geniusHeaders = {
    'x-rapidapi-key': process.env.genius_api_key,
    'x-rapidapi-host': process.env.genius_api_host,
    'useQueryString': true
};




// Discogs API headers
exports.discogsHeaders = {
    'User-Agent': process.env.application_name,
    'Accept': process.env.discogs_api_version,
    'Authorization': `Discogs key=${process.env.discogs_api_consumer_key}, secret=${process.env.discogs_api_consumer_secret}`
};




// Handles API errors
exports.errorHandler = (message = '', error = {}) => {
    if (process.env.node_env === 'developement') {
        console.error('primal vinyl error', message, error);
    }
    return {
        error_message: message,
        error: true
    };
};




/**
 * Tests if all properties in an object have a value
 * Shallow test, does not test for empty sub properties
 * @param {object} obj The object to test
 * @returns {boolean} pass or fail
 */
exports.hasMissingValues = obj => {
    for(let prop in obj){
        if (
            obj[prop] === undefined ||
            obj[prop] === null ||
            obj[prop] === ''
        ) return true;
    };
    return false;
};




/**
 * Tests if a variable has a valid value
 * @param {string} string The variable to test
 * @returns {boolean} pass or fail
 */
exports.hasMissingValue = prop => (prop === undefined || prop === null || prop === '');
