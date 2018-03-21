import React, { Component } from "react";
import "./Dashboard.css";
import { Label } from "react-bootstrap"; 
import Gears from "../images/gears.png";
import Play from "../images/play.png";
import Leader from "../images/leaderboard-logo.png";

export default class Dashboard extends Component {
    constructor(props) {
    super(props);

    this.state = {
      mode: "",
    };
  }

handleClick(mode){
  sessionStorage.setItem('mode', mode); 
  this.props.history.push("/dashboard/" + sessionStorage.getItem('mode'));  
}

handleClickExternal(mode){
  sessionStorage.setItem('mode', mode); 
  this.props.history.push(sessionStorage.getItem('mode')); 
}
  render() {
    return (
      <div className="Dashboard">
        <div className="lander">
          <h1>Dashboard</h1>
          <p>This is the Dashboard component being rendered to the DOM.</p>
          <p>The Dashboard will <Label bsStyle="success">show</Label> the user their <Label bsStyle="success">progress</Label> throughout the game.</p>
          <p>This is where the user will be redirected to after they select a faction.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('crafting')}>
          <div className="card-crafting">
            <img src={Gears} alt="crafting-logo"/>
            <h2>Crafting</h2>
            <p>Create Items for In Game Use</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClickExternal('game')}>
          <div className="card-game">
            <img src={Play} alt="play-logo"/>
            <h2>Play Game</h2>
            <p>Go To The Game Panel</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClickExternal('leaderboard')}>
          <div className="card-leaderboard">
            <img src={Leader} alt="leaderboard-logo"/>
            <h2>Leaderboard</h2>
            <p>Go To The Leaderboard</p>
          </div>
          </div>

        </div>


      </div>
    );
  }
}