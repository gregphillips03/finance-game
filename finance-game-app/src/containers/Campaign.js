import React, { Component } from "react";
import "./Campaign.css";
import { Label } from "react-bootstrap"; 
import Endor from "../images/planets/planet-endor.png"; 
import Voss from "../images/planets/planet-voss.png";
import Hoth from "../images/planets/planet-hoth.png";
import Tatooine from "../images/planets/planet-tatooine.png";

export default class Campaign extends Component {
    constructor(props) {
    super(props);

    this.state = {
      campaignLocation: "",
    };
  }

handleClick(campaignLocation){
  sessionStorage.setItem('campaignLocation', campaignLocation); 
  this.props.history.push("/game/campaign/" + sessionStorage.getItem('campaignLocation'));  
}
  render() {
    return (
      <div className="Campaign">
        <div className="lander">
          <h1>Campaign</h1>
          <p>The Campaign is intended to be the <Label bsStyle="success">core</Label> of the game where the user <Label bsStyle="success">answers 
          questions</Label> | <Label bsStyle="danger">battles enemies</Label> | <Label bsStyle="success">gains XP</Label> | 
          <Label bsStyle="success">levels up</Label>.</p>
          <p>As the user progresses through the campaign, the questions become <Label bsStyle="danger">harder</Label> and leveling up becomes more difficult.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('endor')}>
          <div className="card-planet">
            <img src={Endor} alt="planet"/>
            <h2>Endor</h2>
            <p>The Forest Moon</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('voss')}>
          <div className="card-planet">
            <img src={Voss} alt="planet"/>
            <h2>Voss</h2>
            <p>Alot Like Terra</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('hoth')}>
          <div className="card-planet">
            <img src={Hoth} alt="planet"/>
            <h2>Hoth</h2>
            <p>It's Cold Outside</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('tatooine')}>
          <div className="card-planet">
            <img src={Tatooine} alt="planet"/>
            <h2>Tatooine</h2>
            <p>Anakin's Stomping Ground</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}