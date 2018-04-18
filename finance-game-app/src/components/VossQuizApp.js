import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import shuffleAnswers from '../helpers/shuffleAnswers';
import { questions } from '../data/voss-quiz-data';

class VossQuizApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions:  [],
      userAnswers: [],
      maxQuestions: 0,
      step: 1,
      score: 0,
      timeleft: true,
      isPaused: false, 
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.noTimeLeft = this.noTimeLeft.bind(this); 
  }

  componentWillMount() {
    const { totalQuestions } = this.props;
    const maxQuestions = Math.min(totalQuestions, questions.length);
    const QUESTIONS = shuffleQuestions(questions, maxQuestions);


    this.setState({
      questions: QUESTIONS,
      maxQuestions: maxQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0
        }
      })
    });
  }

  noTimeLeft(){
    this.setState({timeleft: false});
  }

  handleAnswerClick(e) {
    const { questions, step, userAnswers } = this.state;
    const isCorrect = questions[0].correct === e.target.textContent;
    console.log(e.target);
    const answersFromUser = userAnswers.slice();
    //console.log(answersFromUser);
    //console.log(userAnswers);
    const currentStep = step - 1;
    const tries = answersFromUser[currentStep].tries;

    if (isCorrect && e.target.nodeName === 'LI' && this.state.timeleft) {
      e.target.parentNode.style.pointerEvents = 'none';

      e.target.classList.add('right');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser,
        isPaused: true,
      });

      setTimeout(() => {
        const praise = document.querySelector('.praise');
        const bonus = document.querySelector('.bonus');

        if (tries === 0 && this.state.timeleft) {
          praise.textContent = '1st Try!';
          bonus.textContent = '+10';
        }
        if (tries === 1 && this.state.timeleft) {
          praise.textContent = '2nd Try!';
          bonus.textContent = '+5';
        }
        if (tries === 2 && this.state.timeleft) {
          praise.textContent = 'Correct!';
          bonus.textContent = '+2';
        }
        if (tries === 3 && this.state.timeleft) {
          praise.textContent = 'Correct!';
          bonus.textContent = '+1';
        }

        if(this.state.timeleft){
          document.querySelector('.correct-modal').classList.add('modal-enter');
          document.querySelector('.bonus').classList.add('show'); 
        }


      }, 500);

      setTimeout(this.nextStep, 1750);

    }
    else if (e.target.nodeName === 'LI') {
      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

    }
  }

  nextStep() {
    if(this.state.timeleft){
      document.querySelector('.correct-modal').classList.remove('modal-enter');
      document.querySelector('.bonus').classList.remove('show');
    }
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: (() => {
        if (tries === 1) return score + 10;
        if (tries === 2) return score + 5;
        if (tries === 3) return score + 2;
        return score + 1;
      })(),
      questions: restOfQuestions, 
      isPaused: false,
    });
  }

  restartQuiz() {
    window.location.reload();
  }
  render() {
    const { step, questions, userAnswers, maxQuestions, score, timeleft, isPaused } = this.state;

    if (step >= maxQuestions + 1 || !timeleft) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
        />
      );
    } else return (
      <Quiz
        step={step}
        questions={questions}
        totalQuestions={maxQuestions}
        score={score}
        handleAnswerClick={this.handleAnswerClick}
        noTimeLeft={this.noTimeLeft}
        isPaused={isPaused}
      />
    );
  }
}

VossQuizApp.defaultProps = {
  totalQuestions: questions.length
};

VossQuizApp.propTypes = {
  totalQuestions: PropTypes.number.isRequired
};

export default VossQuizApp;