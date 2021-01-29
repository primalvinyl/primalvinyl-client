const cheerio = require('cheerio');
const { errorHandler } = require('../utilities');

module.exports = webpage => {
    const $ = cheerio.load(webpage, null, false);
    const lyrics = $('.lyrics')
        .text()
        .trim()
        .replace(/\t/g, '');
    if (lyrics) return { lyrics: lyrics };
    return errorHandler('Failed to transpile lyrics');
};
