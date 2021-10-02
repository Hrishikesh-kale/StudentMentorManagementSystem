import React, { Component } from "react";

import StudentService from "../Services/StudentService";

import Header from "./HeaderComponent";

class ListOfAllStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(studentId) {
    StudentService.deleteStudentByStudentId(studentId).then((res) => {
      this.setState({
        students: this.state.students.filter((a) => a.studentId !== studentId),
      });
      alert("Student deleted successfully")
    });
  }

  componentDidMount() {
    StudentService.getStudentList().then((response) => {
      this.setState({ students: response.data });
    })
    .catch((error) => {
      console.error(error.response.data.message);
    });
  }

  render() {
    return (
      <div>
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                List of All Enrolled Students
              </p>
            </center>
          </div>
        <div className="listOfCourseDetails">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Student Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Gender</th>
                <th scope="col">Marks</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.studentId}>
                  <th>{student.studentId}</th>
                  <td>{student.studentFirstName}</td>
                  <td>{student.studentLastName}</td>
                  <td>{student.studentEmail}</td>
                  <td>{student.studentMobileNo}</td>
                  <td>{student.studentDob}</td>
                  <td>{student.studentGender}</td>
                  <td>{student.studentMarks}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.deleteMentorHandler(student.studentId)
                      }
                    >
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

export default ListOfAllStudents;
