import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("jwtToken");

  return isAuthenticated ? <Outlet /> : <Navigate to="/register" />;
};

export default ProtectedRoutes;
