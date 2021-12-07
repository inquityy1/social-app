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
