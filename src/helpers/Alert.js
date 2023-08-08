import React from "react";

/** Alert 
 * 
 * for LoginForm, SignUpForm, ProfileForm
 * 
 */

const Alert = ({ type = 'danger', messages = [] }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {messages.map(m => (
                <p className="errors" key={m}>
                    {m}
                </p>
            ))}
        </div>
    )
}

export default Alert;