import React, { Component } from "react";

import AdminService from "../Services/AdminService";

class AdminProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminDetails: "",
    };
  }

  componentDidMount() {
    AdminService.getAdminDetailsByAdminId(this.props.data1).then((response) => {
      this.setState({ adminDetails: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                Admin Profile Information:
              </p>
            </center>
          </div>
        <div className="card text-white bg-dark mb-3 adminProfileCard">
          <div className="card-body">
            <div className="container">
              <br />
              <p className="card-text">
                Admin Email :- {this.state.adminDetails.adminEmail}{" "}
              </p>
              <p className="card-text">
                Date Of Birth :- {this.state.adminDetails.adminDob}{" "}
              </p>
              <p className="card-text">
                Gender :- {this.state.adminDetails.adminGender}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfileCard;
