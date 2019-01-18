import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link> className="navbar-brand" to="#"> Navbar</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink>
              {" "}
              className="nav-link" to="#"> Home{" "}
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink> className="nav-link" to="#"> Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink> className="nav-link" to="#"> Pricing</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
