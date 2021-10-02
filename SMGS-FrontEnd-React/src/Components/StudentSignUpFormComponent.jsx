import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import CourseService from "../Services/CourseService";

class StudentSignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAdminStatus: true,

      courses: [],
      courseId: "",

      backendError: "",
      errors: {
        courseId: "",
        studentFirstName: "",
        studentLastName: "",
        studentEmail: "",
        studentPassword: "",
        confirmPassword: "",
        studentMobileNo: "",
        studentDob: "",
        studentGender: "",
        studentMarks: "",

        addressLine1: "",
        addressLine2: "",
        area: "",
        city: "",
        pinCode: "",
      },

      studentFirstName: "",
      studentLastName: "",
      studentEmail: "",
      studentPassword: "",
      studetMobileNo: "",
      studentDob: "",
      studentGender: "",
      studentMarks: "",

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

    //AddressDetails
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

  submitHandler = (event) => {
    event.preventDefault();
    if (
      this.validationHandler() &&
      this.state.studentGender !== "" &&
      this.state.courseId !== ""
    ) {
      console.log("valid");
      let newStudent = {
        student: {
          studentFirstName: this.state.studentFirstName,
          studentLastName: this.state.studentLastName,
          studentEmail: this.state.studentEmail,
          studentPassword: this.state.studentPassword,
          studentMobileNo: this.state.studentMobileNo,
          studentDob: this.state.studentDob,
          studentGender: this.state.studentGender,
          studentMarks: this.state.studentMarks,
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
      console.log(JSON.stringify(newStudent));

      StudentService.registerNewStudent(this.state.courseId, newStudent)
        .then((response) => {
          if (this.props.data === "fromAdmin") {
            this.setState({ fromAdminStatus: false });
          } else {
            const dataToTransfer = {
              FirstName: this.state.studentFirstName,
              LastName: this.state.studentLastName,
              courseId: this.state.courseId,
              Email: this.state.studentEmail,
              MobileNo: this.state.studentMobileNo,
              addressLine1: this.state.addressLine1,
              addressLine2: this.state.addressLine2,
            };
            this.props.history.push({
              pathname: "/successfullreg",
              state: { state1: dataToTransfer },
            });
          }
          alert("Student added Successfully!");
        })
        .catch((error) => {
          console.error(error.response.data);
          this.setState({ backendError: error.response.data.message });
          alert(error.response.data.message);
        });
    } else {
      alert("Form has some errors!");
      console.error("Invalid Form" + JSON.stringify(this.state.errors));
    }
  };

  componentDidMount() {
    CourseService.getAllCourses().then((response) => {
      this.setState({ courses: response.data });
    });
  }

  render() {
    const { errors } = this.state;
    if (this.state.fromAdminStatus) {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
              Hello Student,
              <br />
              Please register with your information</p>
          </center>
        </div>
          <form
            className="form-horizontal bg-secondary studentSignupCard"
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
                  name="confirmPassword"
                  onChange={this.changeHandler}
                  value={this.state.confirmPassword}
                  className="form-control"
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
                </div>
              </div>
            </div>
            <br/>
            <h4> Address Details:</h4>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Address*</strong>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Address line 1"
                  className="form-control"
                  name="addressLine1"
                  onChange={this.changeHandler}
                  value={this.state.addressLine1}
                />
                <span className="error">{errors.addressLine1}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">
                Address Line 2*
              </strong>
              <div className="col-sm-10">
                <input
                  type="text"
                  placeholder="Address line 2"
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
              </div>
              <span className="error">{errors.pinCode}</span>
            </div>

            <br/>
            <h4> Select Course:</h4>

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

            <br/>
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

export default StudentSignUpForm;
