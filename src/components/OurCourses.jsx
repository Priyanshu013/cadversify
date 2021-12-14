import React,{ useState } from "react";
import "../CSS/OurCourses.css";
import homebody1 from "../site_assets/homebody1.jpg";



class OurCourses extends React.Component {

  render() {
    return (
      <section className="home-background-low">
        <div className="pt-5">
            <h1>
              Top Programming Courses
            </h1>
          </div>
      <div className="container">
      <input type="radio" name="dot" id="one" />
      <input type="radio" name="dot" id="two" />
      <div className="main-card">
        <div className="cards">
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Python for beginners</div>
                  <div className="count">1.5K Students Enrolled</div>
                    <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
                  </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Java</div>
                <div className="count">2.9K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">C++</div>
                <div className="count">1.7K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Adv. Python</div>
                <div className="count">1.5K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">SQL</div>
                <div className="count">2.9K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          
          
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Introduction to R</div>
                <div className="count">1.7K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <label htmlFor="one" className=" active one" />
        <label htmlFor="two" className="two" />
      </div>
    </div>
    
    <div>
            <h1>
              Math & Logic
            </h1>
          </div>
      <div className="container">
      <input type="radio" name="dot" id="three" />
      <input type="radio" name="dot" id="four" />
      <div className="main-card">
        <div className="cards">
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Introduction to Calculus</div>
                  <div className="count">1.5K Students Enrolled</div>
                    <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
                  </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Introduction to Statistics</div>
                <div className="count">2.9K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Permutation & Combination</div>
                <div className="count">1.7K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Logarithms</div>
                <div className="count">1.5K Students</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Advance Statistics</div>
                <div className="count">2.9K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={homebody1}  alt=""/>
              </div>
              <div className="details">
                <div className="name">Introduction to Logic</div>
                <div className="count">1.7K Students Enrolled</div>
                <div class="rating"> 
                      <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                      <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> 
                      <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                      <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                      <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                    </div>
              </div>
              <div>
                <span>₹499</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <label htmlFor="three" className=" active three" />
        <label htmlFor="four" className="four" />
      </div>
    </div>
    </section>
  );
}
}

export default OurCourses;
