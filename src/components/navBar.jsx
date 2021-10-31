import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import sitelogo from "./site_assets/brand_logo_1.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={sitelogo} className="navbar-brand" alt="" />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/live-sessions">
                Live sessions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us">
                Contact us
              </NavLink>
            </li>
            <ul className="navbar-nav position-absolute end-0 mx-3">
              <li className="nav-item px">
                <NavLink to="" style={{ textDecoration: "none" }}>
                  <button className="btn btn-outline-primary card">
                    Student Login
                  </button>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="" style={{ textDecoration: "none" }}>
                  <button to="" className="btn btn-outline-primary card ">
                    Cadvocate Login
                  </button>
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
