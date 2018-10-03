import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "./Navigation.js";

const About = () => (
  <div>
    <Navigation />
    <div className="box">
      <img src="./images/profile.png" alt="" className="box-img" />
      <h1>Dean Bozic</h1>
      <h5>Software Engineer</h5>
      <p>
        Born and raised in Bosnia and Herzegovina. Enrolled in VIA University
        College, Denmark - attending last semester. Besided my love for coding,
        I enjoy watching documentaries and reading.
      </p>
      <ul>
        <li>
          <a href="https://www.github.com/DeanDK">
            <FontAwesomeIcon icon="code-branch" />
          </a>
        </li>
        <li>
          <a href="deanbozic12@gmail.com">
            <FontAwesomeIcon icon="at" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
