import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components.css";
import sitelogo from "./site_assets/brand_logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light collapse.navbar-collapse position-relative ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={sitelogo} className="navbar-brand" alt="" />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
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
                <NavLink to="" className="btn btn-outline-primary card">
                  Student Login
                </NavLink>
              </li>
              <li className="nav-item px-0">
                <NavLink to="" className="btn btn-outline-primary card ">
                  Cadvocate Login
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
