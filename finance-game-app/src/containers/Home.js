import React, { Component } from "react";
import "./Home.css";
import RobotWaving from "../images/robot-waving-hi.png"; 

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Finance Game</h1>
          <p>A financial learning game to improve your skills.</p>
        </div>
        <div className="lander-robot">
          <img src={RobotWaving} className="lander-robot" alt="robot waving hi" />
        </div>
      </div>
    );
  }
}