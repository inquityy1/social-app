import React, { useState } from "react";
import { Link } from "react-router-dom";
import validateCreateExperience from "./validationCreateExperience/ValidationCreateExperience";
import useSaveProfileExperience from "./hooks/useSaveProfileExperience";

function CreateExperienceForm({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } =
    useSaveProfileExperience(submitForm, validateCreateExperience);

  const [checked, setChecked] = useState(false);

  const onCheck = (e) => {
    setChecked(!checked);
    handleChange(e);
  };

  return (
    <div className="experience">
      <div className="title">
        <div>
          <Link to="/dashboard" className="btn btn-outline-secondary">
            Go Back
          </Link>
        </div>
        <div className="title-text">
          <h1>Add Experience</h1>
          <h5>Add any job or position that you had in the past or current</h5>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="experience-form">
        <div className="text">
          <small>* = required field</small>
          <input
            onChange={handleChange}
            value={values.title}
            type="text"
            name="title"
            placeholder="Name"
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
          <input
            onChange={handleChange}
            value={values.company}
            type="text"
            name="company"
            placeholder="Company title"
          />
          {errors.company && <p style={{ color: "red" }}>{errors.company}</p>}
          <input
            onChange={handleChange}
            value={values.location}
            type="text"
            name="location"
            placeholder="Location"
          />
        </div>
        <div className="date">
          <label>From Date</label>
          <input
            onChange={handleChange}
            value={values.from}
            type="date"
            name="from"
            min="1950-01-01"
          />
          {errors.from && <p style={{ color: "red" }}>{errors.from}</p>}
          <label>To Date</label>
          <input
            onChange={handleChange}
            value={values.to}
            type="date"
            name="to"
            min="1950-01-01"
            className={`${checked ? "disable" : ""}`}
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="current"
            value={values.current}
            onChange={onCheck}
            checked={values.current}
          />
          <span>Current Job</span>
        </div>

        <div className="textarea">
          <textarea
            onChange={handleChange}
            value={values.description}
            name="description"
            rows="3"
            cols="50"
          />
          <small>Tell us about the position</small>
        </div>

        <div className="experience-button">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateExperienceForm;
