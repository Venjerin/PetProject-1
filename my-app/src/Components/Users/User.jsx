import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api.ts";
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";

let User = ({ user, ...props }) => {
  return (
    <div className={styles.user}>
      <div key={user.id}>
        <span>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={styles.userPhoto}
              ></img>
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                onClick={() => {
                  props.unfollow(user.id, usersAPI);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(user.id, usersAPI);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        {/* <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span> */}
      </div>
    </div>
  );
};

export default User;
