import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import './Navigation.css';

const Navigation = ({ logout }) => {
    const { currUser } = useContext(UserContext);

    const loggedIn = () => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to='/companies'>
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to='/jobs'>
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <Link className="nav-link" to='/' onClick={logout}>
                        Log Out {currUser.first_name || currUser.username}
                    </Link>
                </li>
            </ul>
        )
    }

    const loggedOut = () => {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to='/login'>
                        Log In
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink className="nav-link" to='/signup'>
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        )
    }

    return (
        <nav className="Navigation navbar navbar-expand-md">
            <Link className="navbar-brand" to='/'>
                Jobly
            </Link>
            {currUser ? loggedIn() : loggedOut()}
        </nav>
    )
}

export default Navigation;