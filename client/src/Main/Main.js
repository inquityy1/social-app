import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="centered-text">
        <h1>DeveloPEdia</h1>
        <p>
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className="btns">
          <div className="login btn btn-primary">
            <Link to="/login">Login</Link>
          </div>

          <div className="sign-up btn btn-light">
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
