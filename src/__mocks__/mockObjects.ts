/* ********************************** Mock REDUX Objects ************************************ */
// mock redux song search object
export const mockReduxSongSearch = {
    results: [
        {
            "id": 162955,
            "song_title": "Shape of My Heart",
            "song_thumbnail_url": "https://images.genius.com",
            "song_image_url": "https://images.genius.com",
            "artist_name": "Sting",
            "artist_image_url": "https://images.genius.com"
        }
    ],
    error: false,
    error_message: "",
    request_status: "resolved"
}


// mock redux song object
export const mockReduxSong = {
    "id": 162955,
    "song_title": "Shape of My Heart",
    "song_release_date": "March 9, 1993",
    "song_writers": [
        "Dominic Miller",
        "Sting"
    ],
    "song_thumbnail_url": "https://images.genius.com",
    "song_image_url": "https://images.genius.com",
    "artist_name": "Sting",
    "artist_image_url": "https://images.genius.com",
    "album_name": "Ten Summoner’s Tales",
    "album_image_url": "https://images.genius.com",
    "lyrics": "test",
    "media_soundcloud": "https://soundcloud.com/musikconnections/sting-shape-of-my-heart",
    "media_spotify": "https://open.spotify.com/track/5TrvGxuqaYKsF7C0NfrLrY",
    "error": false,
    "error_message": "",
    "request_status": "resolved"
};


// mock redux artist search object
export const mockReduxArtistSearch = {
    pagination: {
        "page": 1,
        "pages": 26,
        "per_page": 25,
        "items": 642
    },
    results: [
        {
            "id": 2043228,
            "name": "Marty Stinger",
            "thumbnail_url": "",
            "image_url": "https://img.discogs.com"
        }
    ],
    error: false,
    error_message: '',
    request_status: 'resolved'
}


// mock redux artist object
export const mockReduxArtist = {
    name: "Jack White",
    realname: "John Anthony Gillis",
    image_url: "https://img.discogs.com",
    profile: "American musician",
    error: false,
    error_message: '',
    request_status: 'resolved',
};


/* ********************************** Mock API Objects ************************************ */
// mock artist search api object
export const mockApiSongSearchResults = {
    "results": [
        {
            "id": 2043228,
            "type": "artist",
            "master_id": null,
            "master_url": null,
            "uri": "/artist/302648",
            "title": "Marty Stinger",
            "thumb": "",
            "cover_image": "https://img.discogs.com",
            "resource_url": "https://api.discogs.com"
        }
    ],
    error: false,
    error_message: ''
};

// mock artist api object
export const mockApiSongResults = {
    "id": 162955,
    "song_title": "Shape of My Heart",
    "song_writers": [
        "Dominic Miller",
        "Sting"
    ],
    "song_thumbnail_url": "https://images.genius.com",
    "song_image_url": "https://images.genius.com",
    "artist_name": "Sting",
    "artist_image_url": "https://images.genius.com",
    "album_name": "Ten Summoner’s Tales",
    "album_image_url": "https://images.genius.com",
    "lyrics": "test",
    "error": false,
    "error_message": ""
};

// mock artist search api object
export const mockApiArtistSearchResults = {
    "pagination": {
        "page": 1,
        "pages": 26,
        "per_page": 25,
        "items": 642,
        "urls": {
            "last": "https://api.discogs.com",
            "next": "https://api.discogs.com"
        }
    },
    "results": [
        {
            "id": 2043228,
            "type": "artist",
            "master_id": null,
            "master_url": null,
            "uri": "/artist/302648",
            "title": "Marty Stinger",
            "thumb": "",
            "cover_image": "https://img.discogs.com",
            "resource_url": "https://api.discogs.com"
        }
    ],
    error: false,
    error_message: ''
};

// mock artist api object
export const mockApiArtistResults = {
    name: "Jack White",
    realname: "John Anthony Gillis",
    image_url: "https://img.discogs.com",
    profile: "American musician",
    error: false,
    error_message: ''
};