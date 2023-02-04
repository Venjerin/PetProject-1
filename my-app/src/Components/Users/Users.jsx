import React from "react";
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
            // props.setUsers([
            //     {
            //         id: 1, photoUrl: 'https://simpleslim.ru/wp-content/uploads/2020/07/2-11.jpg',
            //         followed: false, fullName: 'Dmitry', status: 'I\'m a boss', location: { city: 'Moscow', country: 'Russia' }
            //     },
            //     {
            //         id: 2, photoUrl: 'https://i.pinimg.com/736x/44/8b/89/448b894ea5c9f7aabd1b839fc1e7819b--garfield-pictures-divorce.jpg',
            //         followed: true, fullName: 'Andrew', status: 'I\'m a boss too', location: { city: 'Saint-Petersburg', country: 'Russia' }
            //     },
            //     {
            //         id: 3, photoUrl: 'https://i.insider.com/6283291bafcc8800196f0c5a?width=2000&format=jpeg&auto=webp',
            //         followed: false, fullName: 'Elon', status: 'I\'m a the bossest boss', location: { city: 'Silicon Valley', country: 'USA' }
            //     }
            // ]);
        }
    }



    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

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
    </div>
}

export default Users;

