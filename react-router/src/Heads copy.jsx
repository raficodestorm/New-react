import React from "react";
import { Link } from "react-router";

function Head() {
  return (
    <div className="nav">
      <div className="logo">
        <h3>S A Rafi</h3>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Srvice">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
