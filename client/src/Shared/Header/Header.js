import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

function Header() {
  let { pathname } = useLocation();

  return (
    <nav className="header">
      <div className="left">
        <Link className={pathname === "/" ? "active" : ""} to="/">
          DeveloPEdia
        </Link>

        <Link className={pathname === "/developers" ? "active" : ""} to="#">
          Developers
        </Link>
      </div>

      <div className="center">
        <Link
          className={pathname === "/dashboard" ? "active" : ""}
          to="/dashboard"
        >
          <i class="far fa-address-card"></i>Dashboard
        </Link>

        <Link className={pathname === "/postfeed" ? "active" : ""} to="#">
          <i class="far fa-comments"></i>Post Feed
        </Link>

        <Link className={pathname === "/" ? "active" : ""} to="/">
          <i class="far fa-user-circle"></i>Logout
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
