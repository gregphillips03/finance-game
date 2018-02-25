import React, { Component } from "react";
import "./Crafting.css";
import { Label } from "react-bootstrap"; 

export default class Crafting extends Component {
  render() {
    return (
      <div className="Campaign">
        <div className="lander">
          <h1>Crafting</h1>
          <p>The Crafting area allows the user to <Label bsStyle="success">combine</Label> items they collect 
          during battle to <Label bsStyle="success">create</Label> additional items for in game use.</p>
          <p>These items will help the user by providing <Label bsStyle="success">hints</Label> to questions, or restoring XP.</p>
        </div>
      </div>
    );
  }
}