import React, { Component } from "react";
import MentorService from "../Services/MentorService";
import StudentService from "../Services/StudentService";

import Header from "./HeaderComponent";

class UpdateMarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignedStudentList: [],
      studentMarks: "",
      result: "",
    };
    this.updateMarksHandler = this.updateMarksHandler.bind(this);
  }

  updateMarksHandler = (studentId) => {
    StudentService.updateMarks(studentId, this.state.studentMarks).then(
      (response) => {
        this.setState({ result: response.data });
        alert("Marks updated successfully!")
      }
    )
  };
  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  componentDidMount() {
    MentorService.getAssignedStudentListByMentorId(this.props.data1).then(
      (response) => {
        this.setState({ assignedStudentList: response.data });
        
      }
    );
  }

  render() {
    return (
      <div>
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Please, update marks of students
              </p>
            </center>
          </div>
        <div className="listOfAssignedStudents">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Give Marks</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.assignedStudentList.map((student) => (
              <tr key={student.studentId}>
                <th>{student.studentId}</th>
                <td>{student.studentFirstName}</td>
                <td>{student.studentLastName}</td>
                <td>{student.studentEmail}</td>
                <td>
                  <input
                    placeholder="Marks"
                    className="form-control"
                    name="studentMarks"
                    onChange={this.changeHandler}
                    value={this.state.studentMarks}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.updateMarksHandler(student.studentId)}
                  >
                    {" "}
                    Update{" "}
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

export default UpdateMarks;
