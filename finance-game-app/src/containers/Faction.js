import React, { Component } from "react";
import "./Faction.css";
import { Label } from "react-bootstrap"; 
import Resist from "../images/resistance-logo.png";
import Empire from "../images/empire-logo.png";
import Jedi from "../images/jedi-logo.png";
import Rogue from "../images/rogue-logo.png";


export default class Faction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      faction: "",
    };
  }

handleClick(faction){
  sessionStorage.setItem('currentUserFaction', faction); 
  this.props.history.push("/dashboard");  
}

  render() {
    return (
      <div className="Faction">
        <div className="lander">
          <h1>Choose A Faction</h1>
          <p>Choose a faction to <Label bsStyle="danger">fight</Label> for.
          You can change your faction each time you log in, or just by visiting this page.</p>
          <p>Be sure to check the <Label>Leadboard</Label> to see which faction is winning.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('Rebel')}>
          <div className="card-resistance">
            <img src={Resist} alt="resistance-logo"/>
            <h2>Rebel Alliance</h2>
            <p>Join the Resistance</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('Empire')}>
          <div className="card-empire">
            <img src={Empire} alt="empire-logo"/>
            <h2>Galactic Empire</h2>
            <p>Join the Dark Side</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('Jedi')}>
          <div className="card-jedi">
            <img src={Jedi} alt="jedi-logo"/>
            <h2>Jedi Order</h2>
            <p>Join the Jedi Order</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('Rogue')}>
          <div className="card-rogue">
            <img src={Rogue} alt="rogue-logo"/>
            <h2>Rogue</h2>
            <p>Go Rogue</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}