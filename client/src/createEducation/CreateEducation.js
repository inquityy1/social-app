import React from "react";
import CreateEducationForm from "./CreateEducationForm";
import setAuthToken from "../utils/setAuthToken";
import UseCreateEducation from "./useCases/UseCreateEducation";
import toast, { Toaster } from "react-hot-toast";

import "./CreateEducation.css";

function CreateEducation() {
  const submitForm = async (profile) => {
    try {
      console.log(profile);
      // Set token for BE calls
      const token = localStorage.getItem("jwtToken");
      setAuthToken(token);
      await UseCreateEducation(profile);

      toast.success("Successfully saved education!");
      // window.location.pathname = "/dashboard";
    } catch (error) {
      if (error) {
        toast.error("Something went wrong try again");
      }
      throw error;
    }
  };
  return (
    <div className="education-container">
      <Toaster position="top-center" reverseOrder={true} />
      <CreateEducationForm submitForm={submitForm} />
    </div>
  );
}

export default CreateEducation;
