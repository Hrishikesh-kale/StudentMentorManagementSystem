import React, { Component } from "react";
import { Link } from "react-router-dom";
import StudentService from "../Services/StudentService";

export default class DeleteStudentAccountComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            userData: JSON.parse(localStorage.getItem("userData"))
        }
    }
  componentDidMount() {
    
  }
  deleteHandler = () => {
     StudentService.deleteStudentByStudentId(this.state.userData.studentId).then(
       (res) => {
          alert("Account Deleted Successfully")
         this.props.history.push("/home");
       }
    );
  };

  cancelHandler = () =>{
      this.props.history.push("/studentfunctions")
  }

  render() {
    return (
      <div className="container">
        <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
             Delete Account
            </p>
          </center>
        </div>
        <form className="form-horizontal bg-secondary deleteStudentAccount">
          <div className="row"></div>
          <br />
          <div className="form-group">
            <strong className="col-sm-3 control-label"> Are you sure you want to delete your account?</strong>
            <div className="col-sm-9">
             
            </div>
          </div>
          <br />

          <div className="form-group">
            <div className="row">
              <div className="col-sm-3">
                <button
                  className="btn btn-outline-dark"
                  onClick={this.cancelHandler}
                >
                  Cancel
                </button>
              </div>
              <div className="col-sm-6">
                  <Link 
                    className="btn btn-danger "
                    onClick={this.deleteHandler}
                  >
                    Delete
                  </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
