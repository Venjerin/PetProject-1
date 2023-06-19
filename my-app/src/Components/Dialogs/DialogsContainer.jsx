import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../../redux/dialogs-reducer.ts";
import Dialogs from "./Dialogs";


// const DialogsContainer = (props) => {
//     let dialogs = props.dialogs;
//     let messages = props.messages;

//     let sendMessage = () => {
//         props.dispatch(addMessageActionCreator())
//     }

//     let messageOnChange = (text) => {
//         // let text = newMessageElement.current.value;
//         props.dispatch(updateNewMessageActionCreator(text));
//     }
//     return <Dialogs updateNewMessageBody={messageOnChange}
//         sendMessage={sendMessage}
//         dialogs={dialogs}
//         messages={messages}
//         newMessageText={props.newMessageText}></Dialogs>
// };


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)