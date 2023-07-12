import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
// import { useNavigate, useNavigation } from "react-router";
import { Navigate, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls.tsx";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators.ts";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}></DialogItem>
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} key={message.id}></Message>
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  if (!props.isAuth) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}></AddMessageFormRedux>
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[requiredField, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
