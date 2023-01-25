import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://avatars.mds.yandex.net/i?id=85aa62fae9e75325f5beed8568eba3158e0ae31a-7675486-images-thumbs&n=13" alt="Аватарка"></img>
            {props.message}
            <div>
                <span>likes: {props.likesCount}</span> 
            </div>
        </div>
    )
}

export default Post
