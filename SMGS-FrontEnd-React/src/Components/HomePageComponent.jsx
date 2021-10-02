import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: "black" }}>
        <div className="card homePageCardImageTop">
          <div class="bottom-right">...don't just learn, experience it!</div>
        </div>
        <p style={{ color: "white" }}>
          Welcome to <b style={{ color: "orange" }}>SM System</b> ... where
          your learning journey becomes fun filled and memorable!
          <br />
          <br />
          Hey students, come join us. <br />
          <br />
          We will help you succeed by teaming you with the most appropriate
          mentor who should be able to devote sufficient time to guide you with
          his expertise in the area you are seeking the training throughout the
          course.
          <br />
          <br />
          Guiding Trail is a platform to benefit students in their career in
          order to acquire required as well as desired skills through
          appropriate training courses with effective guidance.
          <br />
          <br /> A mentor is an important part of the journey of learning. While
          we understand this, our honest effort is to tag along an expert who
          can guide the students and help them make most of the traning courses.
          <br />
          <br />
          Good Luck and Happy Learning!
          <hr style={{ color: "orange" }}></hr>
        </p>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <div className="card offset-1 homepagecard1">
              <div className="card-body">
                <h4 className="card-title" style={{ color: "orange" }}>
                  Welcome Mentor!
                </h4>
                <p className="card-text" style={{ color: "green" }}>
                  <Link to="/mentorsignup">
                    <br />
                    <button className="btn btn-success">
                      Please Register here!
                    </button>
                  </Link>
                  &nbsp;
                </p>
                <p
                  className="card-text"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  For Already registered Mentor
                  <Link to="/mentorlogin">
                    <br />
                    <button className="btn btn-primary homeloginbutton">
                      LOGIN
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card offset-5 homepagecard2">
              <div className="card-body">
                <h4 className="card-title" style={{ color: "orange" }}>
                  Welcome Student!
                </h4>
                <p className="card-text">
                  <Link to="/studentsignup">
                    <br />
                    <button className="btn btn-success">
                      Please Register here!
                    </button>
                  </Link>
                </p>
                <p
                  className="card-text"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  For Already registered Student
                  <Link to="/studentlogin">
                    <br />
                    <button className="btn btn-primary homeloginbutton">
                      LOGIN
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card homePageCardImageBottom" />
      </div>
    );
  }
}

export default HomePage;
