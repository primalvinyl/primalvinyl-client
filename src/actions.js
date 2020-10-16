/************************* Action Types & Default Objects *****************************/
export const actionTypes = {
    SAVE_USER: 'SAVE_USER',
    GET_USER: 'GET_USER',
    GET_USERS: 'GET_USERS',
    PUT_USER: 'PUT_USER',
    PUT_USERS: 'PUT_USERS'
};

export const userDefault = {
    id: '',
    name: '',
    email: '',
    error: false,
    error_message: '',
    request_status: 'idle'
};

export const usersDefault = {
    error: false,
    error_message: '',
    request_status: 'idle',
    results: []
};



/******************************* Reducer Actions *************************************/
export const putUser = (user = userDefault) => { 
    return {
        type: actionTypes.PUT_USER,
        user
    };
};

export const putUsers = (users = usersDefault) => { 
    return {
        type: actionTypes.PUT_USERS,
        users
    };
};



/******************************* Saga Actions *************************************/
export const saveUser = (user = userDefault) => {
    return {
        type: actionTypes.SAVE_USER,
        user
    };
};

export const getUser = (data = {}) => {
    return {
        type: actionTypes.GET_USER,
        data
    };
};

export const getUsers = (data = {}) => {
    return {
        type: actionTypes.GET_USERS,
        data
    };
}; 
