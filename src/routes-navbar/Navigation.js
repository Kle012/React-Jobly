import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";

const Navigation = ({ logout }) => {
    const { currUser } = useContext(UserContext);

    const loggedIn = () => {
        return (
            <ul className="">
                <li className="">
                    <NavLink className="" exact to='/companies'>
                        Companies
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className="" exact to='/jobs'>
                        Jobs
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className="" exact to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className="">
                    <Link className="" to='/' onClick={logout}>
                        Log Out {currUser.first_name || currUser.username}
                    </Link>
                </li>
            </ul>
        )
    }

    const loggedOut = () => {
        return (
            <ul className="">
                <li className="">
                    <NavLink className="" to='/login'>
                        Log In
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className="" to='/signup'>
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        )
    }

    return (
        <nav className="Navigation">
            <Link className="" to='/'>
                Jobly
            </Link>
            {currUser ? loggedIn() : loggedOut()}
        </nav>
    )
}

export default Navigation;