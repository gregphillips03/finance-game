import React, { Component } from "react";
import "./Game.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Game">
        <div className="lander">
          <h1>Game</h1>
          <p>This is the Game component being rendered to the DOM.</p>
          <p>The Game is the core of the application where the user will answer questions and gain XP.</p>
          <p>The Game coponent will interact heavily with the backend database.</p>
        </div>
      </div>
    );
  }
}