import React, { Component } from "react";
import "./Dashboard.css";
import { Label } from "react-bootstrap"; 
import CircularProgressbar from 'react-circular-progressbar'; 
import { Progress } from 'react-sweet-progress'; 
import Gears from "../images/gears.png";
import Play from "../images/play.png";
import Leader from "../images/leaderboard-logo.png";
import Rucksack from "../images/rucksack-logo.png"
import Shop from "../images/storefront.png";
import Trophy from "../images/goals-icon.png"; 
import 'react-circular-progressbar/dist/styles.css'; 
import 'react-sweet-progress/lib/style.css'; 
import { fetchTotalProgress, fetchMoreProgress, fetchRedProgress, fetchGreenProgress } from "../libs/backendLib.js";

export default class Dashboard extends Component {
    constructor(props) {
    super(props);

    this.state = {
      mode: "",
      totalProgress: 0,
      moreProgress: 0,
      redProgress: 0, 
      greenProgress: 0, 
    };
  }

componentDidMount(){
  fetchTotalProgress(localStorage.getItem('currentUserEmail'))
    .then(totalProgress => this.setState({ totalProgress }))
  fetchMoreProgress(localStorage.getItem('currentUserEmail'))
    .then(moreProgress => this.setState({ moreProgress}))
  fetchRedProgress(localStorage.getItem('currentUserEmail'))
    .then(redProgress => this.setState({ redProgress }))
  fetchGreenProgress(localStorage.getItem('currentUserEmail'))
    .then(greenProgress => this.setState({ greenProgress }))
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

          <div className="column" id="column-click">
          <div className="card-progressbar">
            <CircularProgressbar percentage={ this.state.totalProgress } 
                                 initialAnimation={ true }
                                 className="progbarcomponent" />
            <h2>Total Progress</h2>
            <p>My Total Progress</p>
          </div>
          </div>

          <div className="column" id="column-click">
          <div className="card-progressbar">
            <CircularProgressbar percentage={this.state.moreProgress} 
                                 initialAnimation={ true }
                                 className="progbarcomponent" />
            <h2>More Progress</h2>
            <p>More of My Progress</p>
          </div>
          </div>

          <div className="column" id="column-click">
          <div className="card-progressbar">
            <Progress percent={this.state.redProgress}
                      type="circle"
                      status="error" 
                      width={200}
                      className="progbarcomponent" />
            <h2>More Progress</h2>
            <p>Bad Progress</p>
          </div>
          </div>

          <div className="column" id="column-click">
          <div className="card-progressbar">
            <Progress percent={this.state.greenProgress}
                      type="circle"
                      status="success" 
                      width={200}
                      className="progbarcomponent" />
            <h2>More Progress</h2>
            <p>Good Progress</p>
          </div>
          </div>

        </div>

        <div className="row">

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

          <div className="column" id="column-click" onClick={()=>this.handleClick('crafting')}>
          <div className="card-crafting">
            <img src={Gears} alt="crafting-logo"/>
            <h2>Crafting</h2>
            <p>Create Items for In Game Use</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('inventory')}>
          <div className="card-crafting">
            <img src={Rucksack} alt="inventory-logo"/>
            <h2>Inventory</h2>
            <p>Manage Your Inventory</p>
          </div>
          </div>

        </div>

        <div className="row">

          <div className="column" id="column-click" onClick={()=>this.handleClick('shop')}>
          <div className="card-shop">
            <img src={Shop} alt="shop-logo"/>
            <h2>Shop</h2>
            <p>Purchase Items</p>
          </div>
          </div>

          <div className="column" id="column-click" onClick={()=>this.handleClick('achievements')}>
          <div className="card-achievements">
            <img src={Trophy} alt="achievements-logo"/>
            <h2>Achievements</h2>
            <p>View Your Achievements</p>
          </div>
          </div>

        </div>


      </div>
    );
  }
}