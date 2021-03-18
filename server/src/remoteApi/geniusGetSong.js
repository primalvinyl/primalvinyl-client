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



const getWebPage = path => {
    return fetch(path)
        .then(response => response.text())
        .then(response => response);
        // let route handle error and server response
};



module.exports = async (id) => {
    // abandon if missing parameter
    if (hasMissingValue(id)) return errorHandler('Missing song id');

    // get song data
    const songResult = await getSongData(id);
    const { response: { song } } = songResult; 
    const { primary_artist, writer_artists, album } = song;

    // get writers
    const song_writers = writer_artists.map(el => el.name);

    const transformedSongResult = {
        id: song.id,
        song_title: song.title,
        song_writers: song_writers,
        song_release_date: song.release_date_for_display,
        song_thumbnail_url: song.song_art_image_thumbnail_url,
        song_image_url: song.song_art_image_url,
        artist_name: primary_artist.name,
        artist_image_url: primary_artist.image_url,
        album_name: album.name,
        album_image_url: album.cover_art_url
    };

    // get song lyrics 
    const lyricsResult = await getWebPage(urljoin(process.env.genius_endpoint, song.path));
    const lyricsNode = cheerio.load(lyricsResult, null, false);
    const songLyrics = lyricsNode('.lyrics')
        .html()
        .replace(/\n/g, ' ')
        .replace(/(\t)|(<a\b[^>]*>)|(<\/a>)|(<!--\b[^>]*-->)|(<!--\/\b[^>]*-->)|(\[.*?\]<br>)/g, '');

    // get spotify track id
    let spotify_id = '';
    const spotifyObject = song.media.find(el => el.provider === 'spotify');
    if (spotifyObject && spotifyObject.url && spotifyObject.url.length > 0) {
        const { url } = spotifyObject;
        spotify_id = url.slice(url.lastIndexOf('/') + 1);
    }

    // get soundcloud track id
    let soundcloud_id = '';
    const soundcloudObject = song.media.find(el => el.provider === 'soundcloud');
    if (soundcloudObject && soundcloudObject.url && soundcloudObject.url.length > 0) {
        const soundCloudResult = await getWebPage(soundcloudObject.url);
        const soundCloudNode = cheerio.load(soundCloudResult, null, false);
        const soundCloudMeta = soundCloudNode('meta[property="twitter:app:url:iphone"]')
            .attr('content');
        soundcloud_id = soundCloudMeta.slice(soundCloudMeta.lastIndexOf(':') + 1);
    }

    // return data
    return {
        ...defaultSongObject,
        ...transformedSongResult,
        lyrics: songLyrics,
        media_spotify_track_id: spotify_id,
        media_soundcloud_track_id: soundcloud_id
    };
};
