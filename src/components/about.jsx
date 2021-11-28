import React from "react";
import aboutlogo from "./site_assets/brand_logo_1.png";
import { NavLink, Link } from "react-router-dom";
import "./CSS/about.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Priyanshu from "./site_assets/priyanshu.jpg";
import Aniket from "./site_assets/aniket.jpg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

class About extends React.Component {
  render() {
    Aos.init();
    return (
      <div>
        <div className="d-flex justify-content-center about_top_bg container-fluid">
          <div data-aos="fade-up" data-aos-duration="1500">
            <p className="about_header">About us</p>
          </div>
        </div>
        <section className="about_lower_bg">
          <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
            <p id="title">WHO ARE WE</p>
            <p id="sub-title">
              We're the students of Thakur College of Science and College,
              Mumbai University. As students, we truly resonate with your
              problem of finding the right mentor to get you going, and that's
              why we built Cadversify!
            </p>
          </div>
          <div>
            <div
              className="container-fluid pt-5 col d-flex justify-content-center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="row">
                <div className="col-12 mt-3">
                  <div className="card-horizontal">
                    <div className="profile-card">
                      <img
                        className="profile-card profile_image"
                        src={Priyanshu}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body ps-3">
                      <h4 className="card-title">Priyanshu Jain</h4>
                      <p className="card-text">Founder & CEO, Cadversify.</p>
                      <p className="profile-desc">
                        I read this somewhere-
                        <br />
                        "If you have a problem but couldn't find a solution,
                        create it." <br /> This motivated me to find a solution
                        to a problem which every student faces- career
                        uncertainity. How about finding a mentor who could guide
                        you like no other? Give it a shot!
                      </p>
                      <div>
                        <a href="https://www.instagram.com/priyanshu_s_jain/">
                          <FaInstagramSquare className="iconStyle" />
                        </a>
                        <a href="https://www.facebook.com/priyanshu.jain.94651">
                          <FaFacebook className="iconStyle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="container-fluid pt-5 col d-flex justify-content-center"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="row ">
                <div className="col-12 mt-3">
                  <div className="card-horizontal">
                    <div className="profile-card">
                      <img
                        className="profile-card profile_image "
                        src={Aniket}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body ps-3">
                      <h4 className="card-title">Aniket Poojari</h4>
                      <p className="card-text">Web Developer, Cadversify.</p>
                      <p className="profile-desc">
                        I read this somewhere-
                        <br />
                        "If you have a problem but couldn't find a solution,
                        create it." <br /> This motivated me to find a solution
                        to a problem which every student faces- career
                        uncertainity. How about finding a mentor who could guide
                        you like no other? Give it a shot!
                      </p>
                      <div>
                        <a href="">
                          <FaInstagramSquare className="iconStyle" />
                        </a>
                        <a href="">
                          <FaFacebook className="iconStyle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
