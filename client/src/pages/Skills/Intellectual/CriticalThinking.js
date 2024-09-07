import React, { useState } from 'react';
import './CriticalThinking.css';

const CriticalThinking = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "true"
  };

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setShowResult(false);
    setScore(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;

    if (e.target.elements.q1 && e.target.elements.q1.value === correctAnswers.q1) newScore += 1;
    if (e.target.elements.q2 && e.target.elements.q2.value === correctAnswers.q2) newScore += 1;
    if (e.target.elements.q3 && e.target.elements.q3.value.toLowerCase() === correctAnswers.q3) newScore += 1;

    setScore(newScore);
    setShowResult(true);
  };

  const exercises = {
    'logical-reasoning': (
      <div className="critical-thinking-container">
        <h1>Exercise 1: Logical Reasoning</h1>
        <p>Solve the following problem to test your logical reasoning skills.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. If all humans are mortal, and Socrates is a human, what can we conclude about Socrates?</p>
            <label>
              <input type="radio" name="q1" value="a" /> a) Socrates is immortal
            </label>
            <label>
              <input type="radio" name="q1" value="b" /> b) Socrates is mortal
            </label>
            <label>
              <input type="radio" name="q1" value="c" /> c) Socrates is a philosopher
            </label>
          </div>

          {!showResult ? (
            <button type="submit" className="submit-button">Submit Answers</button>
          ) : (
            <div className="result">
              <h2>Your Score: {score}/1</h2>
              <p>{score === 1 ? 'Correct! Socrates is mortal.' : 'Incorrect, try to review the logic.'}</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
    'evaluating-evidence': (
      <div className="critical-thinking-container">
        <h1>Exercise 2: Evaluating Evidence</h1>
        <p>Evaluate the strength of the following pieces of evidence regarding Socrates.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. Which of the following provides the strongest evidence that Socrates is a philosopher?</p>
            <label>
              <input type="radio" name="q2" value="a" /> a) Socrates often asked questions that challenged people's beliefs.
            </label>
            <label>
              <input type="radio" name="q2" value="b" /> b) Socrates was a well-known figure in ancient Athens.
            </label>
            <label>
              <input type="radio" name="q2" value="c" /> c) Socrates is credited with developing the Socratic method, a form of philosophical inquiry.
            </label>
          </div>

          {!showResult ? (
            <button type="submit" className="submit-button">Submit Answers</button>
          ) : (
            <div className="result">
              <h2>Your Score: {score}/1</h2>
              <p>{score === 1 ? 'Correct! The strongest evidence is that Socrates developed the Socratic method.' : 'Incorrect, review the evidence.'}</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
    'identifying-assumptions': (
      <div className="critical-thinking-container">
        <h1>Exercise 3: Identifying Assumptions</h1>
        <p>Identify the assumption in the following statement.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. The argument that "Socrates is mortal" is based on the assumption that all humans are mortal. (True/False)</p>
            <label>
              <input type="radio" name="q3" value="true" /> True
            </label>
            <label>
              <input type="radio" name="q3" value="false" /> False
            </label>
          </div>

          {!showResult ? (
            <button type="submit" className="submit-button">Submit Answers</button>
          ) : (
            <div className="result">
              <h2>Your Score: {score}/1</h2>
              <p>{score === 1 ? 'Correct! The assumption is that all humans are mortal.' : 'Incorrect, review the statement.'}</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="critical-thinking-container">
      <h1>Critical Thinking</h1>
      <p>Develop your critical thinking skills with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Logical Reasoning</h2>
        <p>Solve logical problems to enhance your reasoning skills.</p>
        <button onClick={() => handleStartExercise('logical-reasoning')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Evaluating Evidence</h2>
        <p>Evaluate the strength of evidence provided for different claims.</p>
        <button onClick={() => handleStartExercise('evaluating-evidence')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Identifying Assumptions</h2>
        <p>Identify the assumptions behind certain arguments.</p>
        <button onClick={() => handleStartExercise('identifying-assumptions')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default CriticalThinking;
