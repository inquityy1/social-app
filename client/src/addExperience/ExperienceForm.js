import React from "react";
import { Link } from "react-router-dom";

function ExperienceForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="experience">
      <div className="title">
        <Link to="/dashboard" class="btn btn-outline-secondary">
          Go Back
        </Link>
        <h1>Add Experience</h1>
        <h4>Add any job or position that you had in the past or current</h4>
      </div>

      <form onSubmit={handleSubmit} className="experience-form">
        <label for="fname">* = required field</label>
        <input type="text" name="username" placeholder="Nebojsa" />
        <input type="text" name="username" placeholder="Junior Developer" />
        <input type="text" name="username" placeholder="Vrbovac" />

        <label for="fname">From Date</label>
        <input
          type="date"
          name="trip-start"
          min="1950-01-01"
          max="2004-12-31"
        ></input>

        <label for="fname">To Date</label>
        <input
          type="date"
          name="trip-start"
          min="1950-01-01"
          max="2004-12-31"
        ></input>

        <input type="checkbox" />
        <span>current</span>

        <textarea name="description" rows="3" cols="50" />
        <p>Tell us about the position</p>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ExperienceForm;
