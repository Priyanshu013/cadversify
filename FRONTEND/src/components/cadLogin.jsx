import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import "../CSS/cadLogin.css";
import sitelogo from "../site_assets/brand_logo_1.png";

class cadLogin extends Component {
  render() {
    Aos.init();
    return (
      <section className="cad-signup-background py-5">
        <div
          data-aos="fade-up"
          data-aos-delay=""
          data-aos-duration="500"
          className=" login-card my-5 "
        >
          <section className="container-fluid">
            <Form className="form-container">
              <div className="form-group">
                <NavLink className="navbar-brand login-logo" to="/">
                  <img src={sitelogo} className="navbar-brand" />
                </NavLink>
                <h1 className="font-weight-bold pb-4">Cadvocate Login</h1>
                <FormGroup>
                  <Input type="email" placeholder="Enter your Email" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" placeholder="Enter your Password" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-3">
                  Or continue with you social account
                </div>
                <GoogleLoginButton className="mt-3 mb-3" />
                <FacebookLoginButton className="mt-3 mb-3" />
                <div className="text-center">
                  <Link to="/cadSignup">Sign up</Link>
                  <span className="p-2">|</span>
                  <Link to="/forgot-password">Forgot password</Link>
                </div>
              </div>
            </Form>
          </section>
        </div>
      </section>
    );
  }
}

export default cadLogin;
