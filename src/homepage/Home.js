import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import { Link } from "react-router-dom";
import './Home.css';

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
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">Jobly</h1>
                <p className="lead">
                    All the jobs in one, convenient place.
                </p>
                {currUser
                    ? <h2>
                        Welcome back, {currUser.firstName || currUser.username}!
                    </h2>
                    : (
                        <p>
                            <Link className="btn btn-primary font-weight-bold mr-3" to='/login'>
                                Log In
                            </Link>
                            <Link className="btn btn-primary font-weight-bold" to='/signup'>
                                Sign Up
                            </Link>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Home;