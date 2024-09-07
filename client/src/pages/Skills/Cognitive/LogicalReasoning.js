import React, { useState } from 'react';
import './LogicalReasoning.css';

const LogicalReasoning = () => {
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
    'conditional-reasoning': (
      <div className="exercise-container">
        <h1>Exercise 1: Conditional Reasoning</h1>
        <p>If the red box is heavier than the blue box, and the blue box is heavier than the green box, which box is the heaviest?</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('red box')}>
            <textarea name="answer" placeholder="Your answer here..." rows="4" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is 'Red box'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'pattern-recognition': (
      <div className="exercise-container">
        <h1>Exercise 2: Pattern Recognition</h1>
        <p>Identify the missing number in the sequence: 2, 6, 12, 20, ___?</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('30')}>
            <textarea name="answer" placeholder="Your answer here..." rows="4" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '30'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'categorical-reasoning': (
      <div className="exercise-container">
        <h1>Exercise 3: Categorical Reasoning</h1>
        <p>All apples are fruits. Some fruits are oranges. Therefore, are all apples oranges?</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('no')}>
            <textarea name="answer" placeholder="Your answer here..." rows="4" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is 'No'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="logical-reasoning-container">
      <h1>Logical Reasoning</h1>
      <p>Select an exercise:</p>
      <div className="exercise-card">
        <h2>Exercise 1: Conditional Reasoning</h2>
        <p>Test your ability to understand relationships and conditions.</p>
        <button onClick={() => handleStartExercise('conditional-reasoning')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 2: Pattern Recognition</h2>
        <p>Identify the pattern and predict the next in the series.</p>
        <button onClick={() => handleStartExercise('pattern-recognition')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 3: Categorical Reasoning</h2>
        <p>Understand categories and subsets to reach a conclusion.</p>
        <button onClick={() => handleStartExercise('categorical-reasoning')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default LogicalReasoning;


