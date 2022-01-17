import React from "react";
import { Link } from "react-router-dom";
import ValidateInfoCreateProfile from "./validateInfo/ValidateInfoCreateProfile";
import useCreateProfileForm from "./hooks/useCreateProfileForm";

function CreateProfileForm({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useCreateProfileForm(
    submitForm,
    ValidateInfoCreateProfile
  );

  return (
    <div className="create-profile">
      <div className="title">
        <div>
          <Link to="/dashboard" className="btn btn-outline-secondary">
            Go Back
          </Link>
        </div>
        <div className="create-profile-text">
          <h1>Create Your Profile</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="create-profile-form">
        <div className="text">
          <h6>* = required field</h6>
          <input
            type="text"
            name="handle"
            value={values.handle}
            onChange={handleChange}
            placeholder="username*"
          />
          {errors.handle && <p>{errors.handle}</p>}
          <small>
            A unique handle for your profile URL, Your full name, company name,
            nickname
          </small>

          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            className="form-control"
          >
            <option>Intern</option>
            <option>Junior</option>
            <option>Medior</option>
            <option>Senior</option>
            <option>Architect</option>
          </select>
          <small>Give us an idea where you at in your career</small>

          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder="Work"
          />
          <small>Could be your own company or one you work for</small>

          <input
            type="text"
            name="website"
            value={values.website}
            onChange={handleChange}
            placeholder="Website"
          />
          <small>Could be your own website or a company one</small>

          <input
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="City/State"
          />
          <small>City or state suggested eg: Belgrade, SRB</small>

          <input
            type="text"
            name="skills"
            value={values.skills}
            onChange={handleChange}
            placeholder="technology you work with*"
          />
          {errors.skills && <p>{errors.skills}</p>}
          <small>
            Please use comma separated values (eg, HTML, CSS, Javascript)
          </small>

          <textarea
            name="description"
            rows="3"
            cols="50"
            name="bio"
            value={values.bio}
            onChange={handleChange}
          />
          <small>Tell us about the position</small>
        </div>

        <div className="create-profile-button">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProfileForm;
