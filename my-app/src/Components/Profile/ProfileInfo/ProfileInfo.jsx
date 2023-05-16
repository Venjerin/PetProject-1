import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>;
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large}></img>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        ></ProfileStatusWithHooks>
      </div>
    </div>
  );
};

export default ProfileInfo;
