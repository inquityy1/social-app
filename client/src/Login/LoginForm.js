import React from "react";
import useForm from "../Reusable/Hooks/useForm";
import validate from "../Reusable/ValidateInfo/ValidateInfo";

function LoginForm() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

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
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
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
