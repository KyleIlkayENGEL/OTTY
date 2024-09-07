import React from 'react';
import { Link } from 'react-router-dom';
import './Basic1.css';

const Basic1 = () => {
  return (
    <div className="basic1-container">
      <h1>Basics of Programming I</h1>
      <p>Select a topic to begin learning.</p>

      <div className="section-list">
        <div className="section-card">
          <h2>Overview</h2>
          <p>Introduction to computer programs and programming.</p>
          <Link to="/modules/beginner/basic1/overview" className="start-button">Start Overview</Link>
        </div>

        <div className="section-card">
          <h2>Basic Syntax</h2>
          <p>Learn the basic syntax of programming languages.</p>
          <Link to="/modules/beginner/basic1/basic-syntax" className="start-button">Start Syntax</Link>
        </div>

        <div className="section-card">
          <h2>Data Types</h2>
          <p>Understand the different data types used in programming.</p>
          <Link to="/modules/beginner/basic1/data-types" className="start-button">Start Data Types</Link>
        </div>

        <div className="section-card">
          <h2>Variables</h2>
          <p>Learn about variables and how they are used in programs.</p>
          <Link to="/modules/beginner/basic1/variables" className="start-button">Start Variables</Link>
        </div>

        <div className="section-card">
          <h2>Operators</h2>
          <p>Explore the different operators used in programming.</p>
          <Link to="/modules/beginner/basic1/operators" className="start-button">Start Operators</Link>
        </div>

        <div className="section-card">
          <h2>Summary</h2>
          <p>Review what you learned.</p>
          <Link to="/modules/beginner/basic1/summary" className="start-button">Start</Link>
        </div>

      <div className="section-card">
          <h2>FinalQuiz</h2>
          <p>Test your Knowledge.</p>
          <Link to="/modules/beginner/basic1/final-quiz" className="start-button">Start</Link>
        </div>
      </div>

    </div>
  );
};

export default Basic1;
