import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignUpFormSuccess from "./SignUpFormSuccess";

import "./SignUp.css";
import UseCreateUser from "./useCases/CreateUser";

function SignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const submitForm = async (userData) => {
    try {
      await UseCreateUser(userData);
      setIsError(false);
    } catch (error) {
      if (error.response.status === 400) {
        setIsError(true);
      }
      throw error;
    }
    setIsError(false);
    setIsSubmitted(true);
  };

  return (
    <div className="sign-up-container">
      {isError ? <div>Email already exists!</div> : null}
      {!isSubmitted ? (
        <SignUpForm submitForm={submitForm} />
      ) : (
        <SignUpFormSuccess />
      )}
    </div>
  );
}

export default SignUp;
