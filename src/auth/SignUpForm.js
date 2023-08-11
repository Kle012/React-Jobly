import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../helpers/Alert";

/** Signup Form
 * 
 * Show forms and manages upodate to state on changes
 * On submission:
 * - calls signup function prop
 * - redirects to / route
 * 
 * Route for /signup
 * Routes -> SignupForm -> Alert
 */
const SignUpForm = ({ signup }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    const [formErrors, setFormErrors] = useState([]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await signup(formData);
        if (res.success) {
            history.push('/companies');
        } else {
            setFormErrors(res.errors);
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="SignupForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h3 className="mb-3">
                    Sign Up
                </h3>

                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">
                                    Username
                                </label>
                                <input
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="username"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    name="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    name="lastName"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {formErrors.length
                                ? <Alert type="danger" messages={formErrors} />
                                : null
                            }

                            <button type="submit" className="btn btn-primary float-right">
                                Sign Up
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;