import React, { Component } from "react";
import "./LightningRound.css";
import "./LightningQuiz.css";
import { Label } from "react-bootstrap";
import QuizApp from '../components/QuizApp'; 

export default class LightningRound extends Component {

  render() {
    return (
      <div className="LightningRound">
        <div className="lander">
          <h1>Lightning Round</h1>
          <p>The Lightning Rounds <Label bsStyle="success">present</Label> the user with questions
          they must answer during a set period of time.</p>
          <p>Rewards are more <Label bsStyle="success">valuable</Label> the better the user responds to them.</p>
       </div>
      <div id="app">
        <QuizApp totalQuestions={10} />
      </div>

      </div>
    );
  }
}