import React from "react";
import "../CSS/footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Button from "@restart/ui/esm/Button";
import BackToTop from "react-back-to-top-button";
import { TiArrowUpThick } from "react-icons/ti";

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <BackToTop showAt={100} speed={300}>
          <span className="btt-btn">
            <TiArrowUpThick />
          </span>
        </BackToTop>
        <section className="mt-1 ms-5 row">
          <div className="col-sm-5">
            <div>
              <p className="footer-title-main">A note from the founder</p>
            </div>
            <div className="foot-note">
              <p>
                Confused about your career? <br />
                That’s where I was a few years back. I wanted to <br />
                talk to someone who could give me the right advice based <br />
                upon their own experience in the field which I then
                <br />
                wanted to be in, but found no one compatible to talk to.
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
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook className="social-icons-deco" />
                </a>
              </span>
              <span className="social-icons">
                <FaInstagramSquare className="social-icons-deco" />
              </span>
              <span className="social-icons">
                <FaLinkedin className="social-icons-deco" />
              </span>
              <span className="social-icons">
                <FaTwitter className="social-icons-deco" />
              </span>
            </div>
          </div>
          <div className="col-sm">
            <div>
              <p className="footer-title-main">Quick Links</p>
            </div>
            <div className="row pb-3">
              <div className="col-sm">
                <div>
                  <Link className="ps-2 quick-link" to="/about">
                    About
                  </Link>
                </div>
                <div>
                  <NavLink className="ps-2 quick-link" to="/TermsAndConditions">
                    Terms & conditions
                  </NavLink>
                </div>
              </div>
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
              <div>
                <Link
                  to={{ pathname: "https://cadversify.blogspot.com/" }}
                  target="_blank"
                  className="ps-2 quick-link"
                >
                  View cadversify blog
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center copyright">
          © 2021 Copyright: Cadversify
        </div>
      </footer>
    );
  }
}

export default Footer;
