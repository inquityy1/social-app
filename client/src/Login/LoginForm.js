import React from "react";
import ValidateInfoLogin from "./validateInfo/ValidateInfoLogin";
import useCreateUserFormLogin from "./hooks/useCreateUserFormLogin";

function LoginForm({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useCreateUserFormLogin(
    submitForm,
    ValidateInfoLogin
  );

  return (
    <div className="login">
      <div className="login-title">
        <h1>Log In</h1>
        <p>Sign in to your DeveloPEdia account</p>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email Address"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <input type="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default LoginForm;
