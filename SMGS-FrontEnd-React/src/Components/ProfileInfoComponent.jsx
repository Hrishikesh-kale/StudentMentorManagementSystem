import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import MentorService from "../Services/MentorService";
import Header from "./HeaderComponent";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: "",
      mentor: "",
      address: "",
    };
  }

  componentDidMount() {
    if (this.props.userStatus === "student") {
      StudentService.getStudentByStudentId(this.props.data1).then(
        (response) => {
          this.setState({ student: response.data });
        }
      );
      StudentService.getAddressByStudentId(this.props.data1).then(
        (response) => {
          this.setState({ address: response.data });
        }
      );
    }

    if (this.props.userStatus === "mentor") {
      MentorService.getMentorByMentorId(this.props.data1).then((response) => {
        this.setState({ mentor: response.data });
      });
    }
    MentorService.getAddressByMentorId(this.props.data1).then((response) => {
      this.setState({ address: response.data });
    });
  }

  render() {
    if (this.state.student === "") {
      return (
        <div className="row">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Hello &nbsp;
                {this.state.mentor.mentorFirstName}
                &nbsp;{this.state.mentor.mentorLastName}
                <br />
                Welcome to SM System
              </p>
            </center>
          </div>
          <div className="card text-white bg-dark  profilecard1">
            <div className="card-body">
              <h4 className="card-title">
                <u>Profile Details:</u>
              </h4>
              <p className="card-text">
                <b> Mentor Id :- {this.state.mentor.mentorId}</b>
              </p>
              <p className="card-text">
                First Name :- {this.state.mentor.mentorFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name :- {this.state.mentor.mentorLastName}{" "}
              </p>
              <p className="card-text">
                Email Id :- {this.state.mentor.mentorEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No :- {this.state.mentor.mentorMoNo}{" "}
              </p>
              <p className="card-text">
                Batch Size :- {this.state.mentor.batchSize} &nbsp; Current
                Students :- {this.state.mentor.currentBatchSize}{" "}
              </p>
              <p className="card-text">
                Join date :- {this.state.mentor.mentorJoinYear}{" "}
              </p>
            </div>
          </div>
          <div className="card text-white bg-dark profilecard3">
            <div className="card-body">
              <h4 className="card-title">
                <u>Address Details:</u>
              </h4>
              <p className="card-text">
                Address Line 1 :- {this.state.address.addressLine1}{" "}
              </p>
              <p className="card-text">
                Address Line 2 :- {this.state.address.addressLine2}{" "}
              </p>
              <p className="card-text">Area :- {this.state.address.area} </p>
              <p className="card-text">City :- {this.state.address.city} </p>
              <p className="card-text">State :- {this.state.address.state} </p>
              <p className="card-text">
                Country :- {this.state.address.country}{" "}
              </p>
              <p className="card-text">
                Pincode :- {this.state.address.pinCode}{" "}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mentor === "") {
      return (
        <div className="row">
          <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Hello &nbsp;
                {this.state.student.studentFirstName}
                &nbsp;{this.state.student.studentLastName}
                <br />
                Welcome to SM System
              </p>
            </center>
          </div>
          <div className="card text-white bg-dark mb-3 profilecard1">
            <div className="card-body">
              <h4 className="card-title">
                <u>Profile Details:</u>
              </h4>
              <p className="card-text">
                <b>Student Id :- {this.state.student.studentId} </b>
              </p>
              <p className="card-text">
                First Name :- {this.state.student.studentFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name :- {this.state.student.studentLastName}{" "}
              </p>
              <p className="card-text">
                Email Id :- {this.state.student.studentEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No :- {this.state.student.studentMobileNo}{" "}
              </p>
              <p className="card-text">
                D.O.B. :- {this.state.student.studentDob}{" "}
              </p>
              <p className="card-text">
                Gender :- {this.state.student.studentGender}{" "}
              </p>
            </div>
          </div>

          <div className="card text-white bg-dark mb-3 profilecard2">
            <div className="card-body">
              <h4 className="card-title">
                <u>Address Details:</u>
              </h4>
              <p className="card-text">
                Address Line 1 :- {this.state.address.addressLine1}{" "}
              </p>
              <p className="card-text">
                Address Line 2 :- {this.state.address.addressLine2}{" "}
              </p>
              <p className="card-text">Area :- {this.state.address.area} </p>
              <p className="card-text">City :- {this.state.address.city} </p>
              <p className="card-text">State :- {this.state.address.state} </p>
              <p className="card-text">
                Country :- {this.state.address.country}{" "}
              </p>
              <p className="card-text">
                Pincode :- {this.state.address.pinCode}{" "}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProfileInfo;
