import React from "react";
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className= {classes.nav}>
            <div className={classes.item}><Link to="/profile" activeClassName={classes.activeLink}>Profile</Link></div>
            <div className={classes.item}><Link to="/dialogs" activeClassName={classes.activeLink}>Messages</Link></div>
            <div className={classes.item}><Link to="/news" activeClassName={classes.activeLink}>News</Link></div>
            <div className={classes.item}><Link to="/music" activeClassName={classes.activeLink}>Music</Link></div>
            <div className={classes.item}><Link to="/settings" activeClassName={classes.activeLink}>Settings</Link></div>
        </nav>
    )

}

export default Navbar
