import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UseLoginUser from "./useCases/LoginUser";
import { useNavigate } from "react-router-dom";
import WrongEmail from "./WrongEmail";

import "./Login.css";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

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
      {isError ? (
        <WrongEmail />
      ) : !isSubmitted ? (
        <LoginForm submitForm={submitForm} />
      ) : (
        goToDashboard()
      )}
    </div>
  );
}

export default Login;
