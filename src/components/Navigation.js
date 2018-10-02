import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => (
  <div id="links">
    <button className="blue">
      <Link to="/">Home</Link>
    </button>
    <button className="purple">About</button>
    <button className="blue">
      <Link to="/portfolio">Portfolio</Link>
    </button>
    <button className="green">Contact</button>
  </div>
);

export default Navigation;
