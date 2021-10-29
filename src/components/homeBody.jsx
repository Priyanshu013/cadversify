import React from "react";
import { NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./components.css";
import { FaUserGraduate } from "react-icons/fa";
import sitelogo from "./site_assets/brand_logo.png";

class HomeBody extends React.Component {
  render() {
    Aos.init();
    return (
      <div>
        <section className="p-5">
          <div>
            <div className="col-lg-6 mt-4">
              <h1 style={{ color: "brown" }}>
                <strong>
                  <em>Talk to professionals working in your dream career</em>
                </strong>
              </h1>
              <p className="lead text-muted"></p>
              <p>
                <NavLink to="" className="btn btn-warning my-2">
                  Connect your first call for free! >
                </NavLink>
              </p>
            </div>
          </div>
        </section>

        <section id="hero">
          <div
            className="container position-relative"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <span
              className="card text-black bg-light mb-3"
              style={{ width: 150, height: 190 }}
            >
              <h3 className="icon-box-icons">
                <FaUserGraduate />
              </h3>
              <h4 className="title" style={{ textAlign: "center" }}>
                <NavLink to="" style={{ color: "red" }}>
                  Become an opportunist
                </NavLink>
              </h4>
            </span>
            <span
              className="card text-black bg-light mb-3"
              style={{ width: 150, height: 190 }}
            >
              <h3 className="icon-box-icons">
                <FaUserGraduate />
              </h3>
              <h4 className="title" style={{ textAlign: "center" }}>
                <NavLink to="" style={{ color: "red" }}>
                  Become an opportunist
                </NavLink>
              </h4>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeBody;
