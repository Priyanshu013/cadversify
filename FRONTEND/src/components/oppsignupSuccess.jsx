import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "../CSS/oppsignupSuccess.css";
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
                <h4 className="success-card-title">Welcome to Cadversify!</h4>
                <p className="success-desc">
                  A platform where you can find your dream mentor!
                  <br />
                  Watch live sessions, connect on one-to-one video calls with
                  professionals or group calls along with your friends, take up
                  high quality courses and much more!
                  <br />
                  <Link to="/home">
                    <button className="btn-lg btn-primary my-4 mx-2">
                      Home <FaExternalLinkAlt />
                    </button>
                  </Link>
                  <Link
                    to={{ pathname: "https://cadversify.blogspot.com/" }}
                    target="_blank"
                  >
                    <button className="btn-lg btn-primary my-4 mx-2">
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
