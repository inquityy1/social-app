import React from "react";
import { Link } from "react-router-dom";

function CreateExperienceForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="experience">
      <div className="title">
        <div>
          <Link to="/dashboard" class="btn btn-outline-secondary">
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
          <input type="text" name="username" placeholder="Nebojsa" />
          <input type="text" name="username" placeholder="Junior Developer" />
          <input type="text" name="username" placeholder="Vrbovac" />
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
          <span>Current Job</span>
        </div>

        <div className="textarea">
          <textarea name="description" rows="3" cols="50" />
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
