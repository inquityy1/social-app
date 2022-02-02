import React, { useState, useEffect } from "react";
import CreateProfileForm from "./CreateProfileForm";
import toast, { Toaster } from "react-hot-toast";
import UseCreateProfile from "./useCases/UseCreateProfile";
import setAuthToken from "../utils/setAuthToken";
import UseGetProfile from "../Shared/useCases/useGetProfile";

import "./CreateProfile.css";

export default function CreateProfile() {
  const [profile, setProfile] = useState(undefined);

  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const initialUser = {
        handle: "",
        company: "",
        website: "",
        bio: "",
        location: "",
        status: "",
        skills: "",
      }
      const response = await UseGetProfile();
      if (response.firstTimeUser) {
        setProfile(initialUser);
      } else {
        setProfile(response.data);
      }
    }
    return () => {
      mounted = false;
    };
  }, [UseGetProfile]);

  const submitForm = async (profile) => {
    try {
      // Set token for BE calls
      const token = localStorage.getItem("jwtToken");
      setAuthToken(token);
      await UseCreateProfile(profile);

      window.location.pathname = "/dashboard";
      toast.success("Successfully created profile!");
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Your username/handle already exists");
      }
      throw error;
    }
  };

  return (
    <div className="create-profile-container">
      <Toaster position="top-center" reverseOrder={true} />
      <CreateProfileForm
        profile={profile}
        submitForm={submitForm}
      />
    </div>
  );
}
