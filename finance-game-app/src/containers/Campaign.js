import React, { Component } from "react";
import "./Campaign.css";
import { Label } from "react-bootstrap"; 
import Endor from "../images/planets/planet-endor.png"; 
import Voss from "../images/planets/planet-voss.png";
import Hoth from "../images/planets/planet-hoth.png";
import Tatooine from "../images/planets/planet-tatooine.png";
import Kamino from "../images/planets/planet-kamino.png";
import NalHutta from "../images/planets/planet-nal-hutta.png";
import Korriban from "../images/planets/planet-korriban.png";
import Belsavis from "../images/planets/planet-belsavis.png";
import Coruscant from "../images/planets/planet-coruscant.png";
import Quesh from "../images/planets/planet-quesh.png";
import Sabarene from "../images/planets/planet-sabarene.png";
import Foron from "../images/planets/planet-foron.png";

import NarShaddaa from "../images/planets/planet-nar-shaddaa.png";
import Phorskuhii from "../images/planets/planet-phorskuh-ii.png";
import DeathStar from "../images/planets/planet-death-star.png";
import DeathStarii from "../images/planets/planet-death-star-ii.png";

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

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('kamino')}>
          <div className="card-planet">
            <img src={Kamino} alt="planet"/>
            <h2>Kamino</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('voss')}>
          <div className="card-planet">
            <img src={NalHutta} alt="planet"/>
            <h2>Nal Hutta</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('korriban')}>
          <div className="card-planet">
            <img src={Korriban} alt="planet"/>
            <h2>Korriban</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('belsavis')}>
          <div className="card-planet">
            <img src={Belsavis} alt="planet"/>
            <h2>Belsavis</h2>
            <p>Need Description</p>
          </div>
          </div>

        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('coruscant')}>
          <div className="card-planet">
            <img src={Coruscant} alt="planet"/>
            <h2>Coruscant</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('quesh')}>
          <div className="card-planet">
            <img src={Quesh} alt="planet"/>
            <h2>Quesh</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('sabarene')}>
          <div className="card-planet">
            <img src={Sabarene} alt="planet"/>
            <h2>Sabarene</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('foron')}>
          <div className="card-planet">
            <img src={Foron} alt="planet"/>
            <h2>Foron</h2>
            <p>Need Description</p>
          </div>
          </div>

        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('narshaddaa')}>
          <div className="card-planet">
            <img src={NarShaddaa} alt="planet"/>
            <h2>Nar Shaddaa</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('phorskuhii')}>
          <div className="card-planet">
            <img src={Phorskuhii} alt="planet"/>
            <h2>Phorskuh II</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('deathstar')}>
          <div className="card-planet">
            <img src={DeathStar} alt="planet"/>
            <h2>Death Star</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('deathstarii')}>
          <div className="card-planet">
            <img src={DeathStarii} alt="planet"/>
            <h2>Death Star II</h2>
            <p>Need Description</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}