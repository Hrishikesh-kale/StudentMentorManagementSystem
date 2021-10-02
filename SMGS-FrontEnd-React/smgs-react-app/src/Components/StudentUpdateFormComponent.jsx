import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import ProfileInfo from "./ProfileInfoComponent";
import StudentFunctions from "./StudentFunctionsComponent";

class StudentUpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backendError: "",
      errors: {
        studentFirstName: "",
        studentLastName: "",
        studentEmail: "",
        studentPassword: "",
        confirmPassword: "",
        studentMobileNo: "",
        studentDob: "",
        studentGender: "",
      },

      updationStatus: true,

      studentFirstName: "",
      studentLastName: "",
      studentEmail: "",
      studentPassword: "",
      studentMobileNo: "",
      studentDob: "",
      studentGender: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  validationHandler = () => {
    let errors = this.state.errors;
    let formIsValid = true;
    let date = new Date();
    let currentDate = date.getTime();

    //firstName
    if (this.state.studentFirstName === "") {
      formIsValid = false;
      errors.studentFirstName = "Please enter First Name";
    } else if (!this.state.studentFirstName.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.studentFirstName = "Please, enter letters only";
    } else {
      errors.studentFirstName = null;
    }

    //lastName
    if (this.state.studentLastName === "") {
      formIsValid = false;
      errors.studentLastName = "Please enter Last Name";
    } else if (!this.state.studentLastName.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.studentLastName = "Please, enter letters only";
    } else {
      errors.studentLastName = null;
    }

    //email
    if (this.state.studentEmail === "") {
      formIsValid = false;
      errors.studentEmail = "Please enter Email";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.studentEmail
      )
    ) {
      formIsValid = false;
      errors.studentEmail = "Please, provide valid Email";
    } else {
      errors.studentEmail = null;
    }

    //password
    if (this.state.studentPassword === "") {
      formIsValid = false;
      errors.studentPassword = "Please enter Password";
    } else if (!/^[A-Za-z]\w{7,14}$/.test(this.state.studentPassword)) {
      formIsValid = false;
      errors.studentPassword = (
        <ul>
          <li>Password should be 7 to 16 characters long</li>
          <li>
            Password should conatin only alphanumeric characters and underscore
          </li>
          <li>Password's first character must be a letter</li>
        </ul>
      );
    } else {
      errors.studentPassword = null;
    }

    //confirmPassword
    if (this.state.confirmPassword === "") {
      formIsValid = false;
      errors.confirmPassword = "Please enter Password";
    } else if (!this.state.confirmPassword.match(this.state.studentPassword)) {
      formIsValid = false;
      errors.confirmPassword = "Please enter correct Password";
    } else {
      errors.confirmPassword = null;
    }

    //DateOfBirth
    if (this.state.studentDob === "") {
      formIsValid = false;
      errors.studentDob = "Please enter Date Of Birth";
    } else if (new Date(this.state.studentDob).getTime() >= currentDate) {
      formIsValid = false;
      errors.studentDob = "Please, provide valid Date of Birth";
    } else {
      errors.studentDob = null;
    }

    //MobileNumber
    if (this.state.studentMobileNo === "") {
      formIsValid = false;
      errors.studentMobileNo = "Please enter Mobile Number";
    } else if (!Number(this.state.studentMobileNo)) {
      formIsValid = false;
      errors.studentMobileNo = "Please enter Mobile Number";
    } else if (!/^\d{10}$/.test(this.state.studentMobileNo)) {
      formIsValid = false;
      errors.studentMobileNo = "Please, enter valid Mobile Number";
    } else {
      errors.studentMobileNo = null;
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (this.validationHandler() && this.state.studentGender !== "") {
      let updatedStudent = {
        studentFirstName: this.state.studentFirstName,
        studentLastName: this.state.studentLastName,
        studentEmail: this.state.studentEmail,
        studentPassword: this.state.studentPassword,
        studentMobileNo: this.state.studentMobileNo,
        studentDob: this.state.studentDob,
        studentGender: this.state.studentGender,
      };
      console.log(JSON.stringify(updatedStudent));
      StudentService.updateStudentByStudentId(
        this.props.data1,
        updatedStudent
      ).then((response) => {
        this.setState({ updationStatus: false });
        alert("Student updated Successfully");
        //this.props.history.push("/studentlogin");
      });
    } else {
      alert("Form has some errors");
      console.error("Invalid Form!" + JSON.stringify(this.state.errors));
    }
  };

  render() {
    const errors = this.state.errors;
    if (this.state.updationStatus) {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Hello Student,
                <br />
                Please update your information
              </p>
            </center>
          </div>
          <form
            className="form-horizontal bg-secondary studentUpdateCard"
            onSubmit={this.submitHandler}
          >
            <div className="form-group">
              <strong className="col-sm-3 control-label">First Name*</strong>
              <div className="col-sm-9">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  name="studentFirstName"
                  onChange={this.changeHandler}
                  value={this.state.studentFirstName}
                />
                <span className="error">{errors.studentFirstName}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Last Name*</strong>
              <div className="col-sm-9">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  name="studentLastName"
                  onChange={this.changeHandler}
                  value={this.state.studentLastName}
                />
                <span className="error">{errors.studentLastName}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Email* </strong>
              <div className="col-sm-9">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  name="studentEmail"
                  onChange={this.changeHandler}
                  value={this.state.studentEmail}
                />
                <span className="error">{errors.studentEmail}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Password*</strong>
              <div className="col-sm-9">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="studentPassword"
                  onChange={this.changeHandler}
                  value={this.state.studentPassword}
                />
                <span className="error">{errors.studentPassword}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">
                Confirm Password*
              </strong>
              <div className="col-sm-9">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="confirmPassword"
                  onChange={this.changeHandler}
                  value={this.state.confirmPassword}
                />
                <span className="error">{errors.confirmPassword}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Date of Birth*</strong>
              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  name="studentDob"
                  onChange={this.changeHandler}
                  value={this.state.studentDob}
                />
                <span className="error">{errors.studentDob}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">
                Mobile number*{" "}
              </strong>
              <div className="col-sm-9">
                <input
                  type="phoneNumber"
                  placeholder="Phone number"
                  className="form-control"
                  name="studentMobileNo"
                  onChange={this.changeHandler}
                  value={this.state.studentMobileNo}
                />
                <span className="error">{errors.studentMobileNo}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="control-label col-sm-3">Gender*</strong>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="studentGender"
                        value="MALE"
                        onChange={this.changeHandler}
                      />{" "}
                      Male
                    </label>
                  </div>

                  <div className="col-sm-5">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="studentGender"
                        value="FEMALE"
                        onChange={this.changeHandler}
                      />{" "}
                      Female
                    </label>
                  </div>
                  <span className="error">{errors.studentGender}</span>
                </div>
              </div>
            </div>
            <br />
            <div className="form-group">
              <div className="col-sm-9 col-sm-offset-3">
                <span className="help-block">*Required fields</span>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-outline-dark">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Information updated Successfully! Please see your updated
                information below:
              </p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 updatedStudentProfileCard">
            <div className="card-body">
              <p className="card-text">
                First Name :- {this.state.studentFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name :- {this.state.studentLastName}{" "}
              </p>
              <p className="card-text">
                Email Id :- {this.state.studentEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No :- {this.state.studentMobileNo}{" "}
              </p>
              <p className="card-text">D.O.B. :- {this.state.studentDob} </p>
              <p className="card-text">Gender :- {this.state.studentGender} </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StudentUpdateForm;
