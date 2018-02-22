import React, { Component } from "react";
import "./Home.css";
import Yoda from "../images/yoda-defend.png"; 
import { Label } from "react-bootstrap";  

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Finance Game</h1>
          <p>A financial learning game to <Label bsStyle="success">improve</Label> your skills.</p>
        </div>
        <div className="lander-yoda">
          <img src={Yoda} className="lander-robot" alt="alt image" />
        </div>
      </div>
    );
  }
}