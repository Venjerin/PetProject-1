import React from "react";
import classes from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=884edb525425300d10ba53dd8b1ee02e9fd98c9c-8307637-images-thumbs&n=13' alt="Картинка"></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo
