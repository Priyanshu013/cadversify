import React from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import "./liveSessions.css";

class LiveSessions extends React.Component {
  render() {
    Aos.init();
    return (
             <div className="box">
        <h2>Sign in to join the Live Session</h2>
        <form action>
          <p>Email</p><input placeholder="Enter Email" type="email" />
          <p>Passwrod</p><input placeholder="Enter Password" type="password" /> <input type="submit" defaultValue="Sign in" />
          <p><input type="checkbox" />Remember Me</p>
          <p><Link
                  to=""
                  style={{textAlign: "center",fontSize: 20 }}
                >
                  New User?
                </Link></p>
        </form>
      </div>
    );
  }
}



export default LiveSessions;
