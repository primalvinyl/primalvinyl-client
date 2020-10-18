// global mock of fetch
global.fetch = jest.fn();


/**
 * Returns a mock fetch response
 * @param {object} Object the data to return
 * @returns {promise} A promise that resolves to a json fetch object
 */
export const fetchResponse = obj => {
    return { json: () => Promise.resolve(obj) };
}


// mock user object
export const mockUserObject = {
    id: '12345',
    name: 'dingo',
    email: 'dingo@dingo.com',
    request_status: 'resolved'
};


// mock user api object
export const mockUserApiObject = {
    id: '12345',
    name: 'dingo',
    email: 'dingo@dingo.com',
    request_status: 'resolved'
};


// mock users api object
export const mockUsersApiObject = {
    results: [
        { id: '12345', name: 'dingo', email: 'dingo@dingo.com' },
        { id: '12346', name: 'bling', email: 'bling@bling.com' },
        { id: '12347', name: 'sing', email: 'sing@sing.com' },
        { id: '12348', name: 'ding', email: 'ding@ding.com' },
    ]
};
