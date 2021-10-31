import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./components.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

class HomeBody extends React.Component {
  render() {
    Aos.init();
    return (
      <div>
        <section className="p-0 home-background">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="ps-5 pt-5 tag-line">
              <strong>
                <em>You dream, we envision</em>
              </strong>
            </h1>

            <div className="col-lg-6 mt-4">
              <h2 className="ps-5 pt-2">
                <strong>
                  <em>Talk to professionals working in your dream career</em>
                </strong>
              </h2>
              <p className="lead text-muted"></p>
              <p className="ps-5 py-5">
                <Link
                  to=""
                  className="btn btn-warning my-2 card"
                  style={{ fontSize: 20 }}
                >
                  Connect your first call for free! >
                </Link>
              </p>
            </div>
          </div>

          <div
            className="container position-relative card-align card-deck "
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            <span
              className="card text-black bg-light border-dark"
              style={{ width: 180, height: 220 }}
            >
              <h3 className="icon-box-icons">
                <FaUserGraduate />
              </h3>
              <h4 className="title" style={{ textAlign: "center" }}>
                <Link to="" style={{ textDecoration: "none" }}>
                  <p style={{ color: "red" }}>Become an opportunist</p>
                </Link>
              </h4>
            </span>
            <span
              className="card text-black border-dark "
              style={{ width: 180, height: 220 }}
            >
              <h3 className="icon-box-icons">
                <FaUserTie />
              </h3>
              <h4 className="title" style={{ textAlign: "center" }}>
                <NavLink to="" style={{ textDecoration: "none" }}>
                  <p style={{ color: "red" }}>Become a Cadvocate</p>
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
