const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Drakula' }
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hi! How r u?' },
        { id: 3, message: 'Fine tnx' }
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: body }],
            };

        default:
            return state;

    }
};

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;