import React from "react";
import "../CSS/cadSignup.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsInfoCircleFill } from "react-icons/bs";

class cadSignup extends React.Component {
  render() {
    const renderTooltip = (props) => (
      <Tooltip id="icon-tooltip" className="tooltip-card" {...props}>
        A Cadvocate is a jargon for any working professional who wishes to share
        their work-experiences and learnings with others
      </Tooltip>
    );
    return (
      <div className="cad-signup-background">
        <section className="py-5">
          <div className="cad-signup-card my-5">
            <section>
              <div className="container">
                <div className="cad-signup-heading text-center">
                  <h1>CADVOCATE SIGNUP</h1>
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
                <hr className="rounded" />
                <Form className="form-container" action="#">
                  <div>
                    <h3 className="text-center pb-3">Personal Details</h3>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          First name<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="First name"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-4 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Last name<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
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
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Email<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="email"
                          placeholder="Enter your Email"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Password<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="password"
                          placeholder="Enter your Password"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Confirm Password
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="password"
                          placeholder="Re-enter your Password"
                          onblur="validate(2)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Phone Number<span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="tel"
                          placeholder="Enter your Phone Number"
                          onblur="validate(1)"
                          required
                        />
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
                          className="mt-2 nmb-3"
                          type="text"
                          placeholder="Eg: Pilot, Web developer, Professor, etc."
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label pt-4">
                          The Organisation you are currently working in. If
                          retired, mention, and state the name of last company.
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="text"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label pt-4">
                          Your Designation in the company
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="text"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label pt-4">
                          Years of Experience
                          <span className="text-danger">*</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="text"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                      <p>
                        Note: You must be having at least 3 years of experience
                        in the field you have mentioned above. Your resume must
                        contain information about your experience.
                      </p>
                    </div>

                    <div className="form-group files color">
                      <label>Upload your company resume/CV </label>
                      <Input
                        className="mt-2 mb-3"
                        type="file"
                        className="form-control"
                        multiple=""
                        required
                      ></Input>
                    </div>

                    <hr className="rounded" />

                    <div className="form-group files color">
                      <label>
                        Upload your photo id ( Aadhar / Pan / License )
                      </label>
                      <Input
                        className="mt-2 mb-3"
                        type="file"
                        className="form-control"
                        multiple=""
                        required
                      ></Input>
                    </div>

                    <hr className="rounded" />

                    <h3 className="text-center pb-3">
                      Personality check and interview
                    </h3>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Tell us something about yourself in about 80-100 words
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="text"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6 flex-column d-flex py-4">
                        <label className="form-control-label px-3">
                          Why are you applying for Cadversify?
                          <span className="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="text"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <Label>
                        When are you available for an video call interview with
                        us?<span class="text-danger"> *</span>
                      </Label>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <label class="form-control-label px-3">
                          Enter Date<span class="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="date"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                          required
                        />
                      </div>
                      <div class="form-group col-sm-6 flex-column d-flex">
                        <label class="form-control-label px-3">
                          Enter Time<span class="text-danger"> *</span>
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="time"
                          placeholder="Type your answer here"
                          onblur="validate(2)"
                          required
                        />
                      </div>
                    </div>

                    <hr className="rounded" />

                    <div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label px-3">
                          Referral code (optional)
                        </label>
                        <Input
                          className="mt-2 nmb-3"
                          type="code"
                          placeholder="Type your answer here"
                          onblur="validate(1)"
                        />
                      </div>
                    </div>
                    <div style={{ "text-align": "center" }}>
                      <Button className="btn-lg btn-dark mt-5 mb-2">
                        Sign up
                      </Button>
                      <p>
                        Already have an account?
                        <Link to="/cadlogin">Log in!</Link>
                      </p>
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
