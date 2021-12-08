import React from "react";

import "./SignUp.css";

function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <div className="sign-up-title">
          <h1>Sign Up</h1>
          <p>Create your DeveloPEdia account</p>
        </div>

        <form className="sign-up-form">
          <input required type="text" placeholder="Name" />
          <input required type="text" placeholder="Email Address" />
          <input required type="password" placeholder="Password" />
          <input required type="password" placeholder="Confirm Password" />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
