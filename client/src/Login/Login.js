import React from "react";
import UseLoginUser from "./useCases/LoginUser";
import toast, { Toaster } from "react-hot-toast";
import LoginForm from "./LoginForm";
import setAuthToken from "../utils/setAuthToken";

import "./Login.css";

function Login() {
  const submitForm = async (userData) => {
    try {
      const response = await UseLoginUser(userData);
      const token = response.data.token;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);

      window.location.pathname = "/dashboard";
      toast.success("Successfully logged in!");
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Your email does not exist!");
      }
      throw error;
    }
  };

  return (
    <div className="login-container">
      <Toaster position="top-center" reverseOrder={true} />
      <LoginForm submitForm={submitForm} />
    </div>
  );
}

export default Login;
