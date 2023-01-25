import React from "react";
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo></ProfileInfo>
            <MyPosts posts={props.posts}
                dispatch={props.dispatch}
                // addPost={props.addPost}
                // newPostText={props.newPostText}
                // updateNewPostText={props.updateNewPostText}
                ></MyPosts>
        </div>
    )
}

export default Profile
