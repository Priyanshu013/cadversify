import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/navBar.css";
import sitelogo from "../site_assets/brand_logo_1.png";
import "bootstrap/dist/css/bootstrap.min.css";

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
                Our courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav position-absolute end-0 mx-3 inline">
          <li className="nav-item px">
            <NavLink to="/oppLogin">
              <button className="btn btn-outline-primary buttons">
                Cadent Login
              </button>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/cadLogin">
              <button to="" className="btn btn-outline-primary buttons ">
                Cadvocate Login
              </button>
            </NavLink>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
