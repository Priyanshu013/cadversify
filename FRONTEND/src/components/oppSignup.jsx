import React from "react";
import "../CSS/oppSignup.css";
import { Form, Input } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
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
    errors: {},
  };

  handleChange = (event) => {
    const cadent = { ...this.state.cadent };
    cadent[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ cadent });
  };

  passwordToggle() {
    const x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  confirmpasswordToggle() {
    const y = document.getElementById("confirmpassword");

    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }

  handleValidation() {
    const cadent = this.state.cadent;
    const errors = this.state.errors;
    let formIsValid = true;

    //firstname
    if (cadent.firstname === "") {
      formIsValid = false;
      errors.firstname = "FirstName cannot be empty";
    } else {
      errors.firstname = "";
    }

    //lastname
    if (cadent.lastname === "") {
      formIsValid = false;
      errors.lastname = "LastName cannot be empty";
    } else {
      errors.lastname = "";
    }

    //email
    if (typeof cadent.email !== "undefined") {
      let lastAtPos = cadent.email.lastIndexOf("@");
      let lastDotPos = cadent.email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          cadent.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          cadent.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors.email = "Email is not valid";
      } else {
        errors.email = "";
      }
    }

    //password
    if (cadent.password === "") {
      formIsValid = false;
      errors.password = "Password cannot be empty";
    } else if (!cadent.password.match(/\d/)) {
      formIsValid = false;
      errors.password = "Password must contain numbers";
    } else {
      errors.password = "";
    }

    //confirmpassword
    if (cadent.confirmpassword === "") {
      formIsValid = false;
      errors.confirmpassword = "Confirm password cannot be empty";
    } else if (cadent.confirmpassword !== cadent.password) {
      formIsValid = false;
      errors.confirmpassword = "Passwords do not match";
    } else {
      errors.confirmpassword = "";
    }

    //phonenumber
    if (cadent.phonenumber === "") {
      formIsValid = false;
      errors.phonenumber = "Phone Number cannot be empty";
    } else if (!cadent.phonenumber.match(/^\d{10}$/)) {
      formIsValid = false;
      errors.phonenumber = "Enter a 10 digit valid number";
    } else {
      errors.phonenumber = "";
    }

    //designation
    if (cadent.designation === "") {
      formIsValid = false;
      errors.designation = "Designation cannot be empty";
    } else {
      errors.designation = "";
    }

    //organization
    if (cadent.organization === "") {
      formIsValid = false;
      errors.organization = "Organization cannot be empty";
    } else {
      errors.organization = "";
    }

    //futureaspirations
    if (cadent.futureaspirations === "") {
      formIsValid = false;
      errors.futureaspirations = "Future Aspirations cannot be empty";
    } else {
      errors.futureaspirations = "";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted. You can log in now");
    } else {
      alert("Form has errors.");
      return;
    }

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

    axios
      .post(`http://localhost:5000/api/cadents/register`, { cadent })
      .then((res) => {
        if (res.status === 200) {
          window.location = "/oppLogin";
        }
      })
      .catch((err) => {
        console.log(err);
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
                          value={cadent.firstname}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.firstname}
                        </span>
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
                          value={cadent.lastname}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.lastname}
                        </span>
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
                          value={cadent.email}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.email}
                        </span>
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
                          id="password"
                          placeholder="Enter your Password"
                          value={cadent.password}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.password}
                        </span>
                        <label>
                          <input
                            type="checkbox"
                            onClick={this.passwordToggle}
                          />{" "}
                          Show Password
                        </label>
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
                          id="confirmpassword"
                          placeholder="Re-enter your Password"
                          value={cadent.confirmpassword}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.confirmpassword}
                        </span>
                        <label>
                          <input
                            type="checkbox"
                            onClick={this.confirmpasswordToggle}
                          />{" "}
                          Show Password
                        </label>
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
                          value={cadent.phonenumber}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.phonenumber}
                        </span>
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
                          value={cadent.designation}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.designation}
                        </span>
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
                          value={cadent.organization}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.organization}
                        </span>
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
                          value={cadent.futureaspirations}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.futureaspirations}
                        </span>
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
