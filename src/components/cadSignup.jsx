import React from "react";
import "../CSS/cadSignup.css"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink, Link } from "react-router-dom";


class cadSignup extends React.Component {
  render() {
    return (
      <section className="home-background-low">
        <div
          className=" signup-card my-5">
        <section>    
        <div className="container">
        <div className="title"><h1>NEW USER SIGNUP</h1></div>
        <hr className="rounded"/>
        <Form className="form-container" action="#">
            <div >
                 <h3>Personal Details</h3>
            
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

                        <hr className="rounded"/>

                        <h3></h3>

                  
                        <div className="row">
                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">What is your profession?<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Eg: Pilot, Web developer, Professor, etc." onblur="validate(1)" required/> </div>
</div>


        

                    
                    <div className="row">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">The Organisation you are currently working / last worked with<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Type your answer here" onblur="validate(1)" required/><label><input type="checkbox"></input>I'm Retired </label> </div>
                    </div>

                    

                    
                    <div className="row">
                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Your Designation in the company<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text"placeholder="Type your answer here" onblur="validate(1)" required/> </div>
</div>
                    

                    

                    <div className="row">
                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Years of Experience<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Type your answer here" onblur="validate(1)" required/> </div>
                    <p>Note: You must be having at least 3 years of experience in the field you have mentioned above.
                             Your resume must contain information about your experience.</p>
</div>

                    <div className="form-group files color">
                        <label>Upload your company resume/CV </label>
                        <Input className="mt-2 nmb-3" type="file" className="form-control" multiple="" required></Input>
                        <button  type="button" className="btn btn-primary" justify-content="right" >Upload</button>
                    </div>

                    <hr className="rounded"/>

                    <h3></h3>

                    <div className="form-group files color">
                        <label>Upload your photo id ( Aadhar / Pan / License )</label>
                        <Input className="mt-2 nmb-3" type="file" className="form-control" multiple="" required></Input>
                        <button  type="button" className="btn btn-primary" style={{alignItems: 'right'}} >Upload</button>
                    </div>

                    

                    <div className="row">
                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Tell us something about yourself in about 100 words<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Type your answer here" onblur="validate(1)" required/> </div>
</div>

                    

                    <div className="row">
                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Why are you applying for Cadversify?<span className="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="text" placeholder="Type your answer here" onblur="validate(1)" required/> </div>
</div>
                                    
                    

                    <div className="row">
                    <Label>When are you available for an video call interview with us?<span class="text-danger"> *</span></Label>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Enter Date<span class="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="date" placeholder="Type your answer here" onblur="validate(1)" required/> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Enter Time<span class="text-danger"> *</span></label> <Input className="mt-2 nmb-3" type="time" placeholder="Type your answer here" onblur="validate(2)" required/> </div>
</div>


<hr className="rounded"/>

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

export default cadSignup;
