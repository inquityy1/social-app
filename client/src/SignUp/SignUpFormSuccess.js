import React from "react";
import { Link } from "react-router-dom";

import successImg from "../images/success.webp";

const SignUpFormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">
        We have received your request! <br /> login here now!{" "}
        <Link to="/login">here</Link>
      </h1>
      <img src={successImg} />
    </div>
  );
};

export default SignUpFormSuccess;
