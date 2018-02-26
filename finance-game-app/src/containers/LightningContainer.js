import React, { Component } from "react";
import "./LightningContainer.css";
import "./LightningQuiz.css";
import QuizApp from '../components/QuizApp'; 

export default class LightningContainer extends Component {
  render() {
    return (
      <div className="LightningContainer">
        <div id="app">
          <QuizApp totalQuestions={10} />
        </div>
      </div>
    );
  }
}