import React, { Component } from "react";
import "./Faction.css";
import { Label } from "react-bootstrap"; 
import Resist from "../images/resistance-logo.png";
import Empire from "../images/empire-logo.png";

export default class Faction extends Component {
  render() {
    return (
      <div className="Faction">
        <div className="lander">
          <h1>Faction</h1>
          <p>This is the Faction component being rendered to the DOM.</p>
          <p>The Faction page will allow the user to pick which side they want to <Label bsStyle="success">fight</Label> with during their current session.</p>
          <p>This is where the user will land after they login.</p>
        </div>

        <div className="row">

          <div className="column">
          <div className="card-resistance">
            <img src={Resist} alt="resistance-logo"/>
            <h2>Resistance</h2>
            <p>Join the Resistance</p>
          </div>
          </div>

          <div className="column">
          <div className="card-empire">
            <img src={Empire} alt="empire-logo"/>
            <h2>Empire</h2>
            <p>Join the Dark Side</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}