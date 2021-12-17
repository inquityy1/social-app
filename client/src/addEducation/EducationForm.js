import React from "react";
import { Link } from "react-router-dom";

function EducationForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="education">
      <div className="title">
        <div>
          <Link to="/dashboard" class="btn btn-outline-secondary">
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
          <input type="text" name="username" placeholder="School" />
          <input
            type="text"
            name="username"
            placeholder="Degree or Certification"
          />
          <input type="text" name="username" placeholder="Field Of Study" />
        </div>
        <div className="date">
          <label>From Date</label>
          <input
            type="date"
            name="trip-start"
            min="1950-01-01"
            max="2004-12-31"
          ></input>
          <label>To Date</label>
          <input
            type="date"
            name="trip-start"
            min="1950-01-01"
            max="2004-12-31"
          ></input>
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <span>Current School</span>
        </div>

        <div className="textarea">
          <textarea
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

export default EducationForm;
