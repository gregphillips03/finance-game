import React, { Component } from "react";
import "./LightningRound.css";
import { Label } from "react-bootstrap"; 

export default class LightningRound extends Component {
  render() {
    return (
      <div className="LightningRound">
        <div className="lander">
          <h1>Lightning Round</h1>
          <p>The Lightning Rounds <Label bsStyle="success">present</Label> the user with progressively harder questions
          they must answer during a set period of time.</p>
          <p>Rewards become more <Label bsStyle="success">valuable</Label> the more questions the user answer correctly.</p>
        </div>
      </div>
    );
  }
}