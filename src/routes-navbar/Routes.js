import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Home from "../homepage/Home";
import CompanyList from "../companies/CompanyList";
import CompanyDetails from "../companies/CompanyDetails";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import ProfilePage from "../profiles/ProfilePage";

const Routes = () => {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/companies'>
                    <CompanyList />
                </Route>
                <Route exact path='/companies/:handle'>
                    <CompanyDetails />
                </Route>

                <Route exact path='/jobs'>
                    <JobList />
                </Route>

                <Route exact path='/login'>
                    <LoginForm />
                </Route>
                <Route exact path='/signup'>
                    <SignUpForm />
                </Route>

                <Route exact path='/profile'>
                    <ProfilePage />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;