import React from "react";
import CreateProfileForm from "./CreateProfileForm";
import toast, { Toaster } from 'react-hot-toast';

import "./CreateProfile.css";
import UseCreateProfile from "./useCases/UseCreateProfile";
import setAuthToken from "../utils/setAuthToken";

export default function CreateProfile() {
  const submitForm = async (profile) => {
    try {
      // Set token for BE calls
     const token = localStorage.getItem('jwtToken')
     setAuthToken(token)
     await UseCreateProfile(profile);

      window.location.pathname = "/dashboard";
      toast.success('Successfully created profile!')
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Your username/handle already exists')
      }
      throw error;
    }
  };
  return (
    <div className="create-profile-container">
      <Toaster
      position="top-center"
      reverseOrder={true}
      />
      <CreateProfileForm submitForm={submitForm} />
    </div>
  );
}
