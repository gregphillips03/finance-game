import React, { Component } from "react";
import "./Inventory.css";
import { Label } from "react-bootstrap"; 

export default class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        <div className="lander">
          <h1>Inventory</h1>
          <p>The Inventory area shows a <Label bsStyle="success">graphical</Label> graphical representation of
          the players <Label bsStyle="success">items</Label> and allows them to manage their inventory</p>
        </div>
      </div>
    );
  }
}