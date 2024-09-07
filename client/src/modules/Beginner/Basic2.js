import React from 'react';
import { Link } from 'react-router-dom';


const Basic2 = () => {
  return (
    <div className="basic2-container">
      <h1>Basics of Programming II</h1>
      

      <div className="section-list">
        <div className="section-card">
          <h2>Loops</h2>
          <p>Learn how loops allow repetitive tasks in programming.</p>
          <Link to="/modules/beginner/basic2/loops" className="start-button">Start Loops</Link>
        </div>

        <div className="section-card">
          <h2>Arrays</h2>
          <p>Understand how to store multiple values in arrays.</p>
          <Link to="/modules/beginner/basic2/arrays" className="start-button">Start Arrays</Link>
        </div>

        <div className="section-card">
          <h2>Functions</h2>
          <p>Learn how to structure reusable blocks of code with functions.</p>
          <Link to="/modules/beginner/basic2/functions" className="start-button">Start Functions</Link>
        </div>

        <div className="section-card">
          <h2>Summary</h2>
          <p>Review all the topics covered in this section.</p>
          <Link to="/modules/beginner/basic2/summary2" className="start-button">Start Summary</Link>
        </div>

        <div className="section-card">
          <h2>Final Quiz</h2>
          <p>Test your knowledge of the concepts you've learned.</p>
          <Link to="/modules/beginner/basic2/final-quiz2" className="start-button">Start Final Quiz</Link>
        </div>
      </div>
    </div>
  );
};

export default Basic2;
