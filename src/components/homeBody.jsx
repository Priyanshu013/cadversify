import React from "react";
import { NavLink } from "react-router-dom";

class HomeBody extends React.Component {
  render() {
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
              <i className="fas fa-user-tie"></i>
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
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="ri-stack-line"></i>
                  </div>
                  <h4 className="title">
                    <a href="">Become an opportunist</a>
                  </h4>
                  <p className="description">
                    Choose this If you are here to learn from experienced
                    professionals who are working in your dream career for
                    years.
                  </p>
                </div>
              </div>

              <div
                className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon"></div>
                  <h4 className="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
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
