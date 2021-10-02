import React, { Component } from "react";
import CourseService from "../Services/CourseService";

class SingleCourseDetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetails: "",
      userStatus: "",
    };
  }

  componentDidMount() {
    if (this.props.userStatus === "student") {
      CourseService.getCourseDetailByStudentId(this.props.data1).then(
        (response) => {
          this.setState({ courseDetails: response.data });
        }
      );
    }
    if (this.props.userStatus === "mentor") {
      CourseService.getCourseDetailByMentorId(this.props.data1).then(
        (response) => {
          this.setState({ courseDetails: response.data });
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
            Hello &nbsp; 
              {this.props.data2},
           your course details are as follows
            </p>
          </center>
          </div>
        <div className="card text-white bg-dark mb-3 coursedetailcard">
          <div className="card-body">
            <p className="card-text">
              Course Name :- {this.state.courseDetails.courseName}{" "}
            </p>
            <p className="card-text">
              Course Id :- {this.state.courseDetails.courseId}{" "}
            </p>
            <p className="card-text">
              Start Date :- {this.state.courseDetails.startDate}{" "}
            </p>
            <p className="card-text">
              End Date :- {this.state.courseDetails.endDate}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCourseDetailsCard;
