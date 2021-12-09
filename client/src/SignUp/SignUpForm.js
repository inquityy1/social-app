import React from "react";
import useForm from "../Reusable/Hooks/useForm";
import validate from "../Reusable/ValidateInfo/ValidateInfo";

function SignUpForm({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="sign-up">
      <div className="sign-up-title">
        <h1>Sign Up</h1>
        <p>Create your DeveloPEdia account</p>
      </div>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <input
          type="text"
          name="username"
          placeholder="Enter The Name"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
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
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
