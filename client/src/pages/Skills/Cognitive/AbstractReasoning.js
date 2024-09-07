import React, { useState } from 'react';
import './AbstractReasoning.css';

const AbstractReasoning = () => {
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
    'identify-pattern': (
      <div className="exercise-container">
        <h1>Exercise 1: Identify the Pattern</h1>
        <p>Look at the following sequence: ▲, ◯, ▲, ◯, ▲, ?. What shape should come next?</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('◯')}>
            <textarea name="answer" placeholder="Your answer here..." rows="4" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '◯'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'complete-series': (
      <div className="exercise-container">
        <h1>Exercise 2: Complete the Series</h1>
        <p>Find the next number in the series: 3, 9, 27, 81, ?</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('243')}>
            <textarea name="answer" placeholder="Your answer here..." rows="4" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '243'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'odd-one-out': (
      <div className="exercise-container">
        <h1>Exercise 3: Odd One Out</h1>
        <p>Which of the following is the odd one out? Square, Triangle, Circle, Rectangle</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('triangle')}>
            <textarea name="answer" placeholder="Your answer here..." rows="4" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is 'Triangle'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="abstract-reasoning-container">
      <h1>Abstract Reasoning</h1>
      <p>Select an exercise:</p>
      <div className="exercise-card">
        <h2>Exercise 1: Identify the Pattern</h2>
        <p>Test your ability to recognize patterns.</p>
        <button onClick={() => handleStartExercise('identify-pattern')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 2: Complete the Series</h2>
        <p>Solve the series and predict the next number.</p>
        <button onClick={() => handleStartExercise('complete-series')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 3: Odd One Out</h2>
        <p>Identify which item does not belong in the group.</p>
        <button onClick={() => handleStartExercise('odd-one-out')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default AbstractReasoning;
