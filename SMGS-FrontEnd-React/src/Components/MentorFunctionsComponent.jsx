import React, { Component } from "react";
import { Link } from "react-router-dom";
import MentorService from "../Services/MentorService";
import Header from "./HeaderComponent";
import ListOfAssignedStudents from "./ListOfAssignedStudentsComponent";
import MentorUpdateForm from "./MentorUpdateFormComponent";
import ProfileInfo from "./ProfileInfoComponent";
import SingleCourseDetailsCard from "./SingleCourseDetailsCardComponent";
import UpdateMarks from "./UpdateMarksComponent";

class MentorFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),

      courseCard: false,
      viewProfile: true,
      assignedStudentsList: false,
      updateProfile: false,
      updateMarks: false,
    };

    this.courseCardHandler = this.courseCardHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.studentListHandler = this.studentListHandler.bind(this);
  }

  courseCardHandler = () => {
    this.setState({
      courseCard: true,
      viewProfile: false,
      assignedStudentsList: false,
      updateProfile: false,
      updateMarks: false,
    });
  };

  viewProfileHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: true,
      assignedStudentsList: false,
      updateProfile: false,
      updateMarks: false,
    });
  };
  studentListHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      assignedStudentsList: true,
      updateProfile: false,
      updateMarks: false,
    });
  };

  updateHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      assignedStudentsList: false,
      updateProfile: true,
      updateMarks: false,
    });
  };

  updateMarksHandler = () => {
    this.setState({
      courseCard: false,
      viewProfile: false,
      assignedStudentsList: false,
      updateProfile: false,
      updateMarks: true,
    });
  };

  deleteHandler = () => {
    this.props.history.push("/deletementor");
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
              <span className="nav-link customNavTab">Profile</span>
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
              <span className="nav-link customNavTab">Student</span>
              <div className="dropdown-content">
                <Link onClick={this.studentListHandler}>
                  <span>View Batch Details</span>
                </Link>
                <Link onClick={this.updateMarksHandler}>
                  <span>Update Marks of Student</span>
                </Link>
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

          <Link to="/login">
            <button
              className="btn btn-outline-dark studentFunctionLogOut"
              onClick={this.logOutHandler}
            >
              Log Out
            </button>
          </Link>
        </ul>

        {this.state.courseCard ? (
          <SingleCourseDetailsCard
            userStatus="mentor"
            data1={this.state.userData.mentorId}
            data2={this.state.userData.mentorFirstName}
          />
        ) : null}

        {this.state.viewProfile ? (
          <ProfileInfo
            userStatus="mentor"
            data1={this.state.userData.mentorId}
            data2={this.state.userData.mentorFirstName}
          />
        ) : null}

        {this.state.assignedStudentsList ? (
          <ListOfAssignedStudents data1={this.state.userData.mentorId} />
        ) : null}

        {this.state.updateProfile ? (
          <MentorUpdateForm data1={this.state.userData.mentorId} />
        ) : null}

        {this.state.updateMarks ? (
          <UpdateMarks data1={this.state.userData.mentorId} />
        ) : null}
      </div>
    );
  }
}
export default MentorFunctions;
