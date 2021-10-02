import React, { Component } from "react";
import MentorService from "../Services/MentorService";

class MentorUpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updationStatus: true,

      backendError: "",
      errors: {
        mentorFirstName: "",
        mentorLastName: "",
        mentorEmail: "",
        mentorPassword: "",
        confirmPassword: "",
        mentorDob: "",
        mentorMoNo: "",
        mentorJoinYear: "",
        mentorGender: "",
        avgRating: "",
      },

      mentorFirstName: "",
      mentorLastName: "",
      mentorEmail: "",
      mentorPassword: "",
      confirmPassword: "",
      mentorDob: "",
      mentorMoNo: "",
      mentorJoinYear: "",
      mentorGender: "",
      avgRating: "",
    };
  }

  validationHandler = () => {
    let errors = this.state.errors;
    let formIsValid = true;
    let date = new Date();
    let currentDate = date.getTime();

    //firstName
    if (this.state.mentorFirstName === "") {
      formIsValid = false;
      errors.mentorFirstName = "Please enter First Name";
    } else if (!this.state.mentorFirstName.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.mentorFirstName = "Please, enter letters only";
    } else {
      errors.mentorFirstName = null;
    }
    //lastName
    if (this.state.mentorLastName === "") {
      formIsValid = false;
      errors.mentorLastName = "Please enter Last Name";
    } else if (!this.state.mentorLastName.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.mentorLastName = "Please, enter letters only";
    } else {
      errors.mentorLastName = null;
    }

    //email
    if (this.state.mentorEmail === "") {
      formIsValid = false;
      errors.mentorEmail = "Please enter Email";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        this.state.mentorEmail
      )
    ) {
      formIsValid = false;
      errors.mentorEmail = "Please, provide valid Email";
    } else {
      errors.mentorEmail = null;
    }
    //password
    if (this.state.mentorPassword === "") {
      formIsValid = false;
      errors.mentorPassword = "Please enter Password";
    } else if (!/^[A-Za-z]\w{7,14}$/.test(this.state.mentorPassword)) {
      formIsValid = false;
      errors.mentorPassword = (
        <ul>
          <li>Password should be 7 to 16 characters long</li>
          <li>
            Password should conatin only alphanumeric characters and underscore
          </li>
          <li>Password's first character must be a letter</li>
        </ul>
      );
    } else {
      errors.mentorPassword = null;
    }
    //confirmPassword
    if (this.state.confirmPassword === "") {
      formIsValid = false;
      errors.confirmPassword = "Please enter Password";
    } else if (!this.state.confirmPassword.match(this.state.mentorPassword)) {
      formIsValid = false;
      errors.confirmPassword = "Please enter correct Password";
    } else {
      errors.confirmPassword = null;
    }
    //DateOfBirth
    if (this.state.mentorDob === "") {
      formIsValid = false;
      errors.mentorDob = "Please enter Date Of Birth";
    } else if (new Date(this.state.mentorDob).getTime() >= currentDate) {
      formIsValid = false;
      errors.mentorDob = "Please, provide valid Date of Birth";
    } else {
      errors.mentorDob = null;
    }
    //MobileNumber
    if (this.state.mentorMoNo === "") {
      formIsValid = false;
      errors.mentorMoNo = "Please enter Mobile Number";
    } else if (!Number(this.state.mentorMoNo)) {
      formIsValid = false;
      errors.mentorMoNo = "Please enter Mobile Number";
    } else if (!/^\d{10}$/.test(this.state.mentorMoNo)) {
      formIsValid = false;
      errors.mentorMoNo = "Please, enter valid Mobile Number";
    } else {
      errors.mentorMoNo = null;
    }
    // //batch Size
    // if (this.state.batchSize === "") {
    //   formIsValid = false;
    //   errors.batchSize = "Please enter Batch Size";
    // } else if (!Number(this.state.batchSize)) {
    //   formIsValid = false;
    //   errors.batchSize = "Please enter Batch Size";
    // } else if (this.state.batchSize > 25) {
    //   formIsValid = false;
    //   errors.batchSize = "Please enter Batch Size less than 25";
    // } else {
    //   errors.batchSize = null;
    // }
    // mentorJoin year
    if (this.state.mentorJoinYear === "") {
      formIsValid = false;
      errors.mentorJoinYear = "Please enter Join Date";
    } else if (new Date(this.state.mentorJoinYear).getTime() >= currentDate) {
      formIsValid = false;
      errors.mentorJoinYear = "Please enter Valid Join Date";
    } else {
      errors.mentorJoinYear = null;
    }
    // // avg rating
    // if (this.state.avgRating === "") {
    //   formIsValid = false;
    //   errors.avgRating = "Please enter Skill Rating";
    // } else if (!Number(this.state.avgRating)) {
    //   formIsValid = false;
    //   errors.avgRating = "Please enter Skill Rating";
    // } else if (this.state.avgRating > 5) {
    //   formIsValid = false;
    //   errors.avgRating = "Please enter Skill Rating less than 5";
    // } else {
    //   errors.avgRating = null;
    // }
    this.setState({ errors: errors });
    return formIsValid;
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (
      this.validationHandler() &&
      this.state.mentorGender !== "" &&
      this.state.courseId !== ""
    ) {
      let updatedMentor = {
        mentorFirstName: this.state.mentorFirstName,
        mentorLastName: this.state.mentorLastName,
        mentorEmail: this.state.mentorEmail,
        mentorPassword: this.state.mentorPassword,
        mentorMoNo: this.state.mentorMoNo,
        mentorDob: this.state.mentorDob,
        mentorGender: this.state.mentorGender,
        mentorJoinYear: this.state.mentorJoinYear,
        avgRating: this.state.avgRating,
      };
      console.log(JSON.stringify(updatedMentor));

      MentorService.updateMentorByMentorId(this.props.data1, updatedMentor)
        .then((response) => {
          this.setState({ updationStatus: false });
          alert("Mentor updated successfully");
        })
        .catch((error) => {
          console.error(error.response.data.message);
          alert(error.response.data.message);
        });
    } else {
      alert("Form has some errors!");
      console.error(JSON.stringify(this.state.errors));
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
              Hello Mentor,
              <br />
              Please update your information</p>
          </center>
        </div>
          <form
            className="form-horizontal bg-secondary mentorUpdateCard"
            onSubmit={this.submitHandler}
          >
            <div className="form-group">
              <strong className="col-sm-3 control-label">First Name*</strong>
              <div className="col-sm-9">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  name="mentorFirstName"
                  value={this.state.mentorFirstName}
                  onChange={this.changeHandler}
                />
                <span className="error">{errors.mentorFirstName}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Last Name*</strong>
              <div className="col-sm-9">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  name="mentorLastName"
                  value={this.state.mentorLastName}
                  onChange={this.changeHandler}
                />
                <span className="error">{errors.mentorLastName}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Email* </strong>
              <div className="col-sm-9">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  name="mentorEmail"
                  value={this.state.mentorEmail}
                  onChange={this.changeHandler}
                />
                <span className="error">{errors.mentorEmail}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Password*</strong>
              <div className="col-sm-9">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="mentorPassword"
                  value={this.state.mentorPassword}
                  onChange={this.changeHandler}
                />
                <span className="error">{errors.mentorPassword}</span>
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
                  value={this.state.confirmPassword}
                  onChange={this.changeHandler}
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
                  name="mentorDob"
                  value={this.state.mentorDob}
                  onChange={this.changeHandler}
                />
                <span className="error">{errors.mentorDob}</span>
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
                  name="mentorMoNo"
                  value={this.state.mentorMoNo}
                  onChange={this.changeHandler}
                />
                <span className="error">{errors.mentorMoNo}</span>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-4">
                  <strong className="col-sm-2 control-label">
                    Join Year*{" "}
                  </strong>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <input
                    type="date"
                    className="form-control"
                    name="mentorJoinYear"
                    value={this.state.mentorJoinYear}
                    onChange={this.changeHandler}
                  />
                  <span className="error">{errors.mentorJoinYear}</span>
                </div>
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
                        name="mentorGender"
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
                        name="mentorGender"
                        value="FEMALE"
                        onChange={this.changeHandler}
                      />{" "}
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

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
         <div className="card text-white bg-dark  updatedMentorProfileCard">
            <div className="card-body">
              <p className="card-text">
                First Name :- {this.state.mentorFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name :- {this.state.mentorLastName}{" "}
              </p>
              <p className="card-text">
                Email Id :- {this.state.mentorEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No :- {this.state.mentorMoNo}{" "}
              </p>
              <p className="card-text">
                Join date :- {this.state.mentorJoinYear}{" "}
              </p>
            </div>
          </div>
       </div>
      );
    }
  }
}

export default MentorUpdateForm;
