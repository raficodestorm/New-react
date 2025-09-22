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
            <Link to="/pages/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pages/contactp">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
