import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "../CSS/lowerHomeBody.css";
import homebody1 from "../site_assets/homebody1.jpg";
import homebody2 from "../site_assets/homebody2.jpg";
import homebody3 from "../site_assets/homebody3.jpg";
import homebody4 from "../site_assets/homebody4.jpg";
import homebody5 from "../site_assets/homebody5.jpg";
import homebody6 from "../site_assets/homebody6.jpg";

class LowerHomeBody extends React.Component {
  render() {
    Aos.init();
    return (
      <section
        className=" home-background-low pt-5"
        style={{ color: "GrayText" }}
      >
        <div className="container text-center ">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="row justify-content-center ">
              <div class="my-auto">
                <div className="quote-carding mb-10">
                  <div className="card-body px-5">
                    <div className="text-center pb-2"></div>
                    <figure className="text-center">
                      <span className="text-warning fs-2 fst-italic">
                        Our motto-
                      </span>
                      <figcaption className="quote-text">
                        You dream, we envision
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className=" d-sm-flex">
            <div className="dest-img">
              <img src={homebody1} className="img-fluid"></img>
            </div>
            <div className="main d-flex align-items-center">
              <div className="home-text-right">
                <div className="top-text">
                  <h3>What is Cadversify?</h3>
                </div>
                <p>
                  It is a platform which connects students to working
                  professionals from different domains all across the world.
                  Search for the career which you want to go ahead with, choose
                  a suitable professional who is already working in that field
                  for years- based upon your requirements, book an appointment,
                  and you're all set to build connections with amazing
                  personalities and learn from their own real-life experiences.
                  So, what are you waiting for?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className=" d-sm-flex">
            <div className="main d-flex align-items-center">
              <div>
                <div className="d-flex top-text">
                  <h3>Why Cadversify?</h3>
                </div>
                <p>
                  It is the largest community of experienced professionals who
                  are happy to share their years of experiences with people who
                  are planning to start off their career with the right
                  mentorship and have the growth mindset embedded within
                  themselves. With cadversify, you can build amazing one-to-one
                  connections with people who may seem to be impossible to get
                  in touch with, all thanks to our trusted cadvocates from 108
                  countries across the globe.
                </p>
              </div>
            </div>
            <div className="dest-img">
              <img src={homebody2} className="img-fluid pe-5"></img>
            </div>
          </div>
        </div>

        <Link
          to="/oppLogin"
          className="btn btn-warning my-2 head-button-low block"
        >
          Sign up for free now! >>
        </Link>
      </section>
    );
  }
}

export default LowerHomeBody;
