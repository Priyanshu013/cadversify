import React from "react";
import "../CSS/oppSignup.css";
import { Form, Input } from "reactstrap";
import { NavLink, Link, Redirect } from "react-router-dom";
import axios from "axios";

class oppSignup extends React.Component {
  state = {
    cadent: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phonenumber: "",
      designation: "",
      organization: "",
      futureaspirations: "",
      referralcode: "",
    },
  };

  handleChange = (event) => {
    const cadent = { ...this.state.cadent };
    cadent[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ cadent });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const cadent = {
      firstName: this.state.cadent.firstname,
      lastName: this.state.cadent.lastname,
      email: this.state.cadent.email,
      password: this.state.cadent.password,
      phoneNumber: this.state.cadent.phonenumber,
      designation: this.state.cadent.designation,
      organization: this.state.cadent.organization,
      futureAspirations: this.state.cadent.futureaspirations,
      referralCode: this.state.cadent.referralcode,
    };

    axios.post(`http://localhost:5000/api/cadents`, { cadent }).then((res) => {
      console.log(res);
      console.log(res.data);
      <Redirect to="" />;
    });
  };

  render() {
    const { cadent } = this.state;
    return (
      <div className="opp-signup-background">
        <section className="py-5">
          <div className="opp-signup-card my-5">
            <section>
              <div className="container">
                <div className="signup-heading text-center">
                  <h1>CADENT SIGNUP</h1>
                </div>
                <hr className="rounded" />
                <Form onSubmit={this.handleSubmit} className="form-container">
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
                          name="firstname"
                          placeholder="First name"
                          //onBlur="validate(1)"
                          value={cadent.firstname}
                          onChange={this.handleChange}
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
                          name="lastname"
                          placeholder="Last name"
                          //onBlur="validate(2)"
                          value={cadent.lastname}
                          onChange={this.handleChange}
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
                          name="email"
                          placeholder="Enter your Email"
                          //onBlur="validate(1)"
                          value={cadent.email}
                          onChange={this.handleChange}
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
                          name="password"
                          placeholder="Enter your Password"
                          //onBlur="validate(1)"
                          value={cadent.password}
                          onChange={this.handleChange}
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
                          name="confirmpassword"
                          placeholder="Re-enter your Password"
                          //onBlur="validate(2)"
                          value={cadent.confirmpassword}
                          onChange={this.handleChange}
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
                          name="phonenumber"
                          placeholder="Enter your Phone Number"
                          //onBlur="validate(1)"
                          value={cadent.phonenumber}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>

                    <h3 className="text-center">Professional Details</h3>
                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-2">
                        <label className="form-control-label px-1">
                          Designation<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 mb-3"
                          type="text"
                          name="designation"
                          placeholder="Current education/working position"
                          //onBlur="validate(1)"
                          value={cadent.designation}
                          onChange={this.handleChange}
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
                          name="organization"
                          placeholder="School/college/Company name"
                          //onBlur="validate(1)"
                          value={cadent.organization}
                          onChange={this.handleChange}
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
                          name="futureaspirations"
                          placeholder="Future aspirations(Pilot/Doctor/etc.)"
                          //onBlur="validate(1)"
                          value={cadent.futureaspirations}
                          onChange={this.handleChange}
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
                          name="referralcode"
                          placeholder="Type your answer here"
                          //onBlur="validate(1)"
                          value={cadent.referralcode}
                          onChange={this.handleChange}
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
                      <button
                        //onClick={(event) => this.handleSubmit(event)}
                        type="submit"
                        className="btn-lg btn-dark btn-block mb-2"
                      >
                        Sign up
                      </button>
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
