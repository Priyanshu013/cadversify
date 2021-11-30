import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "../CSS/lowerHomeBody.css";
import testimage from "../site_assets/sunset.jpg";

class LowerHomeBody extends React.Component {
  render() {
    Aos.init();
    return (
      <section
        className="vh-50 home-background-low pt-5"
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

        <div className="row no-gutters d-flex align-items-stretch">
          <div className=" d-flex align-self-stretch">
            <div className="places d-sm-flex align-items-stretch">
              <div className="dest-img img my-10">
                <img src={testimage} className="img-fluid"></img>
              </div>
              <div className="main d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <div className="top-text">
                      <h3>What is Cadversify?</h3>
                    </div>
                  </div>
                  <p>
                    It is a platform which connects students to working
                    professionals from different domains all across the world.
                    Search for the career which you want to go ahead with,
                    choose a suitable professional, book an appointment, and
                    you’re all set to have deep conversations and know real-life
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex align-items-stretch">
          <div className=" d-flex align-self-stretch">
            <div className="places d-sm-flex align-items-stretch">
              <div className="dest-img img my-10 order-md-last">
                <img src={testimage} className="img-fluid"></img>
              </div>
              <div className="main d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <div className="top-text">
                      <h3>Why Cadversify?</h3>
                    </div>
                  </div>
                  <p>
                    It is the largest community of experienced professionals who
                    are happy to share their years of experiences with people
                    who are planning to start off their career with the right
                    mentorship and have a clear idea of real-life scenarios that
                    will once become a daily routine for them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex align-items-stretch">
          <div className=" d-flex align-self-stretch">
            <div className="places d-sm-flex align-items-stretch">
              <div className="dest-img img my-10">
                <img src={testimage} className="img-fluid"></img>
              </div>
              <div className="main d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <div className="top-text">
                      <h3>What is Cadversify's vision?</h3>
                    </div>
                  </div>
                  <p>
                    Our vision is to eliminate the fear of deciding a career in
                    a person’s mind and give them an opportunity to make a bold
                    move, talk to professionals from all over the world, build
                    connections, and get a clear understanding of what’s right
                    for them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex align-items-stretch">
          <div className=" d-flex align-self-stretch">
            <div className="places d-sm-flex align-items-stretch">
              <div className="dest-img img my-10 order-md-last">
                <img src={testimage} className="img-fluid"></img>
              </div>
              <div className="main d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <div className="top-text">
                      <h3>One-on-one sessions </h3>
                    </div>
                  </div>
                  <p>
                    Connect to verified professionals from a field on a
                    one-on-on video call session, enabling a personalised and an
                    exclusive experience to talk with some of the greatest minds
                    out there!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex align-items-stretch">
          <div className=" d-flex align-self-stretch">
            <div className="places d-sm-flex align-items-stretch">
              <div className="dest-img img my-10">
                <img src={testimage} className="img-fluid"></img>
              </div>
              <div className="main d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <div className="top-text">
                      <h3>Group meeting</h3>
                    </div>
                  </div>
                  <p>
                    Connect to a working professional along with your friends
                    who share similar visions as you. Clear all your doubts
                    together with up to 3 of your friends, and split up the
                    bills! Not only this, you’ll be getting a special referral
                    bonus if you get a new friend on the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters d-flex align-items-stretch">
          <div className=" d-flex align-self-stretch">
            <div className="places d-sm-flex align-items-stretch">
              <div className="dest-img img my-10 order-md-last">
                <img src={testimage} className="img-fluid"></img>
              </div>
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
            </div>
          </div>
        </div>
        <div></div>
      </section>
    );
  }
}

export default LowerHomeBody;
