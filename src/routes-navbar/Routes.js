import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../homepage/Home";
import CompanyList from "../companies/CompanyList";
import CompanyDetails from "../companies/CompanyDetails";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import ProfilePage from "../profiles/ProfilePage";
import AuthRoutes from "./AuthRoutes";

const Routes = ({ login, signup }) => {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/login'>
                    <LoginForm login={login}/>
                </Route>
                <Route exact path='/signup'>
                    <SignUpForm signup={signup}/>
                </Route>

                <AuthRoutes exact path='/companies'>
                    <CompanyList />
                </AuthRoutes>
                <AuthRoutes exact path='/companies/:handle'>
                    <CompanyDetails />
                </AuthRoutes>

                <AuthRoutes exact path='/jobs'>
                    <JobList />
                </AuthRoutes>

                <AuthRoutes exact path='/profile'>
                    <ProfilePage />
                </AuthRoutes>

                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default Routes;