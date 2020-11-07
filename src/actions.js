/************************* Action Types & Default Objects *****************************/
export const actionTypes = {
    PATCH_ARTIST: 'PATCH_ARTIST',
    GET_ARTIST: 'GET_ARTIST',
    GET_ARTISTS: 'GET_ARTISTS',
    PUT_ARTIST: 'PUT_ARTIST',
    PUT_ARTISTS: 'PUT_ARTISTS'
};

export const artistDefault = {
    name: '',
    realname: '',
    image_url: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const artistsDefault = {
    pagination: {},
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const navList = [
    { path: '/', value: 'Home'},
    { path: '/about-us', value: 'About Us'},
    { path: '/ding', value: 'Nav Item 1'},
    { path: '/dong', value: 'Nav Item 2'},
    { path: '/dingle', value: 'Nav Item 3'},
    { path: '/ring', value: 'Nav Item 4'},
    { path: '/sing', value: 'Nav Item 5'},
];



/******************************* Reducer Actions *************************************/
export const putArtist = (data = artistDefault) => { 
    return {
        type: actionTypes.PUT_ARTIST,
        data
    };
};

export const putArtists = (data = artistsDefault) => { 
    return {
        type: actionTypes.PUT_ARTISTS,
        data
    };
};



/******************************* Saga Actions *************************************/
export const getArtist = (data = {}) => {
    return {
        type: actionTypes.GET_ARTIST,
        data
    };
};

export const patchArtist = (data = {}) => {
    return {
        type: actionTypes.PATCH_ARTIST,
        data
    };
};

export const getArtists = (data = {}) => {
    return {
        type: actionTypes.GET_ARTISTS,
        data
    };
}; 
