import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from ".//ProfileDataForm.module.css";
import { Input, Textarea } from "../../../common/FormsControls/FormsControls.tsx";
import classes from "../../../../Components/common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
        {error && <div className={classes.formSummaryError}>{error}</div>}
      </div>
      <div>
        <b>Full name</b>:{" "}
        <Field
          placeholder="Fill name"
          name="fullName"
          component={Input}
          validate={[]}
        ></Field>
      </div>
      <div>
        <b>Looking for a job</b>:
        <Field
          placeholder=""
          name="lookingForAJob"
          component={Input}
          validate={[]}
          type="checkbox"
        ></Field>
      </div>
      <div>
        <b>My professioan skills </b>:{" "}
        <Field
          placeholder="Write your skills..."
          name="lookingForAJobDescription"
          component={Textarea}
          validate={[]}
        ></Field>
      </div>
      <div>
        <b>About me </b>:
        <Field
          placeholder="Write about yourself..."
          name="aboutMe"
          component={Textarea}
          validate={[]}
        ></Field>
      </div>
      <div>
        <b>Contacts </b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return <div key={key}>
            <b>{key}: <Field
          placeholder={`Write your ${key}...`}
          name={`contacts.${key}`}
          component={Input}
          validate={[]}
        ></Field> </b>
          </div>;
        })}
      </div>
    </form>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contacts}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

const ProfileDataFormReduxForm = reduxForm({form:"edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;
