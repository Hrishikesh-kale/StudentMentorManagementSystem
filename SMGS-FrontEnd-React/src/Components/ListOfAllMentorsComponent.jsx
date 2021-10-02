import React, { Component } from "react";
import MentorService from "../Services/MentorService";
import Header from "./HeaderComponent";

class ListOfAllMentors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentors: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(mentorId) {
    MentorService.deleteMentorByMentorId(mentorId).then((res) => {
      this.setState({
        mentors: this.state.mentors.filter((a) => a.mentorId !== mentorId),
      });
      alert("Mentor deleted successfully")
    });
  }

  componentDidMount() {
    MentorService.getAllMentors()
      .then((response) => {
        this.setState({ mentors: response.data });
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
                List of All Registered Mentors
              </p>
            </center>
          </div>
        <div className="listOfCourseDetails">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Mentor Id</th>
              <th scope="col">First Name</th>
              {/* <th scope="col">Course Id</th> */}
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Batch Size</th>
              <th scope="col">Current Students</th>
              <th scope="col">Skill Rating</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.mentors.map((mentor) => (
              <tr key={mentor.mentorId}>
                <th>{mentor.mentorId}</th>
                <td>{mentor.mentorFirstName}</td>
                {/* <td>{mentor.mentorCourseId}</td> */}
                <td>{mentor.mentorLastName}</td>
                <td>{mentor.mentorEmail}</td>
                <td>{mentor.mentorGender}</td>
                <td>{mentor.batchSize}</td>
                <td>{mentor.currentBatchSize}</td>
                <td>{mentor.avgRating}</td>
                <td>{mentor.mentorMoNo}</td>
                <td>
                  <button
                    onClick={() => this.deleteMentorHandler(mentor.mentorId)}
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

export default ListOfAllMentors;
