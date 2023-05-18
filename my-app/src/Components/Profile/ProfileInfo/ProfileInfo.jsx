import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm, { Contact } from "./ProfileDataForm/ProfileDataForm";


const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader></Preloader>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    })
  }


  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          src={props.profile.photos.large || userPhoto}
          className={classes.mainPfoto}
        ></img>
        {props.isOwner && (
          <input type="file" onChange={onMainPhotoSelected}></input>
        )}
        {editMode 
          ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} {...props}></ProfileDataForm> 
          : <ProfileData goToEditMode={() => setEditMode(true)} {...props}  isOwner = {props.isOwner}></ProfileData>
        }


        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        ></ProfileStatusWithHooks>
      </div>
    </div>
  );
};

const ProfileData = (props) => {

  return (
    <div>
      {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
      <div>
        <b>Full name</b>: {props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>My professioan skills </b>:{" "}
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me </b>:{props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts </b>:{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            ></Contact>
          );
        })}
      </div>
    </div>
  );
};





export default ProfileInfo;
