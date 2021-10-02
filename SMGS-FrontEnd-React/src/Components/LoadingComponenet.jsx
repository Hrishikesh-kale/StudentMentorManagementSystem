import React, { Component } from "react";

export default class LoadingComponenet extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  
  render() {
    return (
      <div >
         <div className="loadingCard">
          <center className="greetingsProfileInfo">
            <p style={{ fontSize: "20px" }}>
            We are searching for the best mentor available...<br/>
            </p>
          </center> 
          <div
            class="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    );
  }
}
