import React from "react";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
      <div className={classes.profile}>
        <ProfileInfo
          saveProfile={props.saveProfile}
          savePhoto={props.savePhoto}
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
        ></ProfileInfo>
        <MyPostsContainer
          store={props.store}
          newPostText={props.newPostText}
          posts={props.posts}
        ></MyPostsContainer>
      </div>
    );
}

export default Profile;
 