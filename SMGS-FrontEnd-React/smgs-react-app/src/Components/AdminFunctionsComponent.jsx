import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListCourseComponent from "./ListCourseComponent";
import ListOfAllMentors from "./ListOfAllMentorsComponent";
import StudentSignUpForm from "./StudentSignUpFormComponent";
import AdminProfileCard from "./AdminProfileCardComponent";
import AdminForm from "./AdminFormComponent";
import ListOfAdmins from "./ListOfAdminsComponent";
import MentorSignUpForm from "./MentorSignUpFormComponent";
import AddCourseForm from "./AddCourseFormComponent";
import ListOfAllStudents from "./ListOfAllStudentsComponent";
import AdminService from "../Services/AdminService";

class AdminFunctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: JSON.parse(localStorage.getItem("userData")),

      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: true,
      adminReg: false,
      studentReg: false,
      mentorReg: false,
      manageAdmin: false,
      addCourse: false,
    };
    this.cUpdationHandler = this.cUpdationHandler.bind(this);
    this.sUpdationHandler = this.sUpdationHandler.bind(this);
    this.mUpdationHandler = this.mUpdationHandler.bind(this);
  }

  cUpdationHandler = (event) => {
    this.setState({
      cUpdation: true,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };

  sUpdationHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: true,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };

  mUpdationHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: true,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };

  viewProfileHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: true,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };
  adminRegistrationHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: true,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };
  studentRegHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: true,
      manageAdmin: false,
      mentorReg: false,
      addCourse: false,
    });
  };
  mentorRegHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: true,
      addCourse: false,
    });
  };

  manageAdminHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: true,
      mentorReg: false,
      addCourse: false,
    });
  };
  addCourseHandler = () => {
    this.setState({
      cUpdation: false,
      mUpdation: false,
      sUpdation: false,
      viewProfile: false,
      adminReg: false,
      studentReg: false,
      manageAdmin: false,
      mentorReg: false,
      addCourse: true,
    });
  };
  deleteHandler=()=>{
    alert(this.state.userData.adminId)
    AdminService.deleteAdminByAdminId(this.state.userData.adminId).then(res => {
        localStorage.clear()
        this.props.history.push('/home')
    })
}
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
                <Link onClick={this.deleteHandler}>
                  <span>Delete Account</span>
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Course Management</span>
              <div className="dropdown-content">
                <Link onClick={this.addCourseHandler}>
                  <span>Add Course</span>
                </Link>
                <Link onClick={this.cUpdationHandler}>
                  <span>Manage Course</span>
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Mentor Management</span>
              <div className="dropdown-content">
                <Link onClick={this.mentorRegHandler}>
                  <span>Mentor Registration</span>
                </Link>
                <Link onClick={this.mUpdationHandler}>
                  <span>Manage Mentors</span>
                </Link>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Student Management</span>
              <div className="dropdown-content">
                <Link onClick={this.studentRegHandler}>
                  <span>Student Registration</span>
                </Link>
                <Link onClick={this.sUpdationHandler}>
                  <span>Manage Students</span>
                </Link>
            </div>
            </div>
          </li>

          <li class="nav-item">
            <div className="dropdown">
              <span className="nav-link customNavTab">Admin Management</span>
              <div className="dropdown-content">
                <Link onClick={this.adminRegistrationHandler}>
                  <span>Admin Registration</span>
                </Link>
                <Link onClick={this.manageAdminHandler}>
                  <span>Manage Admins</span>
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

        {this.state.sUpdation ? <ListOfAllStudents /> : null}
        {this.state.mUpdation ? <ListOfAllMentors /> : null}
        {this.state.cUpdation ? <ListCourseComponent /> : null}

        {this.state.viewProfile ? (
          <AdminProfileCard data1={this.state.userData.adminId} />
        ) : null}

        {this.state.adminReg ? <AdminForm /> : null}

        {this.state.studentReg ? <StudentSignUpForm data="fromAdmin" /> : null}

        {this.state.mentorReg ? <MentorSignUpForm data="fromAdmin" /> : null}

        {this.state.manageAdmin ? <ListOfAdmins /> : null}

        {this.state.addCourse ? <AddCourseForm /> : null}
      </div>
    );
  }
}

export default AdminFunctions;

//{this.state.studentReg ? <StudentSignUpForm/> : null }
