import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "../CSS/lowerHomeBody.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homebody1 from "../site_assets/homebody1.jpg";
import homebody2 from "../site_assets/homebody2.jpg";
import slider1 from "../site_assets/home-slider-gif1(1).gif";
import slider2 from "../site_assets/home-slider-gif2.gif";
import slider3 from "../site_assets/slider3.mp4";
import slidergifswipe from "../site_assets/home-slider-gifswipe.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Typewriter from "typewriter-effect";
import { CgEditBlackPoint } from "react-icons/cg";
import { CgChevronDoubleRightR } from "react-icons/cg";

class LowerHomeBody extends React.Component {
  render() {
    const bannerSettings = {
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      //autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    };

    Aos.init();
    return (
      <section className=" home-background-low pt-5">
        <div className="container text-center ">
          <div>
            <div className="row justify-content-center mb-5">
              <div className="my-auto">
                <div className="quote-carding mb-10">
                  <div className="card-body px-5">
                    <div className="text-warning fs-2 fst-italic">
                      Our motto-
                    </div>
                    <figcaption className="quote-text">
                      You dream, we envision
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-info-section">
          <div className="row px-5 pt-5">
            <div className="img-txt-alignment">
              <div
                className="dest-img"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img src={homebody1} className="img-fluid" />
              </div>
              <div
                className="home-content align-items-center"
                data-aos="fade-left"
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
                    <CgEditBlackPoint className="lower-home-bullets" /> Search
                    for the career which you want to go ahead with.
                    <br />
                    <CgEditBlackPoint className="lower-home-bullets" /> Choose a
                    suitable professional who is already working in that field
                    for years- based upon your requirements.
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
            <div className="txt-img-alignment">
              <div
                className="home-content d-flex align-items-center"
                data-aos="fade-right"
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
                    Find life-long mentors who will guide you on one-to-one
                    video call sessions. You can also ask your friends who share
                    same aspirations as you to join-in your session, and split
                    up the bills!
                  </p>
                  <p className="py-3">
                    <CgEditBlackPoint className="lower-home-bullets" />
                    Build connections with people working in big MNCs, who may
                    seem to be impossible to get in touch with, all thanks to
                    our trusted cadvocates from 108 countries across the globe.
                  </p>
                </div>
              </div>
              <div
                className="dest-img"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <img src={homebody2} className="img-fluid "></img>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <Slider {...bannerSettings}>
            <div className="row px-5">
              <div className="d-sm-flex">
                <div className="home-content d-flex align-items-center">
                  <img src={slider1} className="img-fluid"></img>
                </div>
                <div className="home-slider-text">
                  About 70% of people are unhappy at their work place and would
                  not recommend their own company to a friend.
                  <br />
                  Be bold and Swipe left
                  <img src={slidergifswipe} className="homeslidergifswipe" />
                </div>
              </div>
            </div>

            <div className="row px-5">
              <div className="d-sm-flex">
                <div className="home-content d-flex align-items-center">
                  <img src={slider2} className="img-fluid"></img>
                </div>
                <div className="home-slider-text">
                  How about having a MENTOR?
                  <br />
                  Who is there to guide and correct you from their experiences,
                  in your career.
                  <img src={slidergifswipe} className="homeslidergifswipe" />
                </div>
              </div>
            </div>
            <div className="row px-5">
              <div className="d-sm-flex">
                <div className="home-content d-flex align-items-center">
                  <video width="620" height="480" controls>
                    <source src={slider3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="home-slider-text">
                  Still unsure?
                  <br /> No problem! Watch this video to understand how it
                  works.
                  <br />
                  <div>
                    <span>
                      <NavLink to="/oppsignup">
                        <button className="btn btn-primary btn-lg m-4 mt-5">
                          Sign up
                        </button>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink to="live-sessions">
                        <button className="btn btn-primary btn-lg m-4 mt-5">
                          Live sessions
                        </button>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink to="about">
                        <button className="btn btn-primary btn-lg m-4 mt-5">
                          About us
                        </button>
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default LowerHomeBody;
