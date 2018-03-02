import React, { Component } from "react";
import "./Endor.css";
import { Label } from "react-bootstrap"; 
import Arena from "../images/arena.png";
import Timer from "../images/timer.png";
import Campaign from "../images/campaign.png";
import Back from "../images/goback.png";

export default class Endor extends Component {
    constructor(props) {
    super(props);

    this.state = {
      gameState: "",
    };
  }

handleClick(gameState){
  sessionStorage.setItem('gameState', gameState); 
  this.props.history.push("/game/" + sessionStorage.getItem('gameState'));  
}
  render() {
    return (
      <div className="Endor">
       
        <div className="lander">
          <h1>Endor</h1>
          <p>Welcome to the <Label bsStyle="success">forest</Label> moon of Endor.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('endor/arena')}>
          <div className="card-arena">
            <img src={Arena} alt="arena-logo"/>
            <h2>Arena</h2>
            <p>Where Champions Train</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('endor/lightning')}>
          <div className="card-timer">
            <img src={Timer} alt="timer-logo"/>
            <h2>Lightning Round</h2>
            <p>Quickly Answer Questions</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('endor/campaign')}>
          <div className="card-campaign">
            <img src={Campaign} alt="campaign-logo"/>
            <h2>Campaign</h2>
            <p>Play The Game And Level Up</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('')}>
          <div className="card-goback">
            <img src={Back} alt="back-logo"/>
            <h2>Back</h2>
            <p>Go Back to the Game Panel</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}