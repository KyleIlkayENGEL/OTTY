import React, { useState } from 'react';
import './Communication.css';

const Communication = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [score, setScore] = useState(null);

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setScore(null);
  };

  const handleSubmitExercise1 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q1.value.trim().toLowerCase();
    setScore(answer === 'listening');
  };

  const handleSubmitExercise2 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q2.value.trim().toLowerCase();
    setScore(answer === 'concise');
  };

  const handleSubmitExercise3 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q3.value.trim().toLowerCase();
    setScore(answer === 'non-verbal cues');
  };

  if (activeExercise === 'active-listening') {
    return (
      <div className="exercise-container">
        <h1>Exercise 1: Active Listening</h1>
        <p>What is the most crucial skill for effective communication?</p>
        <form onSubmit={handleSubmitExercise1}>
          <textarea name="q1" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Active listening is key to effective communication.' : 'Incorrect, the correct answer is "listening".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  if (activeExercise === 'clear-messaging') {
    return (
      <div className="exercise-container">
        <h1>Exercise 2: Clear Messaging</h1>
        <p>Fill in the blank: A good communicator is ______ and precise.</p>
        <form onSubmit={handleSubmitExercise2}>
          <textarea name="q2" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Being concise is crucial for clear messaging.' : 'Incorrect, the correct answer is "concise".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  if (activeExercise === 'non-verbal-communication') {
    return (
      <div className="exercise-container">
        <h1>Exercise 3: Non-Verbal Communication</h1>
        <p>What do we call the type of communication that involves body language, facial expressions, and gestures?</p>
        <form onSubmit={handleSubmitExercise3}>
          <textarea name="q3" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Non-verbal cues are essential for effective communication.' : 'Incorrect, the correct answer is "non-verbal cues".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="communication-container">
      <h1>Communication Skills</h1>
      <p>Improve your communication skills with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Active Listening</h2>
        <p>Learn how to listen actively and improve your communication.</p>
        <button onClick={() => handleStartExercise('active-listening')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Clear Messaging</h2>
        <p>Practice sending clear and concise messages.</p>
        <button onClick={() => handleStartExercise('clear-messaging')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Non-Verbal Communication</h2>
        <p>Understand the importance of non-verbal communication.</p>
        <button onClick={() => handleStartExercise('non-verbal-communication')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default Communication;
