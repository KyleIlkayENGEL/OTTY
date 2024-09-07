import React, { useState } from 'react';
import './Teamwork.css';

const Teamwork = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [score, setScore] = useState(null);

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setScore(null);
  };

  const handleSubmitExercise1 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q1.value.trim().toLowerCase();
    setScore(answer === 'collaboration');
  };

  const handleSubmitExercise2 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q2.value.trim().toLowerCase();
    setScore(answer === 'conflict resolution');
  };

  const handleSubmitExercise3 = (e) => {
    e.preventDefault();
    const answer = e.target.elements.q3.value.trim().toLowerCase();
    setScore(answer === 'goal alignment');
  };

  if (activeExercise === 'collaboration') {
    return (
      <div className="exercise-container">
        <h1>Exercise 1: Collaboration</h1>
        <p>What is the key element of teamwork that involves working together to achieve a common goal?</p>
        <form onSubmit={handleSubmitExercise1}>
          <textarea name="q1" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Collaboration is essential for effective teamwork.' : 'Incorrect, the correct answer is "collaboration".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  if (activeExercise === 'conflict-resolution') {
    return (
      <div className="exercise-container">
        <h1>Exercise 2: Conflict Resolution</h1>
        <p>What process is crucial in teamwork for resolving disagreements and maintaining team harmony?</p>
        <form onSubmit={handleSubmitExercise2}>
          <textarea name="q2" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Conflict resolution helps keep the team functioning smoothly.' : 'Incorrect, the correct answer is "conflict resolution".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  if (activeExercise === 'goal-alignment') {
    return (
      <div className="exercise-container">
        <h1>Exercise 3: Goal Alignment</h1>
        <p>In teamwork, ensuring that all team members are working towards the same objective is known as _____?</p>
        <form onSubmit={handleSubmitExercise3}>
          <textarea name="q3" placeholder="Type your answer here..." rows="4" />
          <button type="submit" className="submit-button">Submit Answer</button>
        </form>
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score ? '1/1' : '0/1'}</h2>
            <p>{score ? 'Correct! Goal alignment is critical for team success.' : 'Incorrect, the correct answer is "goal alignment".'}</p>
            <button onClick={() => setActiveExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="teamwork-container">
      <h1>Teamwork Skills</h1>
      <p>Enhance your teamwork skills with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Collaboration</h2>
        <p>Learn the importance of working together to achieve team goals.</p>
        <button onClick={() => handleStartExercise('collaboration')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Conflict Resolution</h2>
        <p>Practice resolving conflicts to maintain team harmony.</p>
        <button onClick={() => handleStartExercise('conflict-resolution')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Goal Alignment</h2>
        <p>Understand how to align team members towards common objectives.</p>
        <button onClick={() => handleStartExercise('goal-alignment')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default Teamwork;
