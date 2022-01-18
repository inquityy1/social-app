import React, { useState } from "react";
import CreateProfileForm from "./CreateProfileForm";
import UseCreateProfile from "./useCases/CreateProfile";

import "./CreateProfile.css";

export default function CreateProfile() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const submitForm = async (profileData) => {
    try {
      await UseCreateProfile(profileData);
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
    <div className="create-profile-container">
      {isError ? <div>Username already exists</div> : null}
      {!isSubmitted ? (
        <CreateProfileForm submitForm={submitForm} />
      ) : (
        <div>dasdasdsda</div>
      )}
    </div>
  );
}
