import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignUpFormSuccess from "./SignUpFormSuccess";

import "./SignUp.css";

function SignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="sign-up-container">
      {!isSubmitted ? (
        <SignUpForm submitForm={submitForm} />
      ) : (
        <SignUpFormSuccess />
      )}
    </div>
  );
}

export default SignUp;
