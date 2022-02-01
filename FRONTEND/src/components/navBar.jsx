import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/navBar.css";
import sitelogo from "../site_assets/brand_logo_1.png";
import "bootstrap/dist/css/bootstrap.min.css";

class NavigationBar extends React.Component {
  state = { clicked: false}

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked})
    }
   render(){
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={sitelogo} className="navbar-brand" alt="" />
        </NavLink>

        <div className="menu-icon collapse navbar-collapse" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
          <ul className="navbar-nav" className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
              <NavLink className="nav-link" to="/ourcourses">
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
        <ul className="navbar-nav position-absolute end-0 mx-3 inline" id="loginbuttons">
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
      </div>
    </div>
  );
}
}
export default NavigationBar;
