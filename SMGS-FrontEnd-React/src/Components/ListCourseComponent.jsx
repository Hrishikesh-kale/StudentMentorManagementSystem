import React, { Component } from "react";
import CourseService from "../Services/CourseService";

import Header from "./HeaderComponent";

class ListCourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };

    this.deleteCourse = this.deleteCourse.bind(this);
  }

  deleteCourse(courseId) {
    CourseService.deleteCourse(courseId).then((res) => {
      this.setState({
        courses: this.state.courses.filter((a) => a.courseId !== courseId),
      });
      alert("Course deleted successfully")
    });
  }

  componentDidMount() {
    CourseService.getAllCourses().then((response) => {
      this.setState({ courses: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                List of All Courses
              </p>
            </center>
          </div>
        <div className="listOfCourseDetails">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Course ID</th>
              <th scope="col">Course Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">Start Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.courses.map((course) => (
              <tr key={course.courseId}>
                <th>{course.courseId}</th>
                <td>{course.courseName}</td>
                <td>{course.startDate}</td>
                <td>{course.endDate}</td>
                <td>
                  <button onClick={() => this.deleteCourse(course.courseId)}>
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default ListCourseComponent;
