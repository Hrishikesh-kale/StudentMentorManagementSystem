import React, { Component } from "react";
import AdminService from "../Services/AdminService";
import Header from "./HeaderComponent";

class ListOfAdmins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminList: [],
    };
    this.deleteMentorHandler = this.deleteMentorHandler.bind(this);
  }

  deleteMentorHandler(adminId) {
    AdminService.deleteAdminByAdminId(adminId).then((res) => {
      this.setState({
        adminList: this.state.adminList.filter((a) => a.adminId !== adminId),
      });
      alert("Admin deleted successfully")
    });
  }

  componentDidMount() {
    AdminService.getListOfAdmin().then((response) => {
      this.setState({ adminList: response.data });
    });
  }

  render() {
    return (
      <div>
        <div className="greetingsProfileCard">
            <center className="greetingsProfileInfo">
              <p style={{ fontSize: "20px" }}>
                List of All Admin Students
              </p>
            </center>
          </div>
        <div className="listOfCourseDetails">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Admin Id</th>
                <th scope="col">Email Id</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>

            <tbody>
              {this.state.adminList.map((admin) => (
                <tr key={admin.adminId}>
                  <th>{admin.adminId}</th>
                  <td>{admin.adminEmail}</td>
                  <td>{admin.adminDob}</td>
                  <td>{admin.adminGender}</td>

                  <td>
                    <button
                      onClick={() => this.deleteMentorHandler(admin.adminId)}
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

export default ListOfAdmins;
