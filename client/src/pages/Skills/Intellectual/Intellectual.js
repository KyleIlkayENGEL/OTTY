import React from 'react';
import { Link } from 'react-router-dom';
import './Intellectual.css';

const IntellectualSkills = () => {
  return (
    <div className="intellectual-skills-container">
      <h1>Intellectual Skills</h1>
      <p>
        Exercises for Knowledge and Understanding, Critical Thinking, Problem Solving, and Creative Skills.
      </p>
      <div className="skills-cards-container">
        <div className="skill-card">
          <h2>Knowledge and Understanding</h2>
          <p>Enhance your knowledge base and comprehension skills.</p>
          <Link to="/skills/intellectual/knowledge" className="card-link">Start Exercises</Link>
        </div>
        <div className="skill-card">
          <h2>Critical Thinking</h2>
          <p>Develop your ability to analyze and evaluate information.</p>
          <Link to="/skills/intellectual/critical-thinking" className="card-link">Start Exercises</Link>
        </div>
        <div className="skill-card">
          <h2>Problem Solving</h2>
          <p>Improve your ability to find solutions to complex problems.</p>
          <Link to="/skills/intellectual/problem-solving" className="card-link">Start Exercises</Link>
        </div>
        <div className="skill-card">
          <h2>Creative Skill</h2>
          <p>Enhance your creativity and innovative thinking.</p>
          <Link to="/skills/intellectual/creative-skill" className="card-link">Start Exercises</Link>
        </div>
      </div>
    </div>
  );
};

export default IntellectualSkills;
