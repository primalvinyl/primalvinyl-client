/* ********************************** Mock REDUX Objects ************************************ */
// mock redux artist search object
export const mockReduxSearchObject = {
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


// mock redux artist search object
export const mockReduxArtistSearchObject = {
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
export const mockReduxArtistObject = {
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
export const mockApiSearchObject = {
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

// mock artist search api object
export const mockApiArtistSearchObject = {
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
export const mockApiArtistObject = {
    name: "Jack White",
    realname: "John Anthony Gillis",
    image_url: "https://img.discogs.com",
    profile: "American musician",
    error: false,
    error_message: ''
};