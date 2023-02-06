const SET_USER_DATA = 'SET_USER_DATA';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
            }
        default:
            return state;

    }
};

export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newMessage: text });
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });

export default authReducer;