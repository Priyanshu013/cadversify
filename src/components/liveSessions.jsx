import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./CSS/liveSessions.css";

class LiveSessions extends React.Component {
  render() {
    Aos.init();
    return (
      <div className="livesession-bg">
        <div className="text-center">
          <div
            className="contact-form"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h2>Sign in to join the Live Session</h2>
            <form>
              <p>Email</p>
              <input placeholder="Enter Email" type="email" />
              <p>Password</p>
              <input placeholder="Enter Password" type="password" />{" "}
              <p>
                <input type="checkbox" />
                Remember Me
              </p>
              <p>
                <input type="submit" defaultValue="Sign in" />

                <Link to="" style={{ textAlign: "center", fontSize: 20 }}>
                  New User?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveSessions;
