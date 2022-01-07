import React from "react";
import { Link } from "react-router-dom";

function DashboardInfo() {
  return (
    <div className="dashboard">
      <div className="title">
        <h1>Dashboard</h1>
        <p>
          Welcome{" "}
          <a href="https://github.com/inquityy1" target="_blank">
            Nebojsa
          </a>
        </p>
      </div>

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
            <tbody>
              <tr>
                <td>inquityy1</td>
                <td>junior dev</td>
                <td>2021/12/15-current</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
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
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="delete-user">
        <button className="btn btn-danger">Delete My Account</button>
      </div>
    </div>
  );
}

export default DashboardInfo;
