import React, { Component } from "react";
import "./LightningRound.css";
import { Label } from "react-bootstrap";
import Play from "../images/play.png";
import Back from "../images/goback.png";

export default class LightningRound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      target: "",
    };
  }

handleClick(target){
  this.props.history.push("/game/" + sessionStorage.getItem('world') + "/" + target);  
}
  render() {
    return (
      <div className="LightningRound">
        <div className="lander">
          <h1>Lightning Round</h1>
          <p>The Lightning Rounds <Label bsStyle="success">present</Label> the user with questions
          they must answer during a set period of time.</p>
          <p>Rewards are more <Label bsStyle="success">valuable</Label> the better the user responds to the questions.</p>
       </div>

       <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('lightning/go')}>
          <div className="card-play">
            <img src={Play} alt="play-logo"/>
            <h2>Lightning Round</h2>
            <p>Start a Round</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('')}>
          <div className="card-goback">
            <img src={Back} alt="back-logo"/>
            <h2>Go Back</h2>
            <p>Go Back to the Game Panel</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}