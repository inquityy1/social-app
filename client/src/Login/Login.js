import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UseLoginUser from "./useCases/LoginUser";

import "./Login.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const submitForm = async (userData) => {
    try {
      console.log("radi");
      await UseLoginUser(userData);
      setIsError(false);
    } catch (error) {
      if (error.response.status === 404) {
        setIsError(true);
      }
      throw error;
    }
    setIsError(false);
    setIsSubmitted(true);
  };

  return (
    <div className="login-container">
      {isError ? <div>Email doesn't exists!</div> : null}
      {!isSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        <h1>dsadsadasdsadas</h1>
      )}
    </div>
  );
}

export default Login;
