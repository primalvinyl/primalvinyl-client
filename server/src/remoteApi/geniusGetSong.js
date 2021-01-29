const fetch = require('node-fetch').default;
const urljoin = require('url-join');
const { errorHandler, hasMissingValue, geniusHeaders } = require('../utilities');
const lyricsScrape = require('../logic/lyricsScrape');
const { defaultSongObject } = require('../../__types__/defaultObjects');

const getSongData = id => {
    const endpoint = urljoin(
        process.env.genius_api_endpoint,
        `/songs/${id}`
    );
    const requestOptions = {
        method: 'GET', 
        headers: geniusHeaders
    };
    return fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(response => response)
        .catch (error => errorHandler('Failed to get song from Genius API', error));
};

const getSongLyrics = path => {
    const endpoint = urljoin(
        process.env.genius_endpoint,
        path
    );
    return fetch(endpoint)
        .then(response => response.text())
        .then(response => response)
        .catch (error => errorHandler('Failed to get lyrics from Genius', error));
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
    const transformedLyricsResult = lyricsScrape(lyricsResult);

    // return data
    return {
        ...defaultSongObject,
        ...transformedSongResult,
        ...transformedLyricsResult
    };
};
