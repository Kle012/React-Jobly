import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navigation = () => {
    return (
        <div className="Navigation">
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/companies'>Companies</NavLink>
                <NavLink exact to='/jobs'>Jobs</NavLink>
                <NavLink exact to='/login'>Login</NavLink>
                <NavLink exact to='/signup'>Sign Up</NavLink>
                <NavLink exact to='/profile'>Profile</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;