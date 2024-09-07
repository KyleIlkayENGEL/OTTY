import React, { useState } from 'react';
import './Negotiation.css';

const Negotiation = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [score, setScore] = useState(null);

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setScore(null);
  };

  const handleSubmitExercise1 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q1.value.trim().toLowerCase();
    setScore(answer === 'interests');
  };

  const handleSubmitExercise2 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q2.value.trim().toLowerCase();
    setScore(answer === 'win-win');
  };

  const handleSubmitExercise3 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q3.value.trim().toLowerCase();
    setScore(answer === 'trade-offs');
  };

  if (activeExercise === 'understanding-interests') {
    return (
      <div className="exercise-container">
        <h1>Exercise 1: Understanding Interests</h1>
        <p>In a negotiation, it’s important to understand the underlying ______ of the parties involved. What’s the missing word?</p>
        <form onSubmit={handleSubmitExercise1}>
          <textarea name="q1" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Understanding interests is key to successful negotiation.' : 'Incorrect, the correct answer is "interests".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  if (activeExercise === 'developing-options') {
    return (
      <div className="exercise-container">
        <h1>Exercise 2: Developing Options</h1>
        <p>What type of solution is typically the goal in negotiation, where both parties feel they have gained something?</p>
        <form onSubmit={handleSubmitExercise2}>
          <textarea name="q2" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! A win-win solution is ideal in negotiations.' : 'Incorrect, the correct answer is "win-win".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  if (activeExercise === 'making-trade-offs') {
    return (
      <div className="exercise-container">
        <h1>Exercise 3: Making Trade-Offs</h1>
        <p>In negotiation, parties often make _______ to reach a mutually beneficial agreement. What’s the missing word?</p>
        <form onSubmit={handleSubmitExercise3}>
          <textarea name="q3" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Making trade-offs is a common part of negotiation.' : 'Incorrect, the correct answer is "trade-offs".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="negotiation-container">
      <h1>Negotiation Skills</h1>
      <p>Enhance your negotiation skills with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Understanding Interests</h2>
        <p>Learn the importance of identifying the underlying interests in a negotiation.</p>
        <button onClick={() => handleStartExercise('understanding-interests')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Developing Options</h2>
        <p>Practice developing win-win solutions.</p>
        <button onClick={() => handleStartExercise('developing-options')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Making Trade-Offs</h2>
        <p>Understand how to make and manage trade-offs in negotiation.</p>
        <button onClick={() => handleStartExercise('making-trade-offs')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default Negotiation;
