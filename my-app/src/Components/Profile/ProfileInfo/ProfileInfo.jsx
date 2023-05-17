import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={classes.mainPfoto}></img>
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected}></input>}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        ></ProfileStatusWithHooks>
      </div>
    </div>
  );
};

export default ProfileInfo;
