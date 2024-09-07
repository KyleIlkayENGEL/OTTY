import React, { useState } from 'react';
import './ProblemSolving.css';

const ProblemSolving = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = {
    q1: "c",
    q2: "72",
    q3: "bridge"
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
    'pattern-recognition': (
      <div className="problem-solving-container">
        <h1>Exercise 1: Pattern Recognition</h1>
        <p>Identify the pattern in the sequence and select the correct answer.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. What number should come next in the sequence: 2, 4, 8, 16, 32, 64, ...?</p>
            <label>
              <input type="radio" name="q1" value="a" /> a) 96
            </label>
            <label>
              <input type="radio" name="q1" value="b" /> b) 128
            </label>
            <label>
              <input type="radio" name="q1" value="c" /> c) 72
            </label>
          </div>

          {!showResult ? (
            <button type="submit" className="submit-button">Submit Answers</button>
          ) : (
            <div className="result">
              <h2>Your Score: {score}/1</h2>
              <p>{score === 1 ? 'Correct! The pattern doubles each time, so the next number is 128.' : 'Incorrect, try to identify the pattern again.'}</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
    'word-problems': (
      <div className="problem-solving-container">
        <h1>Exercise 2: Word Problems</h1>
        <p>Solve the following word problem to test your problem-solving skills.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. A car travels 60 miles in 1.5 hours. What is the average speed of the car in miles per hour?</p>
            <input type="text" name="q2" placeholder="Enter your answer..." />
          </div>

          {!showResult ? (
            <button type="submit" className="submit-button">Submit Answers</button>
          ) : (
            <div className="result">
              <h2>Your Score: {score}/1</h2>
              <p>{score === 1 ? 'Correct! The average speed is 40 miles per hour.' : 'Incorrect, review the calculations.'}</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
    'logical-puzzles': (
      <div className="problem-solving-container">
        <h1>Exercise 3: Logical Puzzles</h1>
        <p>Solve the following puzzle to test your logical thinking.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. What has keys but can't open locks, has space but no room, and you can enter but not go inside?</p>
            <input type="text" name="q3" placeholder="Enter your answer..." />
          </div>

          {!showResult ? (
            <button type="submit" className="submit-button">Submit Answers</button>
          ) : (
            <div className="result">
              <h2>Your Score: {score}/1</h2>
              <p>{score === 1 ? 'Correct! The answer is a keyboard.' : 'Incorrect, try thinking about the clues again.'}</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="problem-solving-container">
      <h1>Problem Solving</h1>
      <p>Improve your problem-solving skills with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Pattern Recognition</h2>
        <p>Identify patterns in sequences to solve problems.</p>
        <button onClick={() => handleStartExercise('pattern-recognition')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Word Problems</h2>
        <p>Solve word problems to practice mathematical reasoning.</p>
        <button onClick={() => handleStartExercise('word-problems')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Logical Puzzles</h2>
        <p>Solve logical puzzles to challenge your thinking.</p>
        <button onClick={() => handleStartExercise('logical-puzzles')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default ProblemSolving;
