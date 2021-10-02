import { Link } from "react-router-dom";
import React, { Component } from "react";
import UserService from "../Services/UserService";

class AdminLoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BackendError: "",

      username: "",
      password: "",
      userrole: "",
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  signUpHandler = () => {
    this.props.history.push("/mentorsignup");
  };

  loginHandler = (event) => {
    event.preventDefault();
    const authUser = {
      userEmail: this.state.username,
      userPassword: this.state.password,
      userRole: "admin",
    };

    UserService.authenticateUser(authUser)
      .then((response) =>{
          localStorage.setItem("userData", JSON.stringify(response.data));
          localStorage.setItem("userrole", "mentor");
          const data = JSON.parse(localStorage.getItem("userData"));
          console.log(JSON.stringify(data));
          this.props.history.push("/adminfunctions");

        alert("Logged In successfully")
      }).catch((error) => {
        console.error(error.response.data.message);
        this.setState({ BackendError: error.response.data.message });
        alert(error.response.data.message)
      });
  };

  componentDidMount() {
    var data = JSON.parse(localStorage.getItem("userData"));
      if (data) {
        this.props.history.push("/adminfunctions");
      } else {
        console.log("stay on login page");
      }
  }

  render() {
    return (
      <div className="container">
        <div className="greetingsProfileCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
            Hello Admin,
              <br/>
            Please login with your credentials</p>
          </center>
          </div>
        <form className="form-horizontal bg-dark adminLoginCard">
          <div className="row">
          </div>
            <br/>
          <div className="form-group">
            <strong className="col-sm control-label">Email Id : </strong>
            <div className="col-sm-9">
              <input
                type="email"
                placeholder="email@example.com"
                className="form-control"
                name="username"
                onChange={this.changeHandler}
                value={this.state.username}
                required
              />
            </div>
          </div>
        <br/>
          <div className="form-group">
            <strong className="col-sm-3 control-label">Password :</strong>
            <div className="col-sm-9">
              <input
                type="password"
                placeholder="********"
                className="form-control"
                name="password"
                onChange={this.changeHandler}
                value={this.state.password}
                required
              />
            </div>
          </div>
        <br/>
          <div className="form-group">
            <div className="row">
              <div className="col-sm-3">
                <button
                  className="btn btn-outline-light"
                  onClick={this.loginHandler}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminLoginForm;
