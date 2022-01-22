import React from "react";
import CreateExperienceForm from "./CreateExperienceForm";
import setAuthToken from "../utils/setAuthToken";
import UseCreateExperience from "./useCases/UseCreateExperience";
import toast, { Toaster } from "react-hot-toast";

import "./CreateExperience.css";

function CreateExperience() {
  const submitForm = async (profile) => {
    try {
      console.log(profile);
      // Set token for BE calls
      const token = localStorage.getItem("jwtToken");
      setAuthToken(token);
      await UseCreateExperience(profile);

      // window.location.pathname = "/dashboard";
      toast.success("Successfully added experience!");
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Your username/handle already exists");
      }
      throw error;
    }
  };
  return (
    <div className="experience-container">
      <Toaster position="top-center" reverseOrder={true} />
      <CreateExperienceForm submitForm={submitForm} />
    </div>
  );
}

export default CreateExperience;
