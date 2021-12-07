import React from "react";

import mainBackground from "../images/main-background.jpg";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="background-image">
        <img src={mainBackground} />
      </div>
      <div className="centered-text">
        <h1>Develo P Edia</h1>
        <p>
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
      </div>
    </div>
  );
}

export default Main;
