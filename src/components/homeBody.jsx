import React from "react";
import { Link, NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./components.css";
import { FaUserGraduate } from "react-icons/fa";

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

        <section id="hero" className="d-flex align-items-center">
          <div
            className="container position-relative"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row icon-boxes">
              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in-up"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <h3 className="icon-box-icons">
                    <FaUserGraduate />
                  </h3>
                  <h4 className="title">
                    <Link to="">Lorem Ipsum</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeBody;
