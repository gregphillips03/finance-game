import React, { Component } from "react";
import "./Faction.css";
import { Label } from "react-bootstrap"; 
import Resist from "../images/resistance-logo.png";
import Empire from "../images/empire-logo.png";
import {Button} from "react-bootstrap"; 

export default class Faction extends Component {
  render() {
    return (
      <div className="Faction">
        <div className="lander">
          <h1>Choose A Faction</h1>
          <p>Choose a faction to <Label bsStyle="danger">fight</Label> for.
          You can change your faction each time you log in.</p>
          <p>Be sure to check the <Label>Leadboard</Label> to see which faction is winning.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click">
          <div className="card-resistance">
            <img src={Resist} alt="resistance-logo"/>
            <h2>Rebel Alliance</h2>
          <Button bsSize="large" block><p>Join the Resistance</p></Button>
          </div>
          </div>

          <div className="column" id="column-click">
          <div className="card-empire">
            <img src={Empire} alt="empire-logo"/>
            <h2>Galactic Empire</h2>
            <Button bsSize="large" block><p>Join the Dark Side</p></Button>
          </div>
          </div>

        </div>

      </div>
    );
  }
}