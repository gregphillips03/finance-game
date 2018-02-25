import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import CountdownClock from 'react-countdown-clock'

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, noTimeLeft }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div className="question-number">{step}</div>
          <div className="description">of <span>{totalQuestions}</span></div>
        </div>
        <div className="clock-timer">
          <CountdownClock size={200} onComplete={noTimeLeft} seconds={15} />
        </div>
        <div className="score-container">
          <h2>Your Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>
      <div className="correct-modal">
        <div className="praise">Correct!</div>
        <div className="bonus"></div>
      </div>
      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Quiz;