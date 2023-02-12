import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";




const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader></Preloader>
    }

    return (
        <div>
            {/* <div>
                <img src='https://avatars.mds.yandex.net/i?id=884edb525425300d10ba53dd8b1ee02e9fd98c9c-8307637-images-thumbs&n=13' alt="Картинка"></img>
            </div> */}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}></img>
                <ProfileStatus status={"My status"}></ProfileStatus>
            </div>
        </div>
    )
}

export default ProfileInfo;
