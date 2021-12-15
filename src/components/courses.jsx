import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/courses.css";
import commskills from "../site_assets/commskills.jpg";
import interviewprep from "../site_assets/interviewprep.jpg";
import publicspeaking from "../site_assets/publicspeaking.jpg";
import coursebanner from "../site_assets/coursebanner.jpg";
import webdev from "../site_assets/webdev.jpg";
import python from "../site_assets/python.jpg";
import machinelearning from "../site_assets/machinelearning.jpg";
import ai from "../site_assets/ai.jpg";
import { CgChevronDoubleLeftR } from "react-icons/cg";
import { CgChevronDoubleRightR } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";

class Courses extends React.Component {
  render() {
    function NextArrow(props) {
      return (
        <div>
          <CgChevronDoubleRightR
            className="slick-arrow slick-next"
            onClick={props.onClick}
          />
        </div>
      );
    }

    function PrevArrow(props) {
      return (
        <CgChevronDoubleLeftR
          className="slick-arrow slick-prev"
          onClick={props.onClick}
        />
      );
    }

    const settings = {
      dots: true,
      speed: 1000,
      slidesToShow: 4,
      //autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div>
          <img src={coursebanner} className="coursebanner" />
        </div>
        <div className="coursespg-heading">Online courses we offer</div>

        <div className="course-container">
          <h3 className="course-section-heading">Most Popular</h3>
          <Slider {...settings}>
            <div>
              <div className="course-card ">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively with experienced
                  speakers
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={interviewprep} className="courseimg mb-1"></img>
                <h5>Interview Preparation</h5>
                <h6>
                  Master the guide of interviewing skills for landing on your
                  dream job!
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={publicspeaking} className="courseimg mb-1"></img>
                <h5>Public Speaking</h5>
                <h6>
                  Master the art of public speaking and create an unforgettable
                  impression.
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
          </Slider>
        </div>

        <div className="course-container">
          <h3 className="course-section-heading">Programming and technology</h3>
          <Slider {...settings}>
            <div>
              <div className="course-card ">
                <img src={python} className="courseimg mb-1"></img>
                <h5>Python Programming</h5>
                <h6>
                  Get into the world of advanced programming with our Python
                  course
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={webdev} className="courseimg mb-1"></img>
                <h5>Web Development</h5>
                <h6>Build your dream website in just 18 hours!</h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={machinelearning} className="courseimg mb-1"></img>
                <h5>Machine Learning</h5>
                <h6>Learn Machine Learning and land your dream job today!</h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={ai} className="courseimg mb-1"></img>
                <h5>Artificial Intelligence</h5>
                <h6>
                  Dive into the world of Artificial Intelligence. Your search
                  ends here!
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
            <div>
              <div className="course-card">
                <img src={commskills} className="courseimg mb-1"></img>
                <h5>Communication Skills</h5>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace
                </h6>
                <div>Duration: 18 hours</div>
                <div className="course-rating">
                  <ReactStars
                    count={5}
                    size={30}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                  />
                </div>
                (1695 students)
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Courses;
