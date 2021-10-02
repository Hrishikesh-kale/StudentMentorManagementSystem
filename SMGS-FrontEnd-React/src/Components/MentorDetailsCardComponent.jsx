import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import LoadingComponenet from "./LoadingComponenet";

class MentorDetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignedMentor: "",
      assignedMentorAddress: "",
    };
  }

  componentDidMount() {
    StudentService.getAssignedMentorByStudentId(this.props.data1).then(
      (response) => {
        this.setState({ assignedMentor: response.data });
      }
    );
    StudentService.getAssignedMentorsAddressByStudentId(this.props.data1).then(
      (response) => {
        this.setState({ assignedMentorAddress: response.data });
      }
    );
  }

  render() {
    if (this.state.assignedMentor === "") {
      return (
        <div>
          <div className="greetingsProfileCard">
            <p className="greetingsProfileInfo">
              You currently don't have any mentor assigned
            </p>
          </div>
          <div className="card text-white bg-dark mb-3 mentordetailcard nomentortext">
            <h5>The role of a mentor is to encourage the personal </h5>
            <h5> and professional development of a mentee </h5>
            <h5>through the sharing of knowledge, expertise and experience.</h5>
            <br />
            <br />
            <h5> Please Get Your Mentor To Get Best experience ! </h5>
            (Profile Home -> Mentor -> Get Mentor)
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="greetingsProfileCard">
            <p className="greetingsProfileInfo">
              You have been assigned the following Mentor</p>
          </div>
          <div className="card text-white bg-dark mb-3 profilecard1">
            <div className="card-body">
              <h4 className="card-title">Your Mentor Details:</h4>
              <p className="card-text">
                Mentor Id :- {this.state.assignedMentor.mentorId}{" "}
              </p>
              <p className="card-text">
                First Name :- {this.state.assignedMentor.mentorFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name :- {this.state.assignedMentor.mentorLastName}{" "}
              </p>
              <p className="card-text">
                Email Id :- {this.state.assignedMentor.mentorEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No :- {this.state.assignedMentor.mentorMoNo}{" "}
              </p>
              <p className="card-text">
                D.O.B. :- {this.state.assignedMentor.mentorDob}{" "}
              </p>
              <p className="card-text">
                Joining date :- {this.state.assignedMentor.mentorJoinYear}{" "}
              </p>
            </div>
          </div>

          <div className="card text-white bg-dark mb-3 profilecard2">
            <div className="card-body">
              <h4 className="card-title">Address Details:</h4>
              <p className="card-text">
                Address Line 1 :-{" "}
                {this.state.assignedMentorAddress.addressLine1}{" "}
              </p>
              <p className="card-text">
                Address Line 2 :-{" "}
                {this.state.assignedMentorAddress.addressLine2}{" "}
              </p>
              <p className="card-text">
                Area :- {this.state.assignedMentorAddress.area}{" "}
              </p>
              <p className="card-text">
                City :- {this.state.assignedMentorAddress.city}{" "}
              </p>
              <p className="card-text">
                State :- {this.state.assignedMentorAddress.state}{" "}
              </p>
              <p className="card-text">
                Country :- {this.state.assignedMentorAddress.country}{" "}
              </p>
              <p className="card-text">
                Pincode :- {this.state.assignedMentorAddress.pinCode}{" "}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MentorDetailsCard;
