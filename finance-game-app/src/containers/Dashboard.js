import React, { Component } from "react";
import "./Dashboard.css";
import { Label } from "react-bootstrap"; 

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="lander">
          <h1>Dashboard</h1>
          <p>This is the Dashboard component being rendered to the DOM.</p>
          <p>The Dashboard will <Label bsStyle="success">show</Label> the user their <Label bsStyle="success">progress</Label> throughout the game.</p>
          <p>This is where the user will be redirected to after they select a faction.</p>
        </div>
      </div>
    );
  }
}