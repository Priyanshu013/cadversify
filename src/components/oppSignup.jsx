import React from "react";
import "../CSS/oppSignup.css"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink, Link } from "react-router-dom";


class oppSignup extends React.Component {
  render() {
    return (
      <section className="home-background-low">
        <div
          className=" signup-card my-5">
        <section>    
        <div className="container">
        <div className="title"><h1>NEW USER SIGNUP</h1></div>
        <Form className="form-container" action="#">
            <div>
            <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" id="fname" name="fname" placeholder="First name" onblur="validate(1)" required/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" id="lname" name="lname" placeholder="Last name" onblur="validate(2)"required/> </div>
                    </div>
                    
                        <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="email" placeholder="Enter your Email" onblur="validate(1)" required/> </div>
                        </div>

                        <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Password<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="password" placeholder="Enter your Password" onblur="validate(1)" required/> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Confirm Password<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="password"  placeholder="Re-enter your Password" onblur="validate(2)" required /> </div>
                        </div>
                    
                     
                        <div className="row">
                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone Number<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="tel" placeholder="Enter your Phone Number" onblur="validate(1)" required/> </div>
                        </div>

                    <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Designation<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Current education/working position" onblur="validate(1)" required/> </div>
                        </div>

                    <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Organization<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="School/college/Company name" onblur="validate(1)" required/> </div>
                        </div>
                    
                    <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Future aspirations<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Future aspirations(Pilot/Doctor/etc.)" onblur="validate(1)" required/> </div>
                        </div>

                    <div className="row">
                       <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Referral code (optional)</label> <Input className="mt-2 nmb-3" type="code" placeholder="Type your answer here" onblur="validate(1)" required/> </div>
                       </div>
                    <Button className="btn-lg btn-dark btn-block">Sign up</Button>
                    <p>
                Already have an account? <Link to="/oppLogin">Log in!</Link>
              </p>
                    </div>
                 

            
          </Form>   
          <div>    
      </div>
      
      </div>
      </section>
      </div>
      </section>
    )
  }
}

export default oppSignup;
