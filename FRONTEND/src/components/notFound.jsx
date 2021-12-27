import React from "react";
import "../CSS/notFound.css";
import notfound from "../site_assets/notfound.png";
import { NavLink } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound-container">
        <span>
          <img src={notfound} className="not-found-img" />
          <p className="notfound-text">
            The page you're looking for is not found. Please redirect to
            <NavLink to="/"> home. </NavLink>
          </p>
        </span>
      </div>
    );
  }
}

export default NotFound;
