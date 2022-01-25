import React from "react";
import { Link } from "react-router-dom";
import validateCreateEducation from "./validationCreateEducation/ValidationCreateEducation";
import useSaveProfileEducation from "./hooks/useSaveProfileEducation";

function CreateEducationForm({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } =
    useSaveProfileEducation(submitForm, validateCreateEducation);

  return (
    <div className="education">
      <div className="title">
        <div>
          <Link to="/dashboard" className="btn btn-outline-secondary">
            Go Back
          </Link>
        </div>
        <div className="title-text">
          <h1>Add Education</h1>
          <h5>
            Add any education or school that you had in the past or current
          </h5>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="education-form">
        <div className="text">
          <small>* = required field</small>
          <input
            onChange={handleChange}
            value={values.school}
            type="text"
            name="school"
            placeholder="School"
          />
          {errors.school && <p style={{ color: "red" }}>{errors.school}</p>}
          <input
            onChange={handleChange}
            value={values.degree}
            type="text"
            name="degree"
            placeholder="Degree or Certification"
          />
          {errors.degree && <p style={{ color: "red" }}>{errors.degree}</p>}
          <input
            onChange={handleChange}
            value={values.fieldofstudy}
            type="text"
            name="fieldofstudy"
            placeholder="Field Of Study"
          />
          {errors.fieldofstudy && (
            <p style={{ color: "red" }}>{errors.fieldofstudy}</p>
          )}
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
            max="2004-12-31"
          />
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <span>Current School</span>
        </div>

        <div className="textarea">
          <textarea
            onChange={handleChange}
            value={values.description}
            name="description"
            rows="3"
            cols="50"
            placeholder="Description"
          />
          <small>Tell us about the position</small>
        </div>

        <div className="education-button">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateEducationForm;
