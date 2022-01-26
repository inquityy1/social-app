import React from "react";
import CreateExperienceForm from "./CreateExperienceForm";
import setAuthToken from "../utils/setAuthToken";
import UseCreateExperience from "./useCases/UseCreateExperience";
import toast, { Toaster } from "react-hot-toast";

import "./CreateExperience.css";

function CreateExperience() {
  const submitForm = async (profile) => {
    try {
      // Set token for BE calls
      const token = localStorage.getItem("jwtToken");
      setAuthToken(token);
      await UseCreateExperience(profile);

      toast.success("Successfully saved experience!");
      window.location.pathname = "/dashboard";
    } catch (error) {
      if (error) {
        toast.error("Something went wrong try again");
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
