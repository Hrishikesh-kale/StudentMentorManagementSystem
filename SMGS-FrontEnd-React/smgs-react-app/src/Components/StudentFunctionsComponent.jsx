import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentService from "../Services/StudentService";
import AssignedMentorCard from "./AssignedMentorCardComponent";
import GetCertificateComponent from "./GetCertificateComponent";
import Header from "./HeaderComponent";
import LoadingComponenet from "./LoadingComponenet";
import MentorDetailsCard from "./MentorDetailsCardComponent";
import ProfileInfo from "./ProfileInfoComponent";
import SingleCourseDetailsCard from "./SingleCourseDetailsCardComponent";
import StudentUpdateForm from "./StudentUpdateFormComponent";
import GetAttendanceComponent from "./GetAttendanceComponent"

class StudentFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),
      viewProfile: true,
      courseCard: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
      getAttendance:false,
    };
  }

  courseCardHandler = () => {
    this.setState({
      courseCard: true,
      viewProfile: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
      certificateCard: false,
      getAttendance:false
    });
  };
  viewProfileHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: true,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
      certificateCard: false,
      getAttendance:false
    });
  };
  mentorInfoHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      mentorInfo: true,
      getMentor: false,
      updateProfile: false,
      certificateCard: false,
      getAttendance:false
    });
  };
  
  getMentorHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      mentorInfo: false,
      getMentor: true,
      updateProfile: false,
      certificateCard: false,
      getAttendance:false

    });
  };

  updateHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: true,
      certificateCard: false,
      getAttendance:false
    });
    };

    certificateHandler = () => {
      this.setState({
        certificateCard: true,
        courseCard: false,
        viewProfile: false,
        mentorInfo: false,
        getMentor: false,
        updateProfile: false,
        getAttendance:false
      });
  }

  attendanceHandler = () => {
    this.setState({
      certificateCard: false,
      courseCard: false,
      viewProfile: false,
      mentorInfo: false,
      getMentor: false,
      updateProfile: false,
      getAttendance:true,
    });
}


  deleteHandler = () => {
    // StudentService.deleteStudentByStudentId(this.state.userData.studentId).then(
    //   (res) => {
    //     this.props.history.push("/login");
    //   }
    // );
    this.props.history.push("/deletestudent");
  };
  logOutHandler = () => {
    localStorage.clear();
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="container">
        <ul class="nav nav-tabs customNavTab">
          <li class="nav-item">
            <div className="dropdown">
              <p className="nav-link customNavTab">Profile</p>
              <div className="dropdown-content">
                <Link onClick={this.viewProfileHandler}>
                  <span>View Profile</span>
                </Link>
                <Link onClick={this.updateHandler}>
                  <span>Update Profile</span>
                </Link>
                <Link onClick={this.deleteHandler}>
                  <span>Delete Account</span>
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Mentor</span>
              <div className="dropdown-content">
                <Link onClick={this.getMentorHandler}>
                  <span>Get Mentor</span>
                </Link>
                <Link onClick={this.mentorInfoHandler}>
                  <span>Mentor Information</span>
                </Link>
                { /*<Link>
                  <span>Change Mentor</span>
                </Link>*/ }
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Course</span>
              <div className="dropdown-content">
                <Link onClick={this.courseCardHandler}>
                  <span>Course Detail</span>
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Certificate</span>
              <div className="dropdown-content">
                <Link onClick={this.certificateHandler}>
                  <span>Get Certificate</span>
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Attendance</span>
              <div className="dropdown-content">
                <Link onClick={this.attendanceHandler}>
                  <span>Get Certificate</span>
                </Link>
              </div>
            </div>
          </li>
      <li>
          <Link to="/login">
            <span
              className=" studentFunctionLogOut"
              onClick={this.logOutHandler}
            >
              Log Out
            </span>
          </Link>
          </li>
        </ul>

        {this.state.courseCard ? (
          <SingleCourseDetailsCard
            userStatus="student"
            data1={this.state.userData.studentId}
            data2={this.state.userData.studentFirstName}
          />
        ) : null}

        {this.state.viewProfile ? (
          <ProfileInfo
            userStatus="student"
            data1={this.state.userData.studentId}
            data2={this.state.userData.studentFirstName}
          />
        ) : null}

        {this.state.mentorInfo ? (
          <MentorDetailsCard data1={this.state.userData.studentId} />
        ) : null}

        {this.state.getMentor ? (
          <AssignedMentorCard data1={this.state.userData.studentId} />
        ) : null}

        {this.state.updateProfile ? (
          <StudentUpdateForm data1={this.state.userData.studentId} />
        ) : null}

        {this.state.certificateCard ? (
          <GetCertificateComponent/>
        ) : null}

        {this.state.getAttendance ? (
          <GetAttendanceComponent/>
        ) : null}
      </div>
    );
  }
}
export default StudentFunctions;
