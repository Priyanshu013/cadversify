import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/courses.css";
import courseimg from "../site_assets/course_image.jpg";
import coursebanner from "../site_assets/coursebanner.jpg";
import { AiOutlineRightSquare } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

class Courses extends React.Component {
  render() {
    const settings = {
      dots: true,
      speed: 1000,
      slidesToShow: 3,
      focusOnSelect: true,
      //autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <AiOutlineRightSquare className="course-arrow" />,
      prevArrow: <AiOutlineRightSquare className="course-arrow" />,
    };

    return (
      <div>
        <div>
          <img src={coursebanner} className="coursebanner" />
        </div>
        <div className="course-container">
          <h3>Most Popular</h3>
          <Slider {...settings}>
            <div>
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Communication Skills</h4>
                <h6>
                  Develop your communication skills effectively, for the
                  workplace.
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
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Interview Preparation</h4>
                <h6>
                  Master the guide of interviewing skills to land your dream
                  job!
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
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Public Speaking</h4>
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
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Communication Skills</h4>
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
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Communication Skills</h4>
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
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Communication Skills</h4>
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
              <div className="course-card pb-2">
                <img src={courseimg} className="courseimg mb-1"></img>
                <h4>Communication Skills</h4>
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
