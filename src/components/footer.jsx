import React from "react";
import "../CSS/footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavBar from "./navBar";

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <NavLink className="btn btn-secondary btt-btn" to="">
          Back to top
        </NavLink>
        <section className=" pt-4 ms-5 row">
          <div className="col-sm">
            <div>
              <p className="footer-title-main">A note from the founder</p>
            </div>
            <div className="foot-note">
              <p>
                Confused about your career? <br />
                That’s where I was a few years back. I wanted to <br />
                talk to someone who could give me the right advice based <br />
                upon their own experience in the field in which I then
                <br />
                wanted to be, but found no one compatible to talk to.
                <br />
                At the time, I wasn’t lucky enough to have a platform like
                <br />
                Cadversify.com to find a mentor, <br />
                BUT YOU ARE!
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div>
              <p className="footer-title-main">Contact us</p>
            </div>
            <div>
              <span>
                <BsFillTelephoneFill className="footer-icons" />
              </span>
              <span className="ps-2 foot-note">Phone: +91 9869315422</span>
            </div>
            <div>
              <span>
                <MdEmail className="footer-icons" />
              </span>
              <span className="ps-2 foot-note">
                Email: Cadversify@gmail.com
              </span>
            </div>
            <div className="ps-2 py-3">
              <span className="social-icons">
                <FaFacebook />
              </span>
              <span className="social-icons">
                <FaInstagramSquare />
              </span>
              <span className="social-icons">
                <FaLinkedin />
              </span>
              <span className="social-icons">
                <FaTwitter />
              </span>
            </div>
            <div>
              <p className="footer-title-main">Quick Links</p>
            </div>
            <div className="row pb-3">
              <div className="col-sm">
                <div>
                  <NavLink className="ps-2 quick-link" to="/about">
                    About
                  </NavLink>
                </div>
                <div>
                  <NavLink className="ps-2 quick-link" to="">
                    Terms & conditions
                  </NavLink>
                </div>
              </div>
              <div className="col-sm">
                <div>
                  <NavLink className="ps-2 quick-link" to="">
                    Privacy Policy
                  </NavLink>
                </div>
                <div>
                  <NavLink className="ps-2 quick-link" to="">
                    Refund & cancellation policy
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center py-2 copyright">
          © 2021 Copyright: Cadversify
        </div>
      </footer>
    );
  }
}

export default Footer;
