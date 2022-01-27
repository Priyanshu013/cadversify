import React from "react";
import "../CSS/cadSignup.css";
import axios from "axios";
import { Form, Input } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsInfoCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import DateTimePicker from "react-datetime-picker";
import "../../node_modules/react-toastify/dist/ReactToastify.css";

class cadSignup extends React.Component {
  componentDidMount() {
    document.title = "Cadvocate Signup";
  }

  state = {
    cadvocate: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phonenumber: "",
      city: "",
      country: "",
      resume: [],
      photoid: [],
      profession: "",
      organization: "",
      designation: "",
      experience: "",
      aboutyourself: "",
      whycadversify: "",
      interviewdatetime: "",
      referralcode: "",
    },
    errors: {},
  };

  handleChange = (event) => {
    const cadvocate = { ...this.state.cadvocate };
    cadvocate[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ cadvocate });
  };

  handleFileChange(event) {
    const cadvocate = { ...this.state.cadvocate };
    cadvocate[event.currentTarget.name].push(event.target.files[0]);
  }

  notify = () => toast("Registration successful! You can log in now.");
  alertnotify = () => toast("Form has errors.");
  emailnotify = () => toast("Email is already registered.");
  somethingwentwrong = () =>
    toast("Something went wrong. Please try again in a few minutes.");

  handleValidation = () => {
    const cadvocate = this.state.cadvocate;
    const errors = this.state.errors;
    let formIsValid = true;

    //firstname
    if (cadvocate.firstname === "") {
      formIsValid = false;
      errors.firstname = "FirstName cannot be empty";
    } else {
      errors.firstname = "";
    }

    //lastname
    if (cadvocate.lastname === "") {
      formIsValid = false;
      errors.lastname = "LastName cannot be empty";
    } else {
      errors.lastname = "";
    }

    //email
    if (typeof cadvocate.email !== "undefined") {
      let lastAtPos = cadvocate.email.lastIndexOf("@");
      let lastDotPos = cadvocate.email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          cadvocate.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          cadvocate.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors.email = "Email is not valid";
      } else {
        errors.email = "";
      }
    }

    //password
    if (cadvocate.password === "") {
      formIsValid = false;
      errors.password = "Password cannot be empty";
    } else if (!cadvocate.password.match(/\d/)) {
      formIsValid = false;
      errors.password = "Password must contain numbers";
    } else {
      errors.password = "";
    }

    //confirmpassword
    if (cadvocate.confirmpassword === "") {
      formIsValid = false;
      errors.confirmpassword = "Confirm password cannot be empty";
    } else if (cadvocate.confirmpassword !== cadvocate.password) {
      formIsValid = false;
      errors.confirmpassword = "Passwords do not match";
    } else {
      errors.confirmpassword = "";
    }

    //phonenumber
    if (cadvocate.phonenumber === "") {
      formIsValid = false;
      errors.phonenumber = "Phone Number cannot be empty";
    } else if (!cadvocate.phonenumber.match(/^\d{10}$/)) {
      formIsValid = false;
      errors.phonenumber = "Enter a 10 digit valid number";
    } else {
      errors.phonenumber = "";
    }

    //city
    if (cadvocate.city === "") {
      formIsValid = false;
      errors.city = "City cannot be empty";
    } else {
      errors.city = "";
    }

    //country
    if (cadvocate.country === "") {
      formIsValid = false;
      errors.country = "Country cannot be empty";
    } else {
      errors.country = "";
    }

    //profession
    if (cadvocate.profession === "") {
      formIsValid = false;
      errors.profession = "Profession cannot be empty";
    } else {
      errors.profession = "";
    }

    //organization
    if (cadvocate.organization === "") {
      formIsValid = false;
      errors.organization = "Organization cannot be empty";
    } else {
      errors.organization = "";
    }

    //designation
    if (cadvocate.designation === "") {
      formIsValid = false;
      errors.designation = "Designation cannot be empty";
    } else {
      errors.designation = "";
    }

    //experience
    if (cadvocate.experience === "") {
      formIsValid = false;
      errors.experience = "Experience cannot be empty";
    } else {
      errors.experience = "";
    }

    //resume
    if (cadvocate.resume.length === 0) {
      formIsValid = false;
      errors.resume = "Please upload your resume";
    } else if (cadvocate.resume.size / 1024 / 1024 > 2) {
      formIsValid = false;
      errors.resume = "File size should be less than 2MB.";
    } else {
      errors.resume = "";
    }

    //photoid
    if (cadvocate.photoid.length === 0) {
      formIsValid = false;
      errors.photoid = "Please upload your photoid";
    } else if (cadvocate.photoid.size / 1024 / 1024 > 5) {
      formIsValid = false;
      errors.photoid = "File size should be less than 5MB.";
    } else {
      errors.photoid = "";
    }

    //aboutyourself
    if (cadvocate.aboutyourself === "") {
      formIsValid = false;
      errors.aboutyourself = "Please mention something about yourself";
    } else if (cadvocate.aboutyourself.length === 100) {
      formIsValid = false;
      errors.aboutyourself =
        "Please mention something about yourself in 20-25 words minimum.";
    } else if (cadvocate.aboutyourself.length >= 200) {
      errors.aboutyourself = "Content too long. Please shorten it.";
    } else {
      errors.aboutyourself = "";
    }

    //whycadversify
    if (cadvocate.whycadversify === "") {
      formIsValid = false;
      errors.whycadversify = "Please mention why did you choose cadversify";
    } else if (cadvocate.whycadversify.length >= 200) {
      errors.whycadversify = "Content too long. Please shorten it.";
    } else {
      errors.whycadversify = "";
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.handleValidation()) {
      const cadvocate = {
        firstName: this.state.cadvocate.firstname,
        lastName: this.state.cadvocate.lastname,
        email: this.state.cadvocate.email,
        password: this.state.cadvocate.password,
        phoneNumber: this.state.cadvocate.phonenumber,
        city: this.state.cadvocate.city,
        country: this.state.cadvocate.country,
        profession: this.state.cadvocate.designation,
        organization: this.state.cadvocate.organization,
        designation: this.state.cadvocate.designation,
        experience: this.state.cadvocate.experience,
        resume: this.state.cadvocate.resume,
        photoid: this.state.cadvocate.photoid,
        aboutYourself: this.state.cadvocate.aboutyourself,
        whyCadversify: this.state.cadvocate.whycadversify,
        interviewDateTime: this.state.cadvocate.interviewdatetime,
        referralCode: this.state.cadvocate.referralcode,
      };

      axios
        .post(`http://localhost:5000/api/cadvocates/register`, { cadvocate })
        .then((res) => {
          if (res.status === 200) {
            setTimeout(function () {
              window.location = "/cadLogin";
            }, 4000);
            this.notify();
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data == "Cadent already registered") {
            this.emailnotify();
            return;
          } else {
            this.somethingwentwrong();
            return;
          }
        });
    } else {
      this.alertnotify();
      return;
    }
  };

  render() {
    const { cadvocate } = this.state;
    const renderTooltip = (props) => (
      <Tooltip id="icon-tooltip" className="tooltip-card" {...props}>
        A Cadvocate is a jargon for any working professional who wishes to share
        their work-experiences and learnings with others
      </Tooltip>
    );

    const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000 * 2);
    const maxDate = new Date(Date.now() + 24 * 60 * 60 * 1000 * 31);

    return (
      <div className="cad-signup-background">
        <section className="py-5">
          <div className="cad-signup-card my-5">
            <section>
              <div className="container">
                <div className="cad-signup-heading text-center">
                  <h1>CADVOCATE SIGNUP</h1>
                  <div>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <p>
                        <BsInfoCircleFill className="icon-box-icons2" />
                      </p>
                    </OverlayTrigger>
                  </div>
                </div>
                <hr className="rounded" />
                <Form
                  className="form-container"
                  encType="multipart/form-data"
                  onSubmit={this.handleSubmit}
                >
                  <div>
                    <h3 className="text-center pb-3">Personal Details</h3>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          First name<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="text"
                          name="firstname"
                          placeholder="First name"
                          value={cadvocate.firstname}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.firstname}
                        </span>
                      </div>
                      <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label">
                          Last name<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="text"
                          name="lastname"
                          placeholder="Last name"
                          value={cadvocate.lastname}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.lastname}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Email<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="text"
                          name="email"
                          placeholder="Enter your Email"
                          value={cadvocate.email}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.email}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Password<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter your Password"
                          value={cadvocate.password}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.password}
                        </span>
                      </div>

                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Confirm Password
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="password"
                          name="confirmpassword"
                          placeholder="Re-enter your Password"
                          value={cadvocate.confirmpassword}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.confirmpassword}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Phone Number<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="tel"
                          name="phonenumber"
                          placeholder="Enter your Phone Number"
                          value={cadvocate.phonenumber}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.phonenumber}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          City<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="text"
                          name="city"
                          placeholder="Enter your City"
                          value={cadvocate.city}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.city}
                        </span>
                      </div>

                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Country<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1 mb-2"
                          type="text"
                          name="country"
                          placeholder="Enter your Country"
                          value={cadvocate.country}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.country}
                        </span>
                      </div>
                    </div>

                    <hr className="rounded" />

                    <h3 className="text-center pb-3">Professional Details</h3>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          What is your profession?
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1"
                          type="text"
                          name="profession"
                          placeholder="Eg: Pilot, Web developer, Professor, etc."
                          value={cadvocate.profession}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.profession}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label pt-3">
                          The Organisation you are currently working in.{" "}
                          <span className="text-danger">*</span>
                          <div style={{ color: "brown" }}>
                            (If retired, mention so, and state the name of last
                            company.)
                          </div>
                        </label>
                        <Input
                          className="mt-1"
                          type="text"
                          name="organization"
                          placeholder="Type your answer here"
                          value={cadvocate.organization}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.organization}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label pt-3">
                          Your Designation in the company
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1"
                          type="text"
                          name="designation"
                          placeholder="Type your answer here"
                          value={cadvocate.designation}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.designation}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label pt-3">
                          Years of Experience
                          <span className="text-danger">*</span>
                        </label>
                        <Input
                          className="mt-1"
                          type="text"
                          name="experience"
                          placeholder="Type your answer here"
                          value={cadvocate.experience}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.experience}
                        </span>
                      </div>
                      <p style={{ color: "brown" }}>
                        NOTE: You must be having at least 3 years of experience
                        in the field you have mentioned above. Your resume must
                        contain information about your experience.
                      </p>
                    </div>

                    <div className="form-group files color">
                      <label className="pb-2">
                        Upload your company resume{" "}
                      </label>
                      <input
                        className="mt-1 mb-3"
                        type="file"
                        name="resume"
                        className="form-control"
                        //value={cadvocate.resume}
                        onChange={this.handleFileChange.bind(this)}
                        accept=".doc,.docx,.pdf"
                      />
                      <span style={{ color: "red" }}>
                        {this.state.errors.resume}
                      </span>
                    </div>

                    <div className="form-group files color">
                      <label className="pb-2">
                        Upload your photo id ( Aadhar / Pan / License )
                      </label>
                      <Input
                        className="mt-1 mb-3"
                        type="file"
                        name="photoid"
                        className="form-control"
                        multiple=""
                        //value={cadvocate.photoid}
                        onChange={this.handleFileChange.bind(this)}
                        accept=".jpg,.jpeg,.pdf,.png"
                      />
                      <span style={{ color: "red" }}>
                        {this.state.errors.photoid}
                      </span>
                    </div>

                    <hr className="rounded" />

                    <h3 className="text-center pb-3">
                      Personality check and interview
                    </h3>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Tell us something about yourself in a few words
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1"
                          type="text"
                          name="aboutyourself"
                          placeholder="Type your answer here"
                          value={cadvocate.aboutyourself}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.aboutyourself}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-4">
                        <label className="form-control-label">
                          Why are you applying for Cadversify?
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-1"
                          type="text"
                          name="whycadversify"
                          placeholder="Type your answer here"
                          value={cadvocate.whycadversify}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.whycadversify}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <label>
                        When are you available for an video call interview with
                        us?<span className="text-danger"> *</span>
                      </label>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Enter Date and time
                          <span className="text-danger"> *</span>
                        </label>
                        <DateTimePicker
                          name="interviewdatetime"
                          value={cadvocate.interviewdatetime}
                          dayPlaceholder="Day"
                          hourPlaceholder="Hour"
                          minutePlaceholder="Min"
                          yearPlaceholder="Year"
                          monthPlaceholder="Month"
                          minDate={minDate}
                          maxDate={maxDate}
                          onChange={(event) => {
                            const cadvocate = { ...this.state.cadvocate };
                            cadvocate.interviewdatetime = event;
                            this.setState({ cadvocate });
                          }}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.interviewdate}
                        </span>
                      </div>
                    </div>

                    <hr className="rounded" />

                    <div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label">
                          Referral code (optional)
                        </label>
                        <Input
                          className="mt-1"
                          type="code"
                          name="referralcode"
                          placeholder="Type your answer here"
                          value={cadvocate.referralcode}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.referralcode}
                        </span>
                      </div>
                    </div>
                    <div className="text-center pt-3">
                      <label className="mt-1">
                        <input type="checkbox" required></input> I agree to the{" "}
                        <Link to="/Termsandconditions">
                          terms and conditions
                        </Link>
                      </label>
                      <br />
                      <button
                        className="btn-lg btn-dark mt-4"
                        type="submit"
                        //onClick={this.handleSubmit}
                      >
                        Sign up
                      </button>
                      <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                      />
                      <br />
                      Already have an account?{" "}
                      <Link to="/cadlogin">Log in!</Link>
                    </div>
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

export default cadSignup;
