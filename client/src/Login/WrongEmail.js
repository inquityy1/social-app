import React from "react";
import loginDenied from "../images/login-denied.webp";

export default function WrongEmail() {
  return (
    <div className="denied">
      <h1>
        Your email does not exist please <br /> if u want to try again{" "}
        <a href="/login">click here</a>
      </h1>
      <img src={loginDenied} />
    </div>
  );
}
