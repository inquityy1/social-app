import React from "react";
import { Link } from "react-router-dom";

function LoginAndSignUp() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </div>
  );
}

export default LoginAndSignUp;
