import React from "react";
import "./NotFound.css";
import Robot from "../images/robot-msg-error.png"; 

export default () =>
  <div className="NotFound">
    <h3>Sorry, page not found!</h3>
    <img src={Robot} className="four-oh-four-error" alt="404 Error" />
  </div>;