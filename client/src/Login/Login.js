import React, { useState } from "react";
import LoginForm from "./LoginForm";

import "./Login.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("BAD CODE");

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="login-container">
      {!isSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        <h1>dsadsadasdsadas</h1>
      )}
    </div>
  );
}

export default Login;
