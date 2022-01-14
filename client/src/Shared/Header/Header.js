import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

function Header() {
  let { pathname } = useLocation();

  const deleteCookie = () => {
    localStorage.removeItem("jwtToken");
  };

  return (
    <nav className="header">
      <div className="left">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          DeveloPEdia
        </Link>

        <Link
          className={pathname === "/profiles" ? "active" : ""}
          to="/profiles"
        >
          Developers
        </Link>
      </div>

      <div className="center">
        <Link
          className={pathname === "/dashboard" ? "active" : ""}
          to="/dashboard"
        >
          <i className="far fa-address-card"></i>Dashboard
        </Link>

        <Link className={pathname === "/feed" ? "active" : ""} to="/feed">
          <i className="far fa-comments"></i>Post Feed
        </Link>

        <Link
          onClick={deleteCookie}
          className={pathname === "/" ? "active" : ""}
          to="/"
        >
          <i className="far fa-user-circle"></i>Logout
        </Link>
      </div>

      <div className="right">
        <Link className={pathname === "/login" ? "active" : ""} to="/login">
          Login
        </Link>

        <Link
          className={pathname === "/register" ? "active" : ""}
          to="/register"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Header;
