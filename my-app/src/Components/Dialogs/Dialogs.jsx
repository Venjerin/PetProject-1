import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}></DialogItem>);

    let messagesElements = props.messages.map((message) => <Message message={message.message} key={message.id}></Message>);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let messageOnChange = () => {
        debugger;
        let text = newMessageElement.current.value;
        props.updateNewMessageBody(text);
        
        // props.dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}
                    onChange={messageOnChange}
                    value={props.newMessageText}>
                </textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>


    )
};

export default Dialogs;