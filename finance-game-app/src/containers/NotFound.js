import React from "react";
import "./NotFound.css";
import Robot from "../images/robot-msg-error.png"; 

export default () =>
  <div className="NotFound">
    <h3>Sorry, that page cannot be found!</h3>
    <div className="error-bucket">
    	<img src={Robot} className="error" alt="404 Error" />
    </div>
  </div>;