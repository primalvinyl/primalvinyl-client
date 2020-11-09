/******************************* Types *************************************/
interface ReduxPaginationType {
    page: number;
    pages: number;
    per_page: number;
    items: number;
}

interface ReduxArtistListType {
    id: number;
    name: string;
    thumbnail_url: string;
    image_url: string;
}

export interface ReduxArtistType {
    name: string;
    realname: string;
    image_url: string;
    error: boolean;
    error_message: string;
    request_status: string;
}

export interface ReduxArtistsType {
    pagination: ReduxPaginationType,
    results: ReduxArtistListType[];
    error: boolean;
    error_message: string;
    request_status: string;
}




/*************************** Default Values ********************************/
export const artistDefault: ReduxArtistType = {
    name: '',
    realname: '',
    image_url: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const artistsDefault: ReduxArtistsType = {
    pagination: {} as ReduxPaginationType,
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
