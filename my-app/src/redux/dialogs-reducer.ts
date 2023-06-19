const ADD_MESSAGE = 'ADD-MESSAGE';


type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Drakula' }
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hi! How r u?' },
        { id: 3, message: 'Fine tnx' }
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddMessageActionCreatorActionType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string): AddMessageActionCreatorActionType => ({ type: ADD_MESSAGE, newMessageBody });

export default dialogsReducer;