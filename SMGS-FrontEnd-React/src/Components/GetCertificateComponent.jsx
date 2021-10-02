import React, { Component } from "react";
import certtemp from "../Images/certificate-template.png";
import CourseService from "../Services/CourseService";
import MentorService from "../Services/MentorService";
import StudentService from "../Services/StudentService";

export default class GetCertificateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),
      student: "",
      mentor: "",
      course: "",
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
    };
  }
  componentDidMount() {
    StudentService.getStudentByStudentId(this.state.userData.studentId).then(
      (response) => {
        this.setState({ student: response.data });
      }
    );
    CourseService.getCourseDetailByStudentId(
      this.state.userData.studentId
    ).then((response) => {
      this.setState({ course: response.data });
    });
    StudentService.getAssignedMentorByStudentId(this.state.userData.studentId)
      .then((response) => {
        this.setState({ mentor: response.data });
      })
      .catch((error) => {
        this.setState({ mentor: error.response.data.message });
      });
  }

  render() {
    if (this.state.mentor === "" || this.state.student.studentMarks < 40) {
      return (
        <div className="conatiner">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Better Luck Next Time!</p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 getCertificateErrorCard">
            <div className="card-body">
              <div className="container">
                We are sorry to inform you that you didn't score minimum
                required marks for passing or you don't have any mentor
                assigned yet. You will have to retake the test or  You will have to Get Mentor assigned first.
                <br />
                <br />
                Good Luck!
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              Congratulations {this.state.student.studentFirstName}, you have successfully completed the course.
              <br />
            </center>
          </div>
          <div className="card text-black certificate">
            <img className="card-img " src={certtemp} />
            <div class="card-img-overlay">
              <h5 class="card-title certificateTitle">
                <u>
                  Certificate <i>of</i> Completion
                </u>
              </h5>
              <br />
              <p class="card-text certificateText">
                This certificate is presented to
                <br />
                <b>
                  {this.state.student.studentFirstName}&nbsp;
                  {this.state.student.studentLastName}
                </b>
                <br />
                for successfully completing the course
                <br />
                <b>"{this.state.course.courseName}"</b>
                <br />
                with <b>{this.state.student.studentMarks}&nbsp;</b>marks
                <br />
                under the mentorship of
                <br />
                <b>
                  {this.state.mentor.mentorFirstName}&nbsp;
                  {this.state.mentor.mentorLastName}
                </b>
              </p>
              <div class="card-text certificateDate">
                Issued On:{" "}
                <b>
                  {this.state.currentDate}/{this.state.currentMonth}/
                  {this.state.currentYear}
                </b>
              </div>
              <div class="card-text certificateCompany">
                Authorized Signatory
                <br />
                <p style={{ color: "orange" }}>Guiding Trail</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.mentor === null) {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>Bad Request!</p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 getCertificateErrorCard">
            <div className="card-body">
              <div className="container">
                We are sorry to inform you that you don't have any mentor
                assigned yet. You will have to Get Mentor assigned first.
                <br />
                <br />
                Good Luck!
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
