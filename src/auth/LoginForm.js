import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../helpers/Alert";

/** Login form
 * 
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to / route
 * 
 * Route for /login
 * Routes -> LoginForm -> Alert
 * 
 */

const LoginForm = ({ login }) => {
    const initial_state = {
        username: "",
        password: ""
    }
    const history = useHistory();
    const [formData, setFormData] = useState(initial_state);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await login(formData);
        if (res.success) {
            history.push('/companies');
        } else {
            setErrors(res.errors);
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
        <div className="LoginForm">
            <div className="container">
                <h3 className="form-title">
                    Log In
                </h3>

                <div className="card">
                    <div className="card-body">
                        <form className="Login-form" onSubmit={handleSubmit}>
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
                                    required
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
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            {errors.length
                                ? <Alert type="danger" messages={errors} />
                                : null
                            }

                            <button className="login-btn" onSubmit={handleSubmit}>
                                Log In
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;