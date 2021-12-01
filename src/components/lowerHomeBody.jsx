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
        <div className="row">
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
        <div className="row">
          <div className=" d-sm-flex">
            <div className="dest-img">
              <img src={homebody3} className="img-fluid"></img>
            </div>
            <div className="main d-flex align-items-center">
              <div className="home-text-right">
                <div className="d-flex">
                  <div className="top-text">
                    <h3>Live Webinars</h3>
                  </div>
                </div>
                <p>
                  Want to watch live sessions hosted by professionals? We got
                  you. Head to the live sessions page and choose the field in
                  which you aspire to get into. Among the list of the live
                  sessions that come up, which are hosted by our trusted
                  cadvocates, choose the one which you would want to see. Not
                  just this, but you can also chat with the professional during
                  the live sessions, and get your doubts cleared. And yes,
                  that's absolutely free of cost!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" d-sm-flex">
            <div className="main d-flex align-items-center">
              <div>
                <div className="top-text d-flex">
                  <h3>One-on-one sessions </h3>
                </div>
                <p>
                  Connect to verified professionals from a field on a one-on-on
                  video call session, enabling a personalised and an exclusive
                  experience to talk with some of the greatest minds out there!
                  Also, send a list of questions before hand, so that you don't
                  have to spend time while on call explaining your questions to
                  the cadvocate. You can also bookmark your favourite
                  cadvocates, so that you can connect with them for as many
                  times as you wish, and build life-long connections.
                </p>
              </div>
            </div>
            <div className="dest-img">
              <img src={homebody4} className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" d-sm-flex">
            <div className="dest-img">
              <img src={homebody5} className="img-fluid"></img>
            </div>
            <div className="main d-flex align-items-center">
              <div className="home-text-right">
                <div className="d-flex">
                  <div className="top-text">
                    <h3>Group meeting</h3>
                  </div>
                </div>
                <p>
                  Connect to a working professional along with your friends who
                  share similar visions as you. Clear all your doubts together
                  with up to 2 of your friends, and split up the bills! Not only
                  this, you’ll be getting a special referral bonus if you get a
                  new friend on the platform, which you can spend as talktime to
                  be used while talking to professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div className=" d-sm-flex">
            <div className="main d-flex align-items-center">
              <div>
                <div className="d-flex">
                  <div className="top-text">
                    <h3>Connect your first call for free!</h3>
                  </div>
                </div>
                <p>
                  Experience the exclusive opportunity to find a mentor for
                  free! Get Rs. 200 of free video call talktime with your
                  favourite professional. Grab this limited period opportunity
                  right now. What are you waiting for?
                </p>
                <p className="pt-3">
                  <Link
                    to="/oppLogin"
                    className="btn btn-warning my-2 head-button-low block"
                  >
                    Sign up for free now! >>
                  </Link>
                </p>
              </div>
            </div>
            <div className="dest-img">
              <img src={homebody6} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LowerHomeBody;
