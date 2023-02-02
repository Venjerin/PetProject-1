import React from "react";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let dialogs = props.dialogs;
    let messages = props.messages;

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let messageOnChange = (text) => {
        // let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }

    return <Dialogs updateNewMessageBody = {messageOnChange}
    sendMessage = {sendMessage}
    dialogs = {dialogs}
    messages = {messages}
    newMessageText = {props.newMessageText}></Dialogs>
};

export default DialogsContainer;