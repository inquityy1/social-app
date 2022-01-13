import React from "react";
import SignUp from "../signUp/SignUp";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("jwtToken");
  console.log("this", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/register" />;
};

export default ProtectedRoutes;
