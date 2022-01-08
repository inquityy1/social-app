import React from "react";
import validateInfoSignUp from "./validateInfo/ValidateInfoSignUp";
import useCreateUserFormSignUp from "./hooks/useCreateUserFormSignUp";

function SignUpForm({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } =
    useCreateUserFormSignUp(submitForm, validateInfoSignUp);

  return (
    <div className="sign-up">
      <div className="sign-up-title">
        <h1>Sign Up</h1>
        <p>Create your DeveloPEdia account</p>
      </div>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <input
          type="text"
          name="name"
          placeholder="Enter The Name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder="Enter The Email Address"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter The Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
