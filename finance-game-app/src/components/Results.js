import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';
import { Button, ButtonToolbar, Label } from 'react-bootstrap'; 
import Vader from "../images/vader-helmet.png";

const Results = ({ userAnswers, score, restartQuiz }) => {

  const triesTotal = tally(userAnswers);
  const oneTries = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the <Label bsStyle="success">first</Label> try.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the <Label bsStyle="info">second</Label> try.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the <Label bsStyle="warning">third</Label> try.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the <Label bsStyle="danger">fourth</Label> try.</div>;
  return (
    <div className="results-container">
      <h2>Round Results</h2>
      <div className="success-factor">
      <img src={Vader} className="success-factor-image" alt="success factor" />
      </div>
      <div>You answered...</div>
      {oneTries}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      <ButtonToolbar>
      <Button bsStyle="primary" onClick={restartQuiz}>New Round</Button>
      <Button bsStyle="primary">Leave</Button>
      </ButtonToolbar>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;