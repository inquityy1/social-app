import React from "react";
import toast, { Toaster } from "react-hot-toast";
import CreateProfileForm from "./CreateProfileForm";
import UseCreateUser from "./useCases/CreateProfile";

import "./CreateProfile.css";

function CreateProfile() {
  const submitForm = async (profileData) => {
    try {
      const response = await UseCreateUser(profileData);
      window.location.pathname = "/dashboard";
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("You cant use that username");
      }
      throw error;
    }
  };

  return (
    <div className="create-profile-container">
      <Toaster position="top-center" reverseOrder={true} />
      <CreateProfileForm submitForm={submitForm} />
    </div>
  );
}

export default CreateProfile;
