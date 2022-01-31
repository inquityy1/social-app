import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function DashboardInfo({ profile, firstTimeUser }) {
  const education = profile?.education.map((data) => (
    <tr key={data._id}>
      <td>{data.school}</td>
      <td>{data.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{data.from}</Moment> -
        {data.to === null ? (
          " Current"
        ) : (
          <Moment format="YYYY/MM/DD">{data.to}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  const experience = profile?.experience.map((data) => (
    <tr key={data._id}>
      <td>{data.company}</td>
      <td>{data.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{data.from}</Moment> -
        {data.to === null ? (
          " Current"
        ) : (
          <Moment format="YYYY/MM/DD">{data.to}</Moment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  return profile === undefined && firstTimeUser === false ? (
    <h1>LOADING</h1>
  ) : firstTimeUser === true ? (
    <Link to="/create-profile" className="first-time btn btn-outline-secondary">
      <i className="fas fa-user-circle"></i>Create Profile
    </Link>
  ) : (
    <div className="dashboard">
      <div className="title">
        <h1>Dashboard</h1>

        <p>
          Welcome <a target="_blank">{profile.handle}</a>
        </p>
      </div>

      <div className="buttons-container">
        <div className="buttons">
          <Link to="/edit-profile" className="btn btn-outline-secondary">
            <i className="fas fa-user-circle"></i>Edit Profile
          </Link>
          <Link to="/add-experience" className="btn btn-outline-secondary">
            <i className="fab fa-black-tie"></i>Add Experience
          </Link>
          <Link to="/add-education" className="btn btn-outline-secondary">
            <i className="fas fa-graduation-cap"></i>Add Education
          </Link>
        </div>

        <button className="btn btn-danger">Delete My Account</button>
      </div>

      <div className="tables">
        <div className="experience-table">
          <h2>Eperience Details</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Company</th>
                <th scope="col">Title</th>
                <th scope="col">Years</th>
              </tr>
            </thead>
            <tbody>{experience}</tbody>
          </table>
        </div>

        <div className="education-table">
          <h2>Education Details</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">School</th>
                <th scope="col">Degree</th>
                <th scope="col">Years</th>
              </tr>
            </thead>
            <tbody>{education}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardInfo;
