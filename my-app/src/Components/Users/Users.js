import React, { useState } from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [activeIndex] = useState(0);
    return <div>
        <div>
            {/* {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : null}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })} */}
            
            <div style={{ display: "flex", overflow: "hidden" }}>
                {pages.map((p) => (
                    <div
                        key={p}
                        style={{
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            opacity: activeIndex === p ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                            position: "absolute",
                            left: activeIndex === p ? 0 : "100%",
                        }}
                    >
                        {p}
                    </div>
                ))}
                <div style={{ display: "flex" }}>
                    {pages.map((p) => (
                        <button
                            key={p}
                            onClick={(e) => { props.onPageChanged(p)}}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        >
                             {p}
                        </button>
                    ))}
                </div>
            </div>


        </div>
        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                className={styles.userPhoto}></img>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id, usersAPI);
                                // usersAPI.unfollow(u.id)
                                //     .then(response => {
                                //         if (response.data.resultCode == 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //     });
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                props.follow(u.id, usersAPI);
                                // usersAPI.follow(u.id)
                                //     .then(response => {
                                //         if (response.data.resultCode == 0) {
                                //             props.follow(u.id)
                                //         }
                                //     });
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </div>
            )
        }
    </div >
}

export default Users;

