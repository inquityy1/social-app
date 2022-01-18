import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateProfileForm({ submitForm }) {
  const [handle, setHandle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Intern");
  const [skills, setSkills] = useState([]);
  const [bio, setBio] = useState("");

  const [handleErrors, setHandleErrors] = useState({});
  const [skillsError, setSkillsError] = useState({});

  const addToArray = () => {
    setSkills((arr) => [`${arr}`]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    addToArray();

    const isValid = formValidation();

    console.log(
      `${handle}, ${company}, ${website}, ${location},${status}, ${skills}, ${bio}`
    );

    if (isValid) {
      submitForm({ handle, company, website, location, status, skills, bio });
    }
  };

  const formValidation = () => {
    const handleErrors = {};
    const skillsError = {};
    let isValid = true;

    if (handle.trim().length < 2 || handle.trim().length > 40) {
      handleErrors.usernameErrors =
        "Username must be minimum 2 char long or max 40 char long";
      isValid = false;
    }

    if (skills.length <= 0) {
      skillsError.technologyError = "Field is required";
      isValid = false;
    }

    setHandleErrors(handleErrors);
    setSkillsError(skillsError);

    return isValid;
  };

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
            name="username"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="username*"
          />
          {Object.keys(handleErrors).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {handleErrors[key]}
              </div>
            );
          })}
          <small>
            A unique handle for your profile URL, Your full name, company name,
            nickname
          </small>

          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            className="form-control"
          >
            <option value="Intern">Intern</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
            <option value="Architect5">Architect</option>
          </select>
          <small>Give us an idea where you at in your career</small>

          <input
            type="text"
            name="work"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            placeholder="Work"
          />
          <small>Could be your own company or one you work for</small>

          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            placeholder="Website"
          />
          <small>Could be your own website or a company one</small>

          <input
            type="text"
            name="city"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="City/State"
          />
          <small>City or state suggested eg: Belgrade, SRB</small>

          <input
            type="text"
            name="skills"
            value={skills}
            onChange={(e) => {
              setSkills(e.target.value);
            }}
            placeholder="technology you work with*"
          />
          {Object.keys(skillsError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {skillsError[key]}
              </div>
            );
          })}
          <small>
            Please use comma separated values (eg, HTML, CSS, Javascript)
          </small>

          <textarea
            name="description"
            rows="3"
            cols="50"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
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
