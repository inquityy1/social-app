import React, { useState } from "react";
import useInputState from "../Reusable/Hooks/useInputState";

import "./SignUp.css";

function SignUp() {
  const [name, updateName] = useInputState("");
  const [email, updateEmail] = useInputState("");
  const [password, updatePassword] = useInputState("");
  const [confirmPassword, updateConfirmPassword] = useInputState("");

  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <div className="sign-up-title">
          <h1>Sign Up</h1>
          <p>Create your DeveloPEdia account</p>
        </div>

        <form className="sign-up-form">
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={updateName}
          />
          <input
            required
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={updateEmail}
          />
          <input
            type="password"
            placeholder="Enter The Password"
            value={password}
            onChange={updatePassword}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={updateConfirmPassword}
          />
          <input type="Submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
