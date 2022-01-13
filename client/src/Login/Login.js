import React, { useState } from "react";
import LoginForm from "./LoginForm";
import setAuthToken from "../utils/setAuthToken";
import UseLoginUser from "./useCases/LoginUser";
import WrongEmail from "./WrongEmail";

import "./Login.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitForm = async (userData) => {
    try {
      const response = await UseLoginUser(userData);
      const token = response.data.token;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);

      setIsError(false);

      window.location.pathname = "/dashboard";
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
      {isError ? (
        <WrongEmail />
      ) : (
        !isSubmitted && <LoginForm submitForm={submitForm} />
      )}
    </div>
  );
}

export default Login;
