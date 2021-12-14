import React from "react";
import "../CSS/oppSignup.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class oppSignup extends React.Component {
  render() {
    return (
      <div className="signup-background">
        <section className="py-5">
          <div className="opp-signup-card my-5">
            <section>
              <div className="container">
                <div className="title text-center">
                  <h1>NEW USER SIGNUP</h1>
                </div>
                <hr className="rounded" />
                <Form className="form-container" action="#">
                  <div>
                    <div className="row">
                      <h3 className="text-center">Personal Details</h3>
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          First name<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="First name"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-4 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Last name<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="text"
                          id="lname"
                          name="lname"
                          placeholder="Last name"
                          onblur="validate(2)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Email<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="email"
                          placeholder="Enter your Email"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Password<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="password"
                          placeholder="Enter your Password"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Confirm Password
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="password"
                          placeholder="Re-enter your Password"
                          onblur="validate(2)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Phone Number<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="number"
                          placeholder="Enter your Phone Number"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Designation<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="text"
                          placeholder="Current education/working position"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Organization<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="text"
                          placeholder="School/college/Company name"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Future aspirations
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="text"
                          placeholder="Future aspirations(Pilot/Doctor/etc.)"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Referral code (optional)
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="code"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>
                    <p className="text-center pt-3">
                      <label className="mb-2">
                        <input type="checkbox" required></input> I agree to the{" "}
                        <Link to="/Termsandconditions">
                          terms and conditions
                        </Link>
                      </label>
                      <br />
                      <Button className="btn-lg btn-dark btn-block mb-2">
                        Sign up
                      </Button>
                      <br />
                      Already have an account?{" "}
                      <Link to="/oppLogin">Log in!</Link>
                    </p>
                  </div>
                </Form>
                <div></div>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default oppSignup;
