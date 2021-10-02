import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";
import AdminLoginForm from "./AdminLoginFormComponent";
import homepage1 from "../Images/homepage1.jpg"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: "lightgray"}}>
        <div className="card homePageCardImageTop">        
          <div class="bottom-right">Don't just learn, experience it...!</div>
        </div>
        {/* <p style={{ color: "black" }}>
          Welcome to <b style={{ color: "black" }}>SM System </b> ... make
          your learning journey easy and memrable...!
          <br />
          <br />
          Hello students, <br />
          <br />
          
          We will help you succeed by teaming you with the most appropriate
          mentor who should be able to devote sufficient time to guide you with
          his expertise in the area you are seeking the training throughout the
          course.
          <br />
          <br />
           SM System is a platform to benefit students in their career in
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
        </p> */}
        <br />
          
        <div className="row">
          <div className="col-sm-6">
            <div className="card offset-4 homepagecard1">
              <div className="card-body">
                <h4 className="card-title" style={{ color: "orange" }}>
                  Welcome Mentor!
                </h4>
                <p className="card-text" style={{ color: "green" }}>
                  <Link to="/mentorsignup">
                    <br />
                    <button className="btn btn-success">
                      Register
                    </button>
                  </Link>
                  &nbsp;
                </p>
                <p
                  className="card-text"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Already registered..!
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
            <div className="card offset-1 homepagecard2">
              <div className="card-body">
                <h4 className="card-title" style={{ color: "orange" }}>
                  Welcome Student!
                </h4>
                <p className="card-text">
                  <Link to="/studentsignup">
                    <br />
                    <button className="btn btn-success">
                      Register
                    </button>
                  </Link>
                </p>
                <p
                  className="card-text"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  Already registered..!
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
        {/* <div className="card homePageCardImageBottom" /> */}
        <br/>
        <p style={{ color: "black" }}>
          Welcome to <b style={{ color: "black" }}>SM System </b> ... make
          your learning journey easy and memrable...!
          <br />
          <br />
          Hello students, <br />
          <br />
          
          We will help you succeed by teaming you with the most appropriate
          mentor who should be able to devote sufficient time to guide you with
          his expertise in the area you are seeking the training throughout the
          course.
          <br />
          <br />
          <b style={{ color: "black" }}> SM System</b> is a platform to benefit students in their career in
          order to acquire required as well as desired skills through
          appropriate training courses with effective guidance. 
          <br />
          <br /> A mentor is an important part of the journey of learning. While
          we understand this, our honest effort is to tag along an expert who
          can guide the students and help them make most of the traning courses. 
          <br />
          <br />
          Good Luck and Happy Learning..!
          <br/>
          <hr style={{ color: "orange" }}></hr>
        </p>
      </div>
    );
  }
}

export default HomePage;
