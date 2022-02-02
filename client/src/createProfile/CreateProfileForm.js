import React from "react";
import { Link } from "react-router-dom";
import useCreateProfileForm from "./hooks/useCreateProfileForm";
import validateProfileInfo from "./validateProfileInfo";

function CreateProfileForm({ submitForm, firstTimeUser, profile }) {
  const { handleChange, values, handleSubmit, errors } = useCreateProfileForm(
    submitForm,
    validateProfileInfo
  );

  return profile === undefined && firstTimeUser === false ? (
    <h1>LOADING</h1>
  ) : firstTimeUser === true ? (
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
            placeholder="Enter Your Username"
            value={values.handle}
            onChange={handleChange}
          />

          {errors.handle && <p>{errors.handle}</p>}
          <small>
            A unique handle for your profile URL, Your full name, company name,
            nickname
          </small>
          <select
            name="status"
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            className="form-control"
          >
            <option value="DEFAULT" disabled>
              Choose a position/status ...
            </option>
            <option value="Intern">Intern</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
            <option value="Architect">Architect</option>
          </select>
          {errors.status && <p>{errors.status}</p>}
          <small>Give us an idea where you at in your career</small>

          <input
            type="text"
            name="company"
            placeholder="Work"
            value={values.company}
            onChange={handleChange}
          />
          {errors.company && <p>{errors.company}</p>}
          <small>Could be your own company or one you work for</small>

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={values.website}
            onChange={handleChange}
          />
          {errors.website && <p>{errors.website}</p>}
          <small>Could be your own website or a company one</small>

          <input
            type="text"
            name="location"
            placeholder="City/State"
            value={values.location}
            onChange={handleChange}
          />
          {errors.location && <p>{errors.location}</p>}
          <small>City or ^ state suggested eg: Belgrade, SRB</small>
          <input
            type="text"
            name="skills"
            placeholder="technology you work with"
            value={values.skills}
            onChange={handleChange}
          />
          {errors.skills && <p>{errors.skills}</p>}
          <small>
            Please use comma separated values (eg, HTML, CSS, Javascript)
          </small>

          {/* <input type="text" name="github" placeholder="Github" />
          <small>Include your Github Username</small> */}

          <textarea
            name="bio"
            value={values.bio}
            onChange={handleChange}
            rows="3"
            cols="50"
          />
          <small>Tell us about the position</small>
        </div>

        <div className="create-profile-button">
          <input type="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  ) : (
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
            placeholder="Enter Your Username"
            value={values.handle || profile.handle}
            onChange={handleChange}
          />

          {errors.handle && <p>{errors.handle}</p>}
          <small>
            A unique handle for your profile URL, Your full name, company name,
            nickname
          </small>
          <select
            name="status"
            defaultValue={profile.status}
            onChange={handleChange}
            className="form-control"
          >
            <option value="DEFAULT" disabled>
              Choose a position/status ...
            </option>
            <option value="Intern">Intern</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
            <option value="Architect">Architect</option>
          </select>
          {errors.status && <p>{errors.status}</p>}
          <small>Give us an idea where you at in your career</small>

          <input
            type="text"
            name="company"
            placeholder="Work"
            value={values.company || profile.company}
            onChange={handleChange}
          />
          {errors.company && <p>{errors.company}</p>}
          <small>Could be your own company or one you work for</small>

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={values.website || profile.website}
            onChange={handleChange}
          />
          {errors.website && <p>{errors.website}</p>}
          <small>Could be your own website or a company one</small>

          <input
            type="text"
            name="location"
            placeholder="City/State"
            value={values.location || profile.location}
            onChange={handleChange}
          />
          {errors.location && <p>{errors.location}</p>}
          <small>City or ^ state suggested eg: Belgrade, SRB</small>
          <input
            type="text"
            name="skills"
            placeholder="technology you work with"
            value={values.skills || profile.skills}
            onChange={handleChange}
          />
          {errors.skills && <p>{errors.skills}</p>}
          <small>
            Please use comma separated values (eg, HTML, CSS, Javascript)
          </small>

          {/* <input type="text" name="github" placeholder="Github" />
          <small>Include your Github Username</small> */}

          <textarea
            name="bio"
            value={values.bio || profile.bio}
            onChange={handleChange}
            rows="3"
            cols="50"
          />
          <small>Tell us about the position</small>
        </div>

        <div className="create-profile-button">
          <input type="Submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default CreateProfileForm;
