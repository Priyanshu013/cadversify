import React from "react";
import LowerHomeBody from "./lowerHomeBody";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "../CSS/homeBody.css";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsInfoCircleFill } from "react-icons/bs";

class HomeBody extends React.Component {
  render() {
    const renderTooltip1 = (props) => (
      <Tooltip id="icon-tooltip" className="tooltip-card" {...props}>
        A Cadent is a jargon for you if you are here to learn from experienced
        professionals who are working in your dream career for years.
      </Tooltip>
    );
    const renderTooltip2 = (props) => (
      <Tooltip id="icon-tooltip" className="tooltip-card" {...props}>
        A Cadvocate is a jargon for any working professional who wishes to share
        their work-experiences and learnings with others
      </Tooltip>
    );
    Aos.init();
    return (
      <div>
        <section className="home-background body">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <h1 className="ps-5 pt-5">
              <div className="col-lg-7">
                <h2 className="ps-5 headline">
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(60)
                        .typeString("Confused about your career?")
                        .changeDeleteSpeed(10)
                        .pauseFor(1200)
                        .deleteAll()
                        .changeDelay(60)
                        .typeString(
                          "Talk to professionals working in your dream career - TODAY!"
                        )
                        .pauseFor(2000)
                        .start();
                    }}
                  />
                </h2>

                <p className="ps-5 pt-5">
                  <Link
                    to="/oppSignup"
                    className="btn btn-warning my-2 head-button"
                  >
                    Connect your first call for free!
                  </Link>
                </p>
              </div>
            </h1>
          </div>

          <div
            className="position-relative card-align card-deck pt-3"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            <span className="card-home text-black border-dark ">
              <h3 className="icon-box-icons pt-2">
                <FaUserGraduate />
              </h3>
              <h4 className="title" style={{ textAlign: "center" }}>
                <Link to="/oppSignup" style={{ textDecoration: "none" }}>
                  <p className="card-headline">Become a Cadent</p>
                </Link>
              </h4>
              <div className="text-center">
                <OverlayTrigger
                  trigger="click"
                  placement="left"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip1}
                >
                  <p className="pt-2">
                    <BsInfoCircleFill className="icon-box-icons2" />
                  </p>
                </OverlayTrigger>
              </div>
            </span>
            <span className="card-home text-black border-dark ">
              <h3 className="icon-box-icons pt-2">
                <FaUserTie />
              </h3>
              <h4 className="title" style={{ textAlign: "center" }}>
                <NavLink to="/cadSignup" style={{ textDecoration: "none" }}>
                  <p className="card-headline">Become a Cadvocate</p>
                </NavLink>
              </h4>
              <div className="text-center">
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip2}
                >
                  <p className="pt-2">
                    <BsInfoCircleFill className="icon-box-icons2" />
                  </p>
                </OverlayTrigger>
              </div>
            </span>
          </div>
        </section>
        <LowerHomeBody />
      </div>
    );
  }
}

export default HomeBody;
