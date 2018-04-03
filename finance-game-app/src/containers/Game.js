import React, { Component } from "react";
import "./Game.css";
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

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      world: "",
    };
  }

handleClick(world){
  sessionStorage.setItem('world', world); 
  this.props.history.push("/game/" + sessionStorage.getItem('world'));  
}

  render() {
    return (
      <div className="Game">
        <div className="lander">
          <h1>Game</h1>
          <p>This is the Game component being rendered to the DOM.
            The Game is the core of the application where the user will answer questions 
            and <Label bsStyle="success">gain XP</Label>.</p>
          <p>The Game component will interact heavily with the backend database.</p>
        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('endor')}>
          <div className="card-planet">
            <img src={Endor} alt="planet"/>
            <h2>1. Endor</h2>
            <p>The Forest Moon</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('voss')}>
          <div className="card-planet">
            <img src={Voss} alt="planet"/>
            <h2>2. Voss</h2>
            <p>Alot Like Terra</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('hoth')}>
          <div className="card-planet">
            <img src={Hoth} alt="planet"/>
            <h2>3. Hoth</h2>
            <p>It's Cold Outside</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('tatooine')}>
          <div className="card-planet">
            <img src={Tatooine} alt="planet"/>
            <h2>4. Tatooine</h2>
            <p>Anakin's Stomping Ground</p>
          </div>
          </div>

        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('kamino')}>
          <div className="card-planet">
            <img src={Kamino} alt="planet"/>
            <h2>5. Kamino</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('voss')}>
          <div className="card-planet">
            <img src={NalHutta} alt="planet"/>
            <h2>6. Nal Hutta</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('korriban')}>
          <div className="card-planet">
            <img src={Korriban} alt="planet"/>
            <h2>7. Korriban</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('belsavis')}>
          <div className="card-planet">
            <img src={Belsavis} alt="planet"/>
            <h2>8. Belsavis</h2>
            <p>Need Description</p>
          </div>
          </div>

        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('coruscant')}>
          <div className="card-planet">
            <img src={Coruscant} alt="planet"/>
            <h2>9. Coruscant</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('quesh')}>
          <div className="card-planet">
            <img src={Quesh} alt="planet"/>
            <h2>10. Quesh</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('sabarene')}>
          <div className="card-planet">
            <img src={Sabarene} alt="planet"/>
            <h2>11. Sabarene</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('foron')}>
          <div className="card-planet">
            <img src={Foron} alt="planet"/>
            <h2>12. Foron</h2>
            <p>Need Description</p>
          </div>
          </div>

        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('narshaddaa')}>
          <div className="card-planet">
            <img src={NarShaddaa} alt="planet"/>
            <h2>13. Nar Shaddaa</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('phorskuhii')}>
          <div className="card-planet">
            <img src={Phorskuhii} alt="planet"/>
            <h2>14. Phorskuh II</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('deathstar')}>
          <div className="card-planet">
            <img src={DeathStar} alt="planet"/>
            <h2>15. Death Star</h2>
            <p>Need Description</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('deathstarii')}>
          <div className="card-planet">
            <img src={DeathStarii} alt="planet"/>
            <h2>16. Death Star II</h2>
            <p>Need Description</p>
          </div>
          </div>

        </div>

      </div>
    );
  }
}

