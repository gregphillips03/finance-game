import React, { Component } from "react";
import "./Faction.css";
import { Label, ProgressBar } from "react-bootstrap"; 
import Resist from "../images/resistance-logo.png";
import Empire from "../images/empire-logo.png";
import Jedi from "../images/jedi-logo.png";
import Rogue from "../images/rogue-logo.png";
import { fetchFactionPercentage } from "../libs/backendLib.js";


export default class Faction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      faction: "",
      rebelAmount: 0, 
      jediAmount: 0 ,
      empireAmount: 0,
      rogueAmount: 0, 
    };
  }

componentDidMount(){
  fetchFactionPercentage("Rebel Alliance")
    .then(rebelAmount => this.setState({ rebelAmount }));
  fetchFactionPercentage("Galactic Empire")
    .then(empireAmount => this.setState({ empireAmount }));
  fetchFactionPercentage("Jedi Order")
    .then(jediAmount => this.setState({ jediAmount})); 
  fetchFactionPercentage("Rogue")
    .then(rogueAmount => this.setState({ rogueAmount}));
}

handleClick(faction){
  localStorage.setItem('currentUserFaction', faction); 
  //need a hook here to count number of times user has played as a faction
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
            <ProgressBar active now={this.state.rebelAmount} label={`${this.state.rebelAmount}%`} />
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('Empire')}>
          <div className="card-empire">
            <img src={Empire} alt="empire-logo"/>
            <h2>Galactic Empire</h2>
            <p>Join the Dark Side</p>
          <ProgressBar active now={this.state.empireAmount} label={`${this.state.empireAmount}%`} />
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('Jedi')}>
          <div className="card-jedi">
            <img src={Jedi} alt="jedi-logo"/>
            <h2>Jedi Order</h2>
            <p>Join the Jedi Order</p>
          <ProgressBar active now={this.state.jediAmount} label={`${this.state.jediAmount}%`} />
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('Rogue')}>
          <div className="card-rogue">
            <img src={Rogue} alt="rogue-logo"/>
            <h2>Rogue</h2>
            <p>Go Rogue</p>
            <ProgressBar active now={this.state.rogueAmount} label={`${this.state.rogueAmount}%`} />
          </div>
          </div>

        </div>

      </div>
    );
  }
}