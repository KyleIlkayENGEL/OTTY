import React from 'react';
import { useNavigate } from 'react-router-dom';


const Summary = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-page-container">
      <h1>Summary of Basics of Programming I</h1>
      
      <div className="lesson-section">
        <h2>Overview</h2>
        <p>
          In this section, you learned about the importance of programming in solving real-world problems and the structure of a basic program.
        </p>
        <ul>
          <li>Definition and purpose of computer programs.</li>
          <li>Real-world applications of programming.</li>
          <li>Understanding basic program components like input, processing, and output.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Basic Syntax</h2>
        <p>
          This module covered the foundational rules that govern programming languages and how to write structured code.
        </p>
        <ul>
          <li>Understanding syntax rules in programming languages.</li>
          <li>Case sensitivity in programming (e.g., Java and Python).</li>
          <li>Structure of programs, including punctuation, keywords, and expressions.</li>
          <li>Writing simple programs with correct syntax.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Data Types</h2>
        <p>
          You learned about various types of data that can be stored in programs and how they are used in computations.
        </p>
        <ul>
          <li>Primitive data types: integers, floats, characters.</li>
          <li>String data types for handling text.</li>
          <li>Understanding the differences between static and dynamic typing.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Variables</h2>
        <p>
          This module explained how to declare, use, and modify variables to store and manipulate data within a program.
        </p>
        <ul>
          <li>Declaring variables in different programming languages.</li>
          <li>Understanding variable scope and lifetime.</li>
          <li>Modifying and reusing variable values within programs.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Operators</h2>
        <p>
          You explored the use of operators to perform arithmetic calculations, comparisons, and logical operations in your code.
        </p>
        <ul>
          <li>Arithmetic operators for mathematical operations.</li>
          <li>Comparison operators to evaluate conditions.</li>
          <li>Logical operators (AND, OR, NOT) for complex decision-making.</li>
        </ul>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1')}>
          Back to Lesson 2
        </button>
        <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/final-quiz')}>
          Next to Final Quiz
        </button>
      </div>
    </div>
  );
};

export default Summary;

