import React, { Component } from "react";
import MentorService from "../Services/MentorService";
import StudentService from "../Services/StudentService";
import Header from "./HeaderComponent";

class ListOfAssignedStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignedStudentList: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(studentId) {
    StudentService.deleteStudentByStudentId(studentId).then((res) => {
      this.setState({
        assignedStudentList: this.state.assignedStudentList.filter(
          (a) => a.studentId !== studentId
        ),
      });
    });
  }

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
                These are your batch details
              </p>
            </center>
          </div>        <div className="listOfAssignedStudents">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">D.O.B.</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Marks</th>
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
                <td>{student.studentGender}</td>
                <td>{student.studentDob}</td>
                <td>{student.studentMobileNo}</td>
                <td>{student.studentMarks}</td>
                <td>
                  <button
                    onClick={() => this.deleteMentorHandler(student.studentId)}
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

export default ListOfAssignedStudents;
