import React from "react";

function Header() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary" id="header">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <form className="d-flex" role="search">
          <input className="form-control" type="search" placeholder="Search" />
          <button className="btn bg-white" type="submit">Search</button>
        </form>
        <div className="col-auto ms-auto d-flex align-items-center">
          <div className="position-relative me-3">
            {/* Notification SVG + Badge */}
            <span className="badge bg-danger rounded-pill notification-badge">3</span>
          </div>
          {/* Profile Dropdown */}
          <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle"
              id="profileDropdown" data-bs-toggle="dropdown">
              <img src="assests/image/rafi33.jpg" alt="Profile"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", objectFit: "cover", border: "2px solid #0000F5" }} />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
