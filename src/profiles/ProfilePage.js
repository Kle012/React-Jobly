import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import JoblyApi from "../api";
import Alert from "../helpers/Alert";

const ProfilePage = () => {
    const { currUser, setCurrUser } = useContext(UserContext);
    const INITIAL_STATE = {
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email,
        username: currUser.username,
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            username: formData.username,
            password: formData.password
        }

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (error) {
            setErrors(error);
            return;
        }

        setFormData(data => ({
            ...data,
            password: ""
        }))
        setErrors([]);
        setSaveConfirmed(true);

        setCurrUser(updatedUser);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
        setErrors([]);
    }

    return (
        <div className="ProfilePage">
            <h3>Profile</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <p className="form-control-plaintext">{formData.username}</p>
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                name="firtName"
                                className="form-control"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm password to update</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {errors.length
                            ? <Alert type="danger" messages={errors} />
                            : null}

                        {saveConfirmed
                            ? <Alert type="success" messages={['Updated successfully!']} />
                            : null}

                        <button className="btn" onClick={handleSubmit}>
                            Updated!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;