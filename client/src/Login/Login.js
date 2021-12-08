import React from "react";

import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login">
        <div className="login-title">
          <h1>Log In</h1>
          <p>Sign in to your DeveloPEdia account</p>
        </div>

        <form className="login-form">
          <input required type="text" placeholder="Email Address" />
          <input required type="password" placeholder="Password" />
          <input type="Submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default Login;
