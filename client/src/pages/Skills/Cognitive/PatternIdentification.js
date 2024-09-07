import React, { useState } from 'react';
import './PatternIdentification.css';

const PatternIdentification = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setSubmitted(false);
    setScore(0);
  };

  const handleSubmit = (correctAnswer) => (e) => {
    e.preventDefault();
    const answer = e.target.answer.value.trim().toLowerCase();
    if (answer === correctAnswer.toLowerCase()) {
      setScore(1);
    } else {
      setScore(0);
    }
    setSubmitted(true);
  };

  const exercises = {
    'complex-number-sequence': (
      <div className="exercise-container">
        <h1>Exercise 1: Complex Number Sequence</h1>
        <p>Identify the next number in the sequence: " 1, 2, 3, 5, 8, __?"</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('13')}>
            <textarea name="answer" placeholder="Your answer here..." rows="2" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '13'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'alternating-pattern': (
      <div className="exercise-container">
        <h1>Exercise 2: Alternating Pattern</h1>
        <p>Identify the next item in the sequence: "◯, △, ◯, ▢, ◯, __?"</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('△')}>
            <textarea name="answer" placeholder="Your answer here..." rows="2" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '△'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'alphabetic-pattern': (
      <div className="exercise-container">
        <h1>Exercise 3: Alphabetic Pattern</h1>
        <p>Identify the next letter in the sequence: "A, C, F, J, O, __?"</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('U')}>
            <textarea name="answer" placeholder="Your answer here..." rows="2" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1 </h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is 'U'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="pattern-identification-container">
      <h1>Pattern Identification</h1>
      <p>Select an exercise:</p>
      <div className="exercise-card">
        <h2>Exercise 1: Complex Number Sequence</h2>
        <p>Identify the next number in the Fibonacci sequence.</p>
        <button onClick={() => handleStartExercise('complex-number-sequence')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 2: Alternating Pattern</h2>
        <p>Identify the next shape in an alternating sequence.</p>
        <button onClick={() => handleStartExercise('alternating-pattern')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 3: Alphabetic Pattern</h2>
        <p>Identify the next letter in an advancing sequence.</p>
        <button onClick={() => handleStartExercise('alphabetic-pattern')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default PatternIdentification;
