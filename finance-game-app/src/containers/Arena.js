import React, { Component } from "react";
import "./Arena.css";
import { Label } from "react-bootstrap";

export default class Arena extends Component {
  render() {
    return (
      <div className="Arena">
        <div className="lander">
          <h1>Arena</h1>
          <p>This is the Arena component being rendered to the DOM.</p>
          <p>The Arena will allow users to <Label bsStyle="success">battle</Label> various enemies to <Label bsStyle="success"> 
          gain XP </Label>. This is where the 'grinding' concept will be implemented.</p>
        </div>

      </div>
    );
  }
}