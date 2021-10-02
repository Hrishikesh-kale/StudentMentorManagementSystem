import React, { Component } from "react";

import CourseService from "../Services/CourseService";
import AdminService from "../Services/AdminService";

class AdminForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backendErrors: "",
      regStatus: true,
      errors: {
        adminEmail: "",
        adminPassword: "",
        adminDob: "",
        adminGender: "",
        confirmPassword: "",
      },

      confirmPassword: "",
      adminEmail: "",
      adminPassword: "",
      adminDob: "",
      adminGender: "",
    };
  }

  validationHandler = () => {
    let errors = this.state.errors;
    let formIsValid = true;
    let date = new Date();
    let currentDate = date.getTime();

    // admin email
    if (this.state.adminEmail === "") {
      formIsValid = false;
      errors.adminEmail = "Please enter Email";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.adminEmail
      )
    ) {
      formIsValid = false;
      errors.adminEmail = "Please, provide valid Email";
    } else {
      errors.adminEmail = null;
    }
    //password
    if (this.state.adminPassword === "") {
      formIsValid = false;
      errors.adminPassword = "Please enter Password";
    } else if (!/^[A-Za-z]\w{7,14}$/.test(this.state.adminPassword)) {
      formIsValid = false;
      errors.adminPassword = (
        <ul>
          <li>Password should be 7 to 16 characters long</li>
          <li>
            Password should conatin only alphanumeric characters and underscore
          </li>
          <li>Password's first character must be a letter</li>
        </ul>
      );
    } else {
      errors.adminPassword = null;
    }
    //confirmPassword
    if (this.state.confirmPassword === "") {
      formIsValid = false;
      errors.confirmPassword = "Please enter Password";
    } else if (!this.state.confirmPassword.match(this.state.adminPassword)) {
      formIsValid = false;
      errors.confirmPassword = "Passwords does not match";
    } else {
      errors.confirmPassword = null;
    }
    //DateOfBirth
    if (this.state.adminDob === "") {
      formIsValid = false;
      errors.adminDob = "Please enter Date Of Birth";
    } else if (new Date(this.state.adminDob).getTime() >= currentDate) {
      formIsValid = false;
      errors.adminDob = "Please, provide valid Date of Birth";
    } else {
      errors.adminDob = null;
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.validationHandler() && this.state.adminGender !== "") {
      let newAdmin = {
        adminEmail: this.state.adminEmail,
        adminPassword: this.state.adminPassword,
        adminDob: this.state.adminDob,
        adminGender: this.state.adminGender,
      };
      console.log(JSON.stringify(newAdmin));
      AdminService.addNewAdmin(newAdmin)
        .then((response) => {
          this.setState({ regStatus: false });
          alert("Admin added Successfully");
        })
        .catch((err) => {
          console.error(err.response.data);
          this.setState({ backendError: err.response.data.message });
          alert(err.response.data.message);
        });
    } else {
      alert("Form has some errors!");
      console.error(JSON.stringify(this.state.errors));
    }
  };

  componentDidMount() {
    CourseService.getAllCourses().then((response) => {
      this.setState({ courses: response.data });
    });
  }

  render() {
    const errors = this.state.errors;
    if (this.state.regStatus) {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Register New Admin
              </p>
            </center>
          </div>
          <form
            className="form-horizontal bg-secondary adminSigupCard"
            onSubmit={this.submitHandler}
          >
            <div className="form-group">
              <strong className="col-sm-3 control-label">Email Id* </strong>
              <div className="col-sm-9">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  name="adminEmail"
                  onChange={this.changeHandler}
                  value={this.state.adminEmail}
                />
                <span className="error">{errors.adminEmail}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Password*</strong>
              <div className="col-sm-9">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="adminPassword"
                  onChange={this.changeHandler}
                  value={this.state.adminPassword}
                />
                <span className="error">{errors.adminPassword}</span>
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
                  name="adminDob"
                  onChange={this.changeHandler}
                  value={this.state.adminDob}
                />
                <span className="error">{errors.adminDob}</span>
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
                        name="adminGender"
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
                        name="adminGender"
                        value="FEMALE"
                        onChange={this.changeHandler}
                      />{" "}
                      Female
                    </label>
                  </div>
                  {this.state.validationErrors && (
                    <h3 className="signuperrormsg">
                      {" "}
                      {this.state.validationErrors.adminGender}{" "}
                    </h3>
                  )}
                </div>
              </div>
            </div>
            <br/>
            <div className="form-group">
              <div className="col-sm-9 col-sm-offset-3">
                <span className="help-block">*Required fields</span>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-outline-light">
                    Register
                  </button>
                  {this.state.BackendError && (
                    <h3 className="backenderrormsg">
                      {" "}
                      {this.state.BackendError}{" "}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className="card text-white bg-dark mb-3 successupdationcard">
          <div className="card-body">
            <h5 className="card-title">Successfully Registered..!!</h5>
          </div>
        </div>
      );
    }
  }
}

export default AdminForm;
