import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Redirect, Route } from "react-router-dom";

/** AuthRoutes will check if there is a current user and renders if there is.
 * 
 * Otherwise, redirects to login form.
 * 
 */

const AuthRoutes = ({ exact, path, children }) => {
    const {currUser} = useContext(UserContext);
    
    if (!currUser) return <Redirect to='/login' />

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}

export default AuthRoutes;