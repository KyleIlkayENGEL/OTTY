import React from 'react';
import { Link } from 'react-router-dom';
import './Beginner.css';

const Beginner = () => {
  return (
    <div className="beginner-container">
      <h1>Beginner Learning Path</h1>
      <p>Select a lesson or explore the subcategories to start learning.</p>

      <div className="lesson-list">
        <div className="lesson-card">
          <h2>Lesson 1: What is Programming?</h2>
          <p>Learn what programming is and why it is important.</p>
          <Link to="/modules/beginner/what-is-programming" className="start-button">Start Lesson</Link>
        </div>

        <div className="lesson-card">
          <h2>Lesson 2: Basics of Programming I</h2>
          <p>Learn the basic concepts like variables, data types, and operators.</p>
          <Link to="/modules/beginner/basic1" className="start-button">Start Lesson</Link>
        </div>

        <div className="lesson-card">
          <h2>Lesson 3: Basics of Programming II</h2>
          <p>Continue with more basic programming concepts.</p>
          <Link to="/modules/beginner/basic2" className="start-button">Start Lesson</Link>
        </div>
      </div>

      <div className="subcategories">
        <Link to="/modules/beginner/dictionary" className="subcategory-link">
          Explore Dictionary
        </Link>
        <Link to="/modules/beginner/flashcards" className="subcategory-link">
          Explore Flashcards
        </Link>
      </div>
    </div>
  );
};

export default Beginner;
