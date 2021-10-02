import React, { Component } from "react";
import CourseService from "../Services/CourseService";

class AddCourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetails:'',
      errors: {
        courseName: "",
        startDate: "",
        endDate: "",
      },

      status: true,

      courseName: "",
      startDate: "",
      endDate: "",
    };
  }

  validationHandler = () => {
    let errors = this.state.errors;
    let formIsValid = true;
    let date = new Date();
    let currentDate = date.getTime();

    //courseName
    if (this.state.courseName === "") {
      formIsValid = false;
      errors.courseName = "Please, enter Course Name";
    } else errors.courseName = null;

    //course Start Date
    if (this.state.startDate === "") {
      formIsValid = false;
      errors.startDate = "Please, select Course Start Date";
    } else if (new Date(this.state.startDate).getTime() < currentDate) {
      formIsValid = false;
      errors.startDate = "Start Date cannot be less than Current Date";
    } else errors.startDate = null;

    //course End Date
    if (this.state.endDate === "") {
      formIsValid = false;

      errors.endDate = "Please, select Course End Date";
    } else if (
      new Date(this.state.endDate).getTime() <
      new Date(this.state.startDate).getTime()
    ) {
      formIsValid = false;
      errors.endDate = "End Date cannot be less than Current Date/ Start Date";
    } else errors.endDate = null;

    this.setState({ errors: errors });
    return formIsValid;
  };

  submitHandler = (event) => {
    event.preventDefault();

    if (this.validationHandler()) {
      let newCourse = {
        courseName: this.state.courseName,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      };

      
      CourseService.addNewCourse(newCourse).then((response) => {
        this.setState({ status: false });
        this.setState({courseDetails: response.data})
        alert("Course added Successfully!");
      });
    } else {
      alert("Form has some errors!");
      console.log("Invalid Form" + JSON.stringify(this.state.errors));
    }
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { errors } = this.state;
    if (this.state.status) {
      return (
        <div className="container">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Add New Course
              </p>
            </center>
          </div>
          <form
            className="form-horizontal bg-dark addCourseCard"
            onSubmit={this.submitHandler}
          >
            <div className="form-group">
              <strong className="col-sm-3 control-label">Course Name*</strong>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.changeHandler}
                  name="courseName"
                  value={this.state.courseName}
                  placeholder="Course Name"
                />
                <span className="error">{errors.courseName}</span>
              </div>
            </div>

            <div className="form-group">
              <strong className="col-sm-3 control-label">Start Date*</strong>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  onChange={this.changeHandler}
                  value={this.state.startDate}
                />
                <span className="error">{errors.startDate}</span>
              </div>
            </div>
            <div className="form-group">
              <strong className="col-sm-3 control-label">End Date*</strong>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  onChange={this.changeHandler}
                  value={this.state.endDate}
                />
                <span className="error">{errors.endDate}</span>
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
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-outline-light ">
                    Add Course
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
                Course Information updated Successfully! Please see updated course
                information below:
              </p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 coursedetailcard">
          <div className="card-body">
            <h5 className="card-title"><u>Course Information:</u></h5>
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
}

export default AddCourseForm;
