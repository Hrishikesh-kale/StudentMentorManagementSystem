import React, { Component } from "react";
import StudentService from "../Services/StudentService";
import LoadingComponenet from "./LoadingComponenet";

class AssignedMentorCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backendErrors:"",
      assignedMentor: "",
      isLoading: true
    };
    this.timer = setTimeout(this.loaderFun, 5000)

  }

  loaderFun = () => {
    this.setState({isLoading: false})
  }

  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  componentDidMount() {
    StudentService.getAssignedMentorByStudentId(this.props.data1).then(
      (response) => {
        this.setState({ assignedMentor: response.data,
                      
        });
      }
    );
  }

  buttonHandler = () => {
    StudentService.getAutomaticMentor(this.props.data1).then((response) => {
      this.setState({
        assignedMentor: response.data,
      });
    }).catch((error) => {
      this.setState({backendErrors: error.response.data.message})
      console.error(this.state.backendErrors);
      alert(this.state.backendErrors)
    });
  };

  render() {
    if (this.state.assignedMentor === "") {
      return (
        <div className="card text-white bg-dark mb-3 assignedMentorCard nomentortext">
          <br />
          <br />
          <h5>You don't have any Mentor! </h5>
          <h5>The role of a mentor is to encourage the personal </h5>
          <h5> and professional development of a mentee </h5>
          <h5>through the sharing of knowledge, expertise and experience.</h5>
          <br />
          <br />
          <button className="btn btn-outline-light" onClick={this.buttonHandler}>
            Click Here To Get Mentor
          </button>
        </div>
      );
    } else {
      return (
        this.state.isLoading ? <LoadingComponenet/> : 
        <div>
          <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
            You have following mentor assigned.<br/> 
            Please go to mentor information to find more details about your mentor
            </p>
          </center>
          </div>
          <div className="card text-white bg-dark mb-3 assignedMentorCard">
            <div className="card-body">
              <p className="card-text">
                Mentor Id: {this.state.assignedMentor.mentorId}{" "}
              </p>
              <p className="card-text">
                First Name: {this.state.assignedMentor.mentorFirstName}{" "}
              </p>
              <p className="card-text">
                Last Name: {this.state.assignedMentor.mentorLastName}{" "}
              </p>
              <p className="card-text">
                Email Id: {this.state.assignedMentor.mentorEmail}{" "}
              </p>
              <p className="card-text">
                Mobile No: {this.state.assignedMentor.mentorMoNo}{" "}
              </p>
              <p className="card-text">
                D.O.B.: {this.state.assignedMentor.mentorDob}{" "}
              </p>
              <p className="card-text">
                Joining date: {this.state.assignedMentor.mentorJoinYear}{" "}
              </p>
            </div>
          </div>
        </div>
      );

    }
  }
}

export default AssignedMentorCard;
