import { Link } from "react-router-dom";
import React, { Component } from "react";

class SuccessfullRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
    };
  }

  componentDidMount() {
    this.setState({ details: this.props.location.state.state1 });
    
  }
 

  render() {
    return (
      <div>
        <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
            Hello {this.state.details.FirstName}, Thank you for joining us<br/>
            Please, remember your credentials
            </p>
          </center>
          </div>
        <div className="card text-white bg-dark mb-3 successfullRegCard">

          <div className="card-body">
            <p className="card-text">
              You Have Registered With Email: {this.state.details.Email}{" "}
            </p>
            <p className="card-text">
              Your Course ID: {this.state.details.courseId}{" "}
            </p>
            <p className="card-text">
              Your Mobile No: {this.state.details.MobileNo}{" "}
            </p>
            <p className="card-text">
              Your Address: {this.state.details.addressLine1}{" "}
              {this.state.details.addressLine2}{" "}
            </p>
            <br/>
            <Link to="/home">
              <button className="btn btn-outline-light">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessfullRegistration;
