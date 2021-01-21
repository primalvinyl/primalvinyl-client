/**************************** Redux Types ***********************************/
interface ReduxPaginationType {
    page: number;
    pages: number;
    per_page: number;
    items: number;
}





interface ReduxLyricsSearchItemType {
    id: number;
    name: string;
    thumbnail_url: string;
    image_url: string;
}
export interface ReduxLyricsSearchType {
    results: ReduxLyricsSearchItemType[];
    error: boolean;
    error_message: string;
    request_status: string;
}





interface ReduxArtistSearchItemType {
    id: number;
    name: string;
    thumbnail_url: string;
    image_url: string;
}
export interface ReduxArtistSearchType {
    pagination: ReduxPaginationType,
    results: ReduxArtistSearchItemType[];
    error: boolean;
    error_message: string;
    request_status: string;
}




export interface ReduxArtistType {
    name: string;
    realname: string;
    image_url: string;
    error: boolean;
    error_message: string;
    request_status: string;
}




/**************************** Saga Reqeust Type ********************************/
export interface SagaRequestType {
    query: string;
    page?: number;
    per_page?: number; 
}




/*************************** Default Values ********************************/
export const lyricsSearchDefault: ReduxLyricsSearchType = {
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const discogsPaginationDefault: ReduxPaginationType = {
    page: 0,
    pages: 1,
    per_page: 15,
    items: 0
};

export const artistSearchDefault: ReduxArtistSearchType = {
    pagination: discogsPaginationDefault as ReduxPaginationType,
    results: [],
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const artistDefault: ReduxArtistType = {
    name: '',
    realname: '',
    image_url: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const lyricsGetRequestDefault: SagaRequestType = {
    query: ''
};

export const artistGetRequestDefault: SagaRequestType = {
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
