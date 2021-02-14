const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const cheerio = require('cheerio');
const { errorHandler, hasMissingValue, geniusHeaders } = require('../utilities');
const { defaultSongObject } = require('../../__types__/defaultObjects');



const getSongData = id => {
    return fetch(
        urljoin(process.env.genius_api_endpoint, `/songs/${id}`), 
        { method: 'GET', headers: geniusHeaders }
    )
        .then(response => response.json())
        .then(response => response);
        // let route handle error and server response
};



const getSongLyrics = path => {
    return fetch(urljoin(process.env.genius_endpoint, path))
        .then(response => response.text())
        .then(response => response);
        // let route handle error and server response
};



module.exports = async (id) => {
    // abandon if missing parameter
    if (hasMissingValue(id)) return errorHandler('Missing song id');

    // get and transform song data
    const songResult = await getSongData(id);
    const { response: { song } } = songResult; 
    const { primary_artist, writer_artists, album } = song;
    const song_writers = writer_artists.map(el => el.name);
    const lyricsPath = song.path;
    const transformedSongResult = {
        id: song.id,
        song_title: song.title,
        song_writers: song_writers,
        song_thumbnail_url: song.song_art_image_thumbnail_url,
        song_image_url: song.song_art_image_url,
        artist_name: primary_artist.name,
        artist_image_url: primary_artist.image_url,
        album_name: album.name,
        album_image_url: album.cover_art_url,
    };

    // get and transform song lyrics 
    const lyricsResult = await getSongLyrics(lyricsPath);
    const $ = cheerio.load(lyricsResult, null, false);
    const lyrics = $('.lyrics')
        .html()
        .replace(/\n/g, ' ')
        .replace(/(\t)|(<a\b[^>]*>)|(<\/a>)|(<!--\b[^>]*-->)|(<!--\/\b[^>]*-->)|(\[.*?\]<br>)/g, '');
    const transformedLyricsResult = { lyrics: lyrics };

    // return data
    return {
        ...defaultSongObject,
        ...transformedSongResult,
        ...transformedLyricsResult
    };
};
