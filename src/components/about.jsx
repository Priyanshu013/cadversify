import React from "react";
import aboutlogo from "./site_assets/brand_logo_1.png";
import { NavLink, Link } from "react-router-dom";
import "./CSS/about.css";

class About extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center about_bg container-fluid">
        <section>
          <NavLink to="/">
            <img src={aboutlogo} className="about_brand" />
          </NavLink>
        </section>
        <section>
          <h5>About us</h5>
        </section>
      </div>
    );
  }
}

export default About;
