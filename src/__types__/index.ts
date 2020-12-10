/******************************* Types *************************************/
interface ReduxPaginationType {
    page: number;
    pages: number;
    per_page: number;
    items: number;
}

export interface ReduxArtistListType {
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

export interface SagaGetRequest {
    query: string;
    page?: number;
    per_page?: number;
}




/*************************** Default Values ********************************/
export const paginationDefault: ReduxPaginationType = {
    page: 0,
    pages: 1,
    per_page: 15,
    items: 0
};

export const artistDefault: ReduxArtistType = {
    name: '',
    realname: '',
    image_url: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const artistsDefault: ReduxArtistsType = {
    pagination: paginationDefault as ReduxPaginationType,
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const sagaGetRequestDefault: SagaGetRequest = {
    query: '',
    page: 0,
    per_page: 15
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
