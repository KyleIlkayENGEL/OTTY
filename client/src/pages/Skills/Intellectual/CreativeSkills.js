import React, { useState } from 'react';
import './CreativeSkills.css';

const CreativeSkills = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const exercises = {
    'brainstorming': (
      <div className="creative-skills-container">
        <h1>Exercise 1: Brainstorming</h1>
        <p>Generate as many creative ideas as you can in response to the following prompt:</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. How would you redesign the traditional classroom to better foster creativity and collaboration among students?</p>
            <textarea name="q1" placeholder="Type your ideas here..." rows="6" />
          </div>

          {!submitted ? (
            <button type="submit" className="submit-button">Submit Ideas</button>
          ) : (
            <div className="result">
              <h2>Great Job!</h2>
              <p>Your ideas have been submitted. Remember, creativity is all about thinking outside the box!</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
    'storytelling': (
      <div className="creative-skills-container">
        <h1>Exercise 2: Storytelling</h1>
        <p>Write a short story based on the following prompt:</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. You discover a hidden door in your house that leads to a world where your wildest dreams come true. Describe what happens when you step through the door.</p>
            <textarea name="q2" placeholder="Type your story here..." rows="8" />
          </div>

          {!submitted ? (
            <button type="submit" className="submit-button">Submit Story</button>
          ) : (
            <div className="result">
              <h2>Well Done!</h2>
              <p>Your story has been submitted. Storytelling is a powerful way to express creativity—keep writing!</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
    'visual-creativity': (
      <div className="creative-skills-container">
        <h1>Exercise 3: Visual Creativity</h1>
        <p>Imagine and describe a new creature that lives deep in the ocean. What does it look like, and how does it survive in the deep sea environment?</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <p>1. Describe your ocean creature:</p>
            <textarea name="q3" placeholder="Type your description here..." rows="6" />
          </div>

          {!submitted ? (
            <button type="submit" className="submit-button">Submit Description</button>
          ) : (
            <div className="result">
              <h2>Fantastic Imagination!</h2>
              <p>Your description has been submitted. Visual creativity is all about imagining the unseen—great work!</p>
              <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
            </div>
          )}
        </form>
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="creative-skills-container">
      <h1>Creative Skills</h1>
      <p>Unleash your creativity with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Brainstorming</h2>
        <p>Generate creative ideas in response to a prompt.</p>
        <button onClick={() => handleStartExercise('brainstorming')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Storytelling</h2>
        <p>Write a short story based on a creative prompt.</p>
        <button onClick={() => handleStartExercise('storytelling')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Visual Creativity</h2>
        <p>Imagine and describe a unique visual concept.</p>
        <button onClick={() => handleStartExercise('visual-creativity')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default CreativeSkills;
