import React from "react";
import { Link } from "react-router-dom";

export default function CreateProfileForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="create-profile">
      <div className="title">
        <div>
          <Link to="/dashboard" class="btn btn-outline-secondary">
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
          <input type="text" name="username" placeholder="username" />
          <small>
            A unique handle for your profile URL, Your full name, company name,
            nickname
          </small>

          <select class="form-control">
            <option>Inter</option>
            <option>Junior</option>
            <option>Medior</option>
            <option>Senior</option>
            <option>Architect</option>
          </select>
          <small>Give us an idea where you at in your career</small>

          <input type="text" name="work" placeholder="Work" />
          <small>Could be your own company or one you work for</small>

          <input type="text" name="website" placeholder="Website" />
          <small>Could be your own websiite or a company one</small>

          <input type="text" name="city" placeholder="City/State" />
          <small>City or ^ state suggested eg: Belgrade, SRB</small>

          <input
            type="text"
            name="technology"
            placeholder="technology you work with"
          />
          <small>
            Please use comma separated values (eg, HTML, CSS, Javascript)
          </small>

          <input type="text" name="github" placeholder="Github" />
          <small>Include your Github Username</small>

          <textarea name="description" rows="3" cols="50" />
          <small>Tell us about the position</small>
        </div>

        <div className="create-profile-button">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
