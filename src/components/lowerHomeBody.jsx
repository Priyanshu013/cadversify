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
import { Carousel } from "react-responsive-carousel";

class LowerHomeBody extends React.Component {
  render() {
    Aos.init();
    return (
      <section className=" home-background-low pt-5">
        <div className="container text-center ">
          <div>
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
        <div className="row px-5 pt-5">
          <div className=" d-flex">
            <div
              className="dest-img"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={homebody1} className="img-fluid"></img>
            </div>
            <div
              className="home-content d-flex align-items-center"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div>
                <div className="top-text">
                  <h3>What is Cadversify?</h3>
                </div>
                <p>
                  <li>
                    It is a platform which connects people who seek the right
                    mentorship, to working professionals from different domains
                    all across the world.
                  </li>
                  <li className="pt-3">
                    Here's how you'll do it:
                    <ol>
                      <li>
                        Search for the career which you want to go ahead with
                      </li>
                      <li>
                        Choose a suitable professional who is already working in
                        that field for years- based upon your requirements,
                        don't forget to read the reviews.
                      </li>
                      <li>Choose a time slot and send the meeting proposal.</li>
                    </ol>
                  </li>
                  ...and you're all set to build connections with amazing
                  personalities and learn from their own real-life experiences.
                  <br /> So, what are you waiting for?
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
              <div>
                <div className="d-flex top-text">
                  <h3>Why Cadversify?</h3>
                </div>
                <p>
                  <li className="pt-3 pb-4">
                    It's the largest community of experienced professionals who
                    are happy to share their years of experiences with people
                  </li>
                  <li className="pt-3 pb-4">
                    Find life-long mentors who will guide you on one-to-one
                    video call sessions. You can also ask your friends who share
                    same aspirations as you to join-in your session.
                  </li>
                  <li className="pt-3 pb-4">
                    Build connections with people working in big MNCs, who may
                    seem to be impossible to get in touch with, all thanks to
                    our trusted cadvocates from 108 countries across the globe.
                  </li>
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
