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
import FormData, { getHeaders } from "form-data";

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
      resume: "",
      photoid: "",
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
    this.setState({ cadvocate: cadvocate });
  };

  handleFileChange(event) {
    const cadvocate = { ...this.state.cadvocate };
    cadvocate[event.currentTarget.name] = event.target.files[0];
    this.setState({ cadvocate: cadvocate });
  }

  notify = () => toast("Registration successful!");
  errornotify = () => toast("Form has errors.");
  emailnotify = () => toast("Email is already registered.");
  somethingwentwrong = () => toast("Something went wrong.");

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

  handleValidation = () => {
    const cadvocate = this.state.cadvocate;
    const errors = this.state.errors;
    let formIsValid = true;

    //firstname
    if (cadvocate.firstname === "") {
      formIsValid = false;
      errors.firstname = "First Name cannot be empty.";
    } else if (cadvocate.firstname.length >= 20) {
      formIsValid = false;
      errors.firstname = "First Name length is too long.";
    } else {
      errors.firstname = "";
    }

    //lastname
    if (cadvocate.lastname === "") {
      formIsValid = false;
      errors.lastname = "LastName cannot be empty";
    } else if (cadvocate.lastname.length >= 20) {
      formIsValid = false;
      errors.lastname = "Last Name length is too long.";
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
    } else if (cadvocate.password.length <= 5) {
      formIsValid = false;
      errors.password = "Password length is too short.";
    } else if (cadvocate.password.length >= 30) {
      formIsValid = false;
      errors.password = "Password length is too long.";
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
    } else if (cadvocate.city.length >= 20) {
      formIsValid = false;
      errors.firstname = "City length is too long.";
    } else {
      errors.city = "";
    }

    //country
    if (cadvocate.country === "") {
      formIsValid = false;
      errors.country = "Country cannot be empty";
    } else if (cadvocate.country.length >= 20) {
      formIsValid = false;
      errors.firstname = "Country length is too long.";
    } else {
      errors.country = "";
    }

    //profession
    if (cadvocate.profession === "") {
      formIsValid = false;
      errors.profession = "Profession cannot be empty";
    } else if (cadvocate.profession.length >= 30) {
      formIsValid = false;
      errors.firstname = "Profession length is too long.";
    } else {
      errors.profession = "";
    }

    //organization
    if (cadvocate.organization === "") {
      formIsValid = false;
      errors.organization = "Organization cannot be empty";
    } else if (cadvocate.organization.length >= 20) {
      formIsValid = false;
      errors.organization = "Organization length is too long.";
    } else {
      errors.organization = "";
    }

    //designation
    if (cadvocate.designation === "") {
      formIsValid = false;
      errors.designation = "Designation cannot be empty";
    } else if (cadvocate.designation.length >= 20) {
      formIsValid = false;
      errors.designation = "Designation length is too long.";
    } else {
      errors.designation = "";
    }

    //experience
    if (cadvocate.experience === "") {
      formIsValid = false;
      errors.experience = "Experience cannot be empty";
    } else if (isNaN(cadvocate.experience)) {
      formIsValid = false;
      errors.experience = "Input should be a number";
    } else if (cadvocate.experience.length >= 20) {
      formIsValid = false;
      errors.experience = "Experience length is too long.";
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
    } else if (cadvocate.aboutyourself.length <= 100) {
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
      let formData = new FormData();

      formData.append("firstName", this.state.cadvocate.firstname);
      formData.append("lastName", this.state.cadvocate.lastname);
      formData.append("email", this.state.cadvocate.email);
      formData.append("password", this.state.cadvocate.password);
      formData.append("phoneNumber", this.state.cadvocate.phonenumber);
      formData.append("city", this.state.cadvocate.city);
      formData.append("country", this.state.cadvocate.country);
      formData.append("profession", this.state.cadvocate.profession);
      formData.append("organization", this.state.cadvocate.organization);
      formData.append("designation", this.state.cadvocate.designation);
      formData.append("experience", this.state.cadvocate.experience);
      formData.append("resume", this.state.cadvocate.resume);
      formData.append("photoid", this.state.cadvocate.photoid);
      formData.append("aboutYourself", this.state.cadvocate.aboutyourself);
      formData.append("whyCadversify", this.state.cadvocate.whycadversify);
      formData.append(
        "interviewDateTime",
        this.state.cadvocate.interviewdatetime
      );

      axios
        .post(`http://localhost:5000/api/cadvocates/register`, formData)
        .then((res) => {
          if (res.status === 200) {
            setTimeout(function () {
              window.location = "/cadsignupSuccess";
            }, 4000);
            this.notify();
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data == "Cadvocate already registered") {
            this.emailnotify();
            return;
          } else {
            this.somethingwentwrong();
            console.log(err.response.data);
            return;
          }
        });
    } else {
      this.errornotify();
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
                        <label>
                          <input
                            type="checkbox"
                            onClick={this.passwordToggle}
                            className="mb-3"
                          />{" "}
                          Show Password
                        </label>
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
                          id="confirmpassword"
                          placeholder="Re-enter your Password"
                          value={cadvocate.confirmpassword}
                          onChange={this.handleChange}
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.confirmpassword}
                        </span>
                        <label>
                          <input
                            type="checkbox"
                            className="mb-3"
                            onClick={this.confirmpasswordToggle}
                          />{" "}
                          Show Password
                        </label>
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
                          Years of Experience (In numbers only)
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
                      <div className="form-group  flex-column d-flex">
                        <label className="form-control-label">
                          Tell us something about yourself in about 20-25 words
                          <span className="text-danger"> *</span>
                        </label>
                        <textarea
                          className="mt-1 textareas"
                          type="text"
                          name="aboutyourself"
                          placeholder=" Type your answer here"
                          value={cadvocate.aboutyourself}
                          onChange={this.handleChange}
                          rows="4"
                        />
                        <span style={{ color: "red" }}>
                          {this.state.errors.aboutyourself}
                        </span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group flex-column d-flex py-4">
                        <label className="form-control-label">
                          Why are you applying for Cadversify?
                          <span className="text-danger"> *</span>
                        </label>
                        <textarea
                          className="mt-1 textareas"
                          type="text"
                          name="whycadversify"
                          placeholder=" Type your answer here"
                          value={cadvocate.whycadversify}
                          onChange={this.handleChange}
                          rows="4"
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
                      <div>
                        <p>
                          <br />
                          <b>
                            <i>Instructions-</i>
                          </b>
                          <br />
                          1. Choose a time only between 10AM and 8PM.
                          <br />
                          2. We're closed on weekends, so kindly do not choose
                          those dates.
                          <br />
                          3. Your interview may be rescheduled in case our HR
                          team is not available at the time you requested.
                          <br />
                          4. You will receive a confirmation email with your
                          interview details.
                          <br />
                        </p>
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
                      <button className="btn-lg btn-dark mt-4" type="submit">
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
