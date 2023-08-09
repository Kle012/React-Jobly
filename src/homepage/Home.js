import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";

/** Homepage of site
 * 
 * Shows welcome message or login/signup 
 * 
 * Route for /
 * 
 * Routes -> Homapage
 * 
*/

const Home = () => {
    const { currUser } = useContext(UserContext);

    return (
        <div className="homepage">
            <div className="container">
                <h1 className="title">Jobly</h1>
                <p className="body">
                    All the jobs in one, convenient place.
                </p>
                {currUser
                    ? <h2>
                        Welcome back, {currUser.firstName || currUser.username}
                    </h2>
                    : (
                        <p>
                            <Link className="" to='/login'>
                                Log In
                            </Link>
                            <Link className="" to='/signup'>
                                Sign Up
                            </Link>
                        </p>
                    )}
            </div>
        </div>
    )
}

export default Home;