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
            <div className="user-details">
                <div className="Input-box"> 
                <span classname="details">Fullname</span>
                    <Input className="mt-2 mb-3" type="text" placeholder="Enter your Name"></Input>
                    </div>

                    <div className="Input-box">                
                    <span classname="details">Email</span>
                    <Input className="mt-2 mb-3" type="email" placeholder="Enter your Email"></Input>
                    </div>

                    <div className="Input-box">                
                    <span classname="details">Password</span>
                    <Input className="mt-2 mb-3" type="password" placeholder="Enter your Password"></Input>
                    </div> 

                    <div className="Input-box">                
                    <span classname="details">Confirm Password</span>
                    <Input className="mt-2 mb-3" type="password" placeholder="Re-enter your Password"></Input>
                    <div>

                    <div className="Input-box">                
                    <span classname="details">Phone Number</span>
                    <Input className="mt-2 mb-3" type="tel" placeholder="Enter your Phone Number"></Input>
                    </div>  

                    <div className="Input-box">                
                    <span classname="details">Designation</span>
                    <Input className="mt-2 mb-3" type="text" placeholder="Current education/working position"></Input>
                    </div>

                    <div className="Input-box">                
                    <span classname="details">Organization</span>
                    <Input className="mt-2 mb-3" type="text" placeholder="School/college/Company name"></Input>
                    </div>

                    <div className="Input-box">                
                    <span classname="details">Future aspirations</span>
                    <Input className="mt-2 mb-3" type="text" placeholder="Future aspirations(Pilot/Doctor/etc.)"></Input>
                    </div>

                    <div className="Input-box">                
                    <span classname="details">Referral code</span>
                    <Input className="mt-2 mb-3" type="code" placeholder="Referral code (optional)"></Input>
                    </div>
                    <Button className="btn-lg btn-dark btn-block">Sign up</Button>
                    <p>
                Already have an account? <Link to="/oppLogin">Log in!</Link>
              </p>
                    </div>
                </div> 

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
