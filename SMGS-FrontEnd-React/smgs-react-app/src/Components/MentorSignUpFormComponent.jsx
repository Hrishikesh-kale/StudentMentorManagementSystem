import React, { Component } from "react";
import CourseService from "../Services/CourseService";
import MentorService from "../Services/MentorService";

class MentorSignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAdminStatus: true,

      backendErrors: "",
      errors: {
        courseId: "",

        mentorFirstName: "",
        mentorLastName: "",
        mentorEmail: "",
        mentorPassword: "",
        mentorDob: "",
        mentorMoNo: "",
        batchSize: "",
        mentorJoinYear: "",
        mentorGender: "",
        avgRating: "",

        addressLine1: "",
        addressLine2: "",
        area: "",
        city: "",
        pinCode: "",
      },

      courses: [],
      courseId: "",

      mentorFirstName: "",
      mentorLastName: "",
      mentorEmail: "",
      mentorPassword: "",
      confirmPassword: "",
      mentorDob: "",
      mentorMoNo: "",
      batchSize: "",
      mentorJoinYear: "",
      mentorGender: "",
      avgRating: "",

      addressLine1: "",
      addressLine2: "",
      area: "",
      city: "",
      state: "Maharashtra",
      country: "India",
      pinCode: "",
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
    //batch Size
    if (this.state.batchSize === "") {
      formIsValid = false;
      errors.batchSize = "Please enter Batch Size";
    } else if (!Number(this.state.batchSize)) {
      formIsValid = false;
      errors.batchSize = "Please enter Batch Size";
    } else if (this.state.batchSize > 25) {
      formIsValid = false;
      errors.batchSize = "Please enter Batch Size less than 25";
    } else {
      errors.batchSize = null;
    }
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
    // avg rating
    if (this.state.avgRating === "") {
      formIsValid = false;
      errors.avgRating = "Please enter Skill Rating";
    } else if (!Number(this.state.avgRating)) {
      formIsValid = false;
      errors.avgRating = "Please enter Skill Rating";
    } else if (this.state.avgRating > 5) {
      formIsValid = false;
      errors.avgRating = "Please enter Skill Rating less than 5";
    } else {
      errors.avgRating = null;
    }

    // from here Address validation start
    if (this.state.addressLine1 === "") {
      formIsValid = false;
      errors.addressLine1 = "Please enter AddressLine1";
    } else {
      errors.addressLine1 = null;
    }
    if (this.state.addressLine2 === "") {
      formIsValid = false;
      errors.addressLine2 = "Please enter AddressLine2";
    } else {
      errors.addressLine2 = null;
    }
    if (this.state.city === "") {
      formIsValid = false;
      errors.city = "Please enter City";
    } else if (!this.state.city.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors.city = "Please, enter letters only";
    } else {
      errors.city = null;
    }
    if (this.state.area === "") {
      formIsValid = false;
      errors.area = "Please enter Area";
    } else {
      errors.area = null;
    }
    if (this.state.pinCode === "") {
      formIsValid = false;
      errors.pinCode = "Please enter PinCode";
    } else if (!Number(this.state.pinCode)) {
      formIsValid = false;
      errors.pinCode = "Please enter PinCode";
    } else if (!/(^\d{6}$)/.test(this.state.pinCode)) {
      formIsValid = false;
      errors.pinCode = "Please enter Valid PinCode";
    } else {
      errors.pinCode = null;
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    CourseService.getAllCourses().then((response) => {
      this.setState({ courses: response.data });
    });
  }

  submitHandler = (event) => {
    event.preventDefault();

    if (
      this.validationHandler() &&
      this.state.mentorGender !== "" &&
      this.state.courseId !== ""
    ) {
      let newMentor = {
        mentor: {
          mentorFirstName: this.state.mentorFirstName,
          mentorLastName: this.state.mentorLastName,
          mentorEmail: this.state.mentorEmail,
          mentorPassword: this.state.mentorPassword,
          mentorMoNo: this.state.mentorMoNo,
          batchSize: this.state.batchSize,
          mentorDob: this.state.mentorDob,
          mentorGender: this.state.mentorGender,
          mentorJoinYear: this.state.mentorJoinYear,
          avgRating: this.state.avgRating,
        },
        address: {
          addressLine1: this.state.addressLine1,
          addressLine2: this.state.addressLine2,
          area: this.state.area,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          pinCode: this.state.pinCode,
        },
      };
      console.log(JSON.stringify(newMentor));
      MentorService.registerNewMentor(this.state.courseId, newMentor)
        .then((response) => {
          if (this.props.data === "fromAdmin") {
            this.setState({ fromAdminStatus: false });
          } else {
            const dataToTransfer = {
              FirstName: this.state.mentorFirstName,
              LastName: this.state.mentorLastName,
              courseId: this.state.courseId,
              Email: this.state.mentorEmail,
              MobileNo: this.state.mentorMoNo,
              addressLine1: this.state.addressLine1,
              addressLine2: this.state.addressLine2,
            };
            this.props.history.push({
              pathname: "/successfullreg",
              state: { state1: dataToTransfer },
            });
          }
          alert("Mentor added Successfully!");
        })
        .catch((error) => {
          alert(error.response.data.message);
          this.setState({ backendErrors: error.response.data.message });
          console.error(error.response.data.message);
        });
    } else {
      alert("Form has some errors!");
      console.error("Invalid Form" + JSON.stringify(this.state.errors));
    }
  };

  render() {
    const errors = this.state.errors;
    if (this.state.fromAdminStatus) {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
              Hello Mentor,
              <br />
              Please register with your information</p>
          </center>
        </div>
          <form
            className="form-horizontal bg-secondary mentorSignupCard"
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
                  <strong className="col-sm-3 control-label">
                    Batch Size*{" "}
                  </strong>
                </div>
                <div className="col-sm-4">
                  <strong className="col-sm-2 control-label">
                    Joining Date*{" "}
                  </strong>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <input
                    type="number"
                    placeholder="ex.(25)"
                    className="form-control"
                    name="batchSize"
                    value={this.state.batchSize}
                    onChange={this.changeHandler}
                  />
                  <span className="error">{errors.batchSize}</span>
                </div>
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
                  <span className="error">{errors.mentorGender}</span>
                </div>
              </div>
            </div>
            <br/>
            <h2> Address Details:</h2>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Address*</strong>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Address_line"
                  className="form-control"
                  name="addressLine1"
                  onChange={this.changeHandler}
                  value={this.state.addressLine1}
                />
                <span className="error">{errors.addressLine1}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Address_line2*</strong>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Address_line2"
                  className="form-control"
                  name="addressLine2"
                  onChange={this.changeHandler}
                  value={this.state.addressLine2}
                />
                <span className="error">{errors.addressLine2}</span>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-4">
                  <strong className="col-sm-3 control-label">Country* </strong>
                </div>
                <div className="col-sm-4">
                  <strong className="col-sm-2 control-label">State* </strong>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <input
                    type="email"
                    placeholder="Country"
                    className="form-control"
                    name="country"
                    disabled
                    value="India"
                  />
                </div>
                <div className="col-sm-4">
                  <input
                    placeholder="State"
                    className="form-control"
                    name="state"
                    disabled
                    value="Maharashtra"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-4">
                  <strong className="col-sm-3 control-label">City* </strong>
                </div>
                <div className="col-sm-4">
                  <strong className="col-sm-2 control-label">Area* </strong>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <input
                    placeholder="City"
                    className="form-control"
                    name="city"
                    onChange={this.changeHandler}
                    value={this.state.city}
                  />
                  <span className="error">{errors.city}</span>
                </div>
                <div className="col-sm-4">
                  <input
                    placeholder="Area"
                    className="form-control"
                    name="area"
                    onChange={this.changeHandler}
                    value={this.state.area}
                  />
                  <span className="error">{errors.area}</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-sm-4">
                  <strong className="col-sm-3 control-label">PinCode* </strong>
                </div>
              </div>
              <div className="col-sm-4">
                <input
                  type="number"
                  max="999999"
                  placeholder="ex.(444604)"
                  className="form-control"
                  name="pinCode"
                  onChange={this.changeHandler}
                  value={this.state.pinCode}
                />
                <span className="error">{errors.pinCode}</span>
              </div>
            </div>
          <br/>
            <h2> Select Course:</h2>
            <div className="row">
              <div className="col-sm-12">
                <strong className="col-sm-3 control-label">
                  Rate Your Skill*{" "}
                </strong>
              </div>
            </div>
            <div className="col-sm-4">
              <input
                type="number"
                max="5"
                placeholder="On the scale of 5"
                className="form-control"
                name="avgRating"
                onChange={this.changeHandler}
                value={this.state.avgRating}
              />
              {this.state.validationErrors && (
                <h3 className="signuperrormsg">
                  {" "}
                  {this.state.validationErrors.avgRating}{" "}
                </h3>
              )}
            </div>
            <br />

            <table className="table table-striped table courseTable">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col"> </th>
                </tr>
              </thead>

              <tbody>
                {this.state.courses.map((course) => (
                  <tr key={course.courseId}>
                    <td>{course.courseName}</td>
                    <td>{course.startDate}</td>
                    <td>{course.endDate}</td>
                    <td>
                      {" "}
                      <input
                        type="radio"
                        value={course.courseId}
                        name="courseId"
                        onChange={this.changeHandler}
                      />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <span className="error">{errors.courseId}</span>

            <div className="form-group">
              <div className="col-sm-9 col-sm-offset-3">
                <span className="help-block">*Required fields</span>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-outline-dark">
                    Register
                  </button>
                </div>
                <div className="col-sm-6">
                  <button className="btn btn-dark">Back to login</button>
                </div>
              </div>
            </div><br/>
          </form>
        </div>
      );
    } else {
      return (
        <div className="card text-white bg-dark mb-3 successupdationcard">
          <div className="card-body">
            <h5 className="card-title">Successfully Added..!!</h5>
          </div>
        </div>
      );
    }
  }
}

export default MentorSignUpForm;
