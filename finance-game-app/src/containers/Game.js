import React, { Component } from "react";
import "./Game.css";
import { Label } from "react-bootstrap"; 
import Arena from "../images/arena.png";
import Timer from "../images/timer.png";
import Campaign from "../images/campaign.png";
import Gears from "../images/gears.png";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      gameState: "",
    };
  }

handleClick(gameState){
  sessionStorage.setItem('currentGameState', gameState); 
  this.props.history.push("/game/" + sessionStorage.getItem('currentGameState'));  
}

  render() {
    return (
      <div className="Game">
        <div className="lander">
          <h1>Game</h1>
          <p>This is the Game component being rendered to the DOM.
            The Game is the core of the application where the user will answer questions and <Label bsStyle="success">gain XP</Label>.</p>
          <p>The Game component will interact heavily with the backend database.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('arena')}>
          <div className="card-arena">
            <img src={Arena} alt="arena-logo"/>
            <h2>Arena</h2>
            <p>Where Champions Train</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('lightning')}>
          <div className="card-timer">
            <img src={Timer} alt="timer-logo"/>
            <h2>Lightning Round</h2>
            <p>Quickly Answer Questions</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('campaign')}>
          <div className="card-campaign">
            <img src={Campaign} alt="campaign-logo"/>
            <h2>Campaign</h2>
            <p>Play The Game And Level Up</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('crafting')}>
          <div className="card-crafting">
            <img src={Gears} alt="crafting-logo"/>
            <h2>Crafting</h2>
            <p>Create Items for In Game Use</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}