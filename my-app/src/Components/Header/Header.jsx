import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://avatars.mds.yandex.net/i?id=8e1656b53d712f3d1d39bc3ecb78c46e4d0c80fc-8196573-images-thumbs&n=13' alt="Лого"></img>
            <div className={classes.loginBlock}>
                { props.isAuth? props.login :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )

}

export default Header;
