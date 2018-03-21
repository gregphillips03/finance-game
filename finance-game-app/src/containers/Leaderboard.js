import React, { Component } from "react";
import "./Leaderboard.css";
import { Label } from "react-bootstrap"; 
import Board from "../components/Board"; 

export default class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <div className="lander">
          <h1>Leaderboard</h1>
          <p>This is the Leaderboard component being rendered to the DOM.</p>
          <p>The Leaderboard will provide a graphical representation of the user's progress gauged against other players.</p>
          <p>It will show a ordered list of avatars which <Label bsStyle="success">rank each game player</Label> and show how each faction is performing.</p> 
        </div>
        <div className="BoardArea">
          <Board />
        </div>
      </div>
    );
  }
}