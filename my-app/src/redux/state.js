import { type } from "@testing-library/user-event/dist/type";

// let rerenderEntireTree;
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'Everybody...', likesCount: 10 }
            ],
            dialogs: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Kate' },
                { id: 3, name: 'Drakula' }
            ],
            newPostText: '',
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'Hi! How r u?' },
                { id: 3, message: 'Fine tnx' }
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() { },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.dialogsPage.newMessageText,
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessage(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText:text})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage:text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE}); 

export default store;
window.store = store; 