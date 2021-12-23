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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CgEditBlackPoint } from "react-icons/cg";
import { CgChevronDoubleRightR } from "react-icons/cg";

class LowerHomeBody extends React.Component {
  render() {
    Aos.init();
    return (
      <section className=" home-background-low pt-5">
        <div className="container text-center ">
          <div>
            <div className="row justify-content-center ">
              <div className="my-auto">
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
        <div className="row px-5 pt-5">
          <div className=" d-flex">
            <div
              className="dest-img"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={homebody1} className="img-fluid" />
            </div>
            <div
              className="home-content d-flex align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="ps-4">
                <div className="top-text">
                  <h3>What is Cadversify?</h3>
                </div>
                <p>
                  It is a platform which connects people who seek the right
                  mentorship, to working professionals from different domains
                  all across the world. <br />
                </p>
                <p className="py-3">
                  Here's how you'll do it:
                  <br />
                  <CgEditBlackPoint className="lower-home-bullets" /> Search for
                  the career which you want to go ahead with.
                  <br />
                  <CgEditBlackPoint className="lower-home-bullets" /> Choose a
                  suitable professional who is already working in that field for
                  years- based upon your requirements.
                  <br />
                  <CgEditBlackPoint className="lower-home-bullets" /> Choose a
                  time slot and send the meeting proposal. You're all set to
                  build connections with amazing personalities and learn from
                  their own real-life experiences.
                </p>
                <p>
                  <CgChevronDoubleRightR className="lower-home-bullets" /> So,
                  what are you waiting for?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-5">
          <div className=" d-sm-flex">
            <div
              className="home-content d-flex align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="pe-4">
                <div className="d-flex top-text">
                  <h3>Why Cadversify?</h3>
                </div>
                <p className="py-3">
                  <CgEditBlackPoint className="lower-home-bullets" />
                  It's the largest community of experienced professionals who
                  are happy to share their years of experiences with people
                </p>
                <p className="py-3">
                  <CgEditBlackPoint className="lower-home-bullets" />
                  Find life-long mentors who will guide you on one-to-one video
                  call sessions. You can also ask your friends who share same
                  aspirations as you to join-in your session, and split up the
                  bills!
                </p>
                <p className="py-3">
                  <CgEditBlackPoint className="lower-home-bullets" />
                  Build connections with people working in big MNCs, who may
                  seem to be impossible to get in touch with, all thanks to our
                  trusted cadvocates from 108 countries across the globe.
                </p>
              </div>
            </div>
            <div
              className="dest-img"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={homebody2} className="img-fluid pe-5"></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LowerHomeBody;
