import React, { Component } from "react";
import "./Campaign.css";
import { Label } from "react-bootstrap"; 

export default class Campaign extends Component {
  render() {
    return (
      <div className="Campaign">
        <div className="lander">
          <h1>Campaign</h1>
          <p>The Campaign is intended to be the <Label bsStyle="success">core</Label> of the game where the user <Label bsStyle="success">answers 
          questions</Label> | <Label bsStyle="danger">battles enemies</Label> | <Label bsStyle="success">gains XP</Label> | 
          <Label bsStyle="success">levels up</Label>.</p>
          <p>As the user progresses through the campaign, the questions become <Label bsStyle="danger">harder</Label> and leveling up becomes more difficult.</p>
        </div>
      </div>
    );
  }
}