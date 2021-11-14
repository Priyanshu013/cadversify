import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./CSS/lowerHomeBody.css";

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
                <div className="quote-carding">
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
      </section>
    );
  }
}

export default LowerHomeBody;
