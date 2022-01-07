import React from "react";
import { Link } from "react-router-dom";

import "./Profiles.css";

function ProfileCard() {
  return (
    <div className="profiles">
      <div className="title">
        <h1>Developer Profiles</h1>
        <p>Browse and connect with developer</p>
      </div>

      <div className="user-info-container">
        <div className="icon">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="user-info">
          <div className="description">
            <h3>Nebojsa</h3>
            <p>Junior Web Developer</p>
            <p>in Vrbovac</p>
            <Link className="btn btn-primary" to="/profiles/:name">
              View Profile
            </Link>
          </div>
          <div className="right-card">
            <h3>Skill Set:</h3>
            <h3 className="skill">
              <i className="fas fa-check"></i> React JS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
