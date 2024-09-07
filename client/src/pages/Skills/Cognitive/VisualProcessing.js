import React, { useState } from 'react';
import './VisualProcessing.css';

const VisualProcessing = () => {
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
    'letter-search': (
      <div className="exercise-container">
        <h1>Exercise 1: Letter Search</h1>
        <p>Find and count the number of times the letter "A" appears in the following sequence:</p>
        <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>BCAADABCBAAACCA</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('6')}>
            <textarea name="answer" placeholder="Your answer here..." rows="2" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '6'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'color-recognition': (
      <div className="exercise-container">
        <h1>Exercise 2: Color Recognition</h1>
        <p>Look at the word below and type the color of the ink, not the word itself.</p>
        <p style={{ color: 'blue', fontSize: '2em' }}>Red</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('blue')}>
            <textarea name="answer" placeholder="Your answer here..." rows="2" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is 'blue'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'visual-pattern-completion': (
      <div className="exercise-container">
        <h1>Exercise 3: Visual Pattern Completion</h1>
        <p>Given the following sequence of shapes: "▲▼▲▼▲", what is the next shape in the sequence?</p>
        {!submitted ? (
          <form onSubmit={handleSubmit('▼')}>
            <textarea name="answer" placeholder="Your answer here..." rows="2" />
            <button type="submit" className="submit-button">Submit Answer</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/1</h2>
            <p>{score === 1 ? "Correct!" : "Incorrect, the correct answer is '▼'."}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="visual-processing-container">
      <h1>Visual Processing</h1>
      <p>Select an exercise:</p>
      <div className="exercise-card">
        <h2>Exercise 1: Letter Search</h2>
        <p>Count the number of times a specific letter appears in a sequence.</p>
        <button onClick={() => handleStartExercise('letter-search')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 2: Color Recognition</h2>
        <p>Type the color of the ink, not the word itself.</p>
        <button onClick={() => handleStartExercise('color-recognition')} className="start-button">Start Exercise</button>
      </div>
      <div className="exercise-card">
        <h2>Exercise 3: Visual Pattern Completion</h2>
        <p>Identify the next shape in a sequence.</p>
        <button onClick={() => handleStartExercise('visual-pattern-completion')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default VisualProcessing;
