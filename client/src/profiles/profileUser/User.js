import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="profile">
      <Link to="/dashboard" class="btn btn-outline-secondary">
        Back To Profiles
      </Link>

      <div className="profile-infos">
        <div className="main-infos">
          <i class="fas fa-user-circle"></i>
          <h1>Nebojsa</h1>
          <p>Junior developer</p>
          <p>Vrbovac</p>
          <i class="fas fa-globe"></i>
        </div>
        <div className="skill-bio">
          <div className="bio">
            <h3>Nebojsa Bio</h3>
            <p>No.0000 The Jester</p>
          </div>
          <div className="skill">
            <h3>Skill Set</h3>
            <p>
              <i class="fas fa-check"></i> Typescript
            </p>
          </div>
        </div>
        <div className="table-infos">
          <div className="experience">
            <h3>Experience</h3>
            <div className="experience-card card">
              <div className="margin">
                <h4>inquityy</h4>
                <p>2021/11/20 - Now</p>
                <p>
                  <span>Position:</span> Junior Dev
                </p>
                <p>
                  <span>Position:</span> Vrbovac
                </p>
                <p>
                  <span>Description:</span> Senior
                </p>
              </div>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="education-card card">
              <div className="margin">
                <p>No Education Listed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
