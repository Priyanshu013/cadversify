import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./CSS/liveSessions.css";
import sitelogo from "./site_assets/brand_logo_1.png";

class LiveSessions extends React.Component {
  render() {
    Aos.init();
    return (
      <section className="livesession-bg d-flex align-items-center justify-content-center">
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
          <div className=" login-card">
            <section className="container-fluid">
              <section className="row align-items-center">
                <section className="col-lg">
                  <form className="form-container">
                    <div className="form-group">
                      <NavLink className="navbar-brand login-logo" to="/">
                        <img src={sitelogo} className="navbar-brand" alt="" />
                      </NavLink>
                      <h2 className="text-center font-weight-bold"> Login </h2>
                      <h4 className="text-center font-weight-bold">
                        You need to be logged in to watch the live session
                      </h4>
                      <input
                        type="email"
                        className="form-control mt-4 my-2"
                        id="InputEmail1"
                        aria-describeby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control my-2"
                        id="InputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <Link
                      to="/live-sessions"
                      type="submit"
                      className="btn btn-primary btn-block my-4"
                    >
                      Login
                    </Link>
                    <p>
                      Don't have an account? <Link to="/">Register now!</Link>
                    </p>
                  </form>
                </section>
              </section>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default LiveSessions;
