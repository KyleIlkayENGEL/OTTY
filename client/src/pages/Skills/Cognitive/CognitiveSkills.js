import React from 'react';
import './CognitiveSkills.css';
import { useNavigate } from 'react-router-dom';

const CognitiveSkills = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="cognitive-skills-container">
      <h1>Cognitive Skills</h1>
      <p>Exercises for Logical Reasoning, Abstract Reasoning, Visual Processing, and Pattern Identification.</p>
      <div className="skills-cards-container">
        <div className="skill-card">
          <h2>Logical Reasoning</h2>
          <p>Test your logical thinking and reasoning skills.</p>
          <button 
            className="card-link" 
            onClick={() => handleNavigate('/skills/cognitive/logical-reasoning')}>
              Start Exercises
          </button>
        </div>
        <div className="skill-card">
          <h2>Abstract Reasoning</h2>
          <p>Identify patterns and solve abstract reasoning problems.</p>
          <button 
            className="card-link" 
            onClick={() => handleNavigate('/skills/cognitive/abstract-reasoning')}>
              Start Exercises
          </button>
        </div>
        <div className="skill-card">
          <h2>Visual Processing</h2>
          <p>Improve your ability to process visual information quickly and accurately.</p>
          <button 
            className="card-link" 
            onClick={() => handleNavigate('/skills/cognitive/visual-processing')}>
              Start Exercises
          </button>
        </div>
        <div className="skill-card">
          <h2>Pattern Identification</h2>
          <p>Recognize and predict patterns in sequences of numbers or shapes.</p>
          <button 
            className="card-link" 
            onClick={() => handleNavigate('/skills/cognitive/pattern-identification')}>
              Start Exercises
          </button>
        </div>
      </div>
    </div>
  );
};

export default CognitiveSkills;
