const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hi! How r u?' },
        { id: 3, message: 'Fine tnx' }
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;

    }
};

export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage:text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE}); 

export default dialogsReducer;