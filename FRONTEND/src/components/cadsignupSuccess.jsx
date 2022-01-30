import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "../CSS/cadsignupSuccess.css";
import { FaExternalLinkAlt } from "react-icons/fa";

class signupSuccess extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center signup-success-background">
        <div className="row my-5">
          <div className="col-12 my-5">
            <div className="signupsuccess-card">
              <div className="logo">
                <IoMdCheckmarkCircleOutline className="" />
              </div>
              <div className="card-body ps-3">
                <h4 className="success-card-title">
                  Your application has been submitted
                </h4>
                <p className="success-desc">
                  You will shortly hear from us about your interview.
                  <br />
                  Meanwhile, you may prepare yourself. We will be observing your
                  personality, communication skills and examine your
                  professionalism.
                  <br />
                  <Link
                    to={{ pathname: "https://cadversify.blogspot.com/" }}
                    target="_blank"
                  >
                    <button className="btn-lg btn-primary my-4">
                      View cadversify blogs <FaExternalLinkAlt />
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signupSuccess;
