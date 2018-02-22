import React, { Component } from "react";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="lander">
          <h1>Dashboard</h1>
          <p>This is the Dashboard component being rendered to the DOM.</p>
          <p>The Dashboard will show the user their progress throughout the game.</p>
          <p>This is where the user will be redirected to upon login.</p>
        </div>
      </div>
    );
  }
}