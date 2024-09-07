import React from 'react';
import './Dictionary.css';

const Dictionary = () => {
  return (
    <div className="dictionary-container">
      <h1>Beginner Dictionary</h1>
      <ul>
        <li><strong>Variable:</strong> A storage location in a program that can hold different values during the execution of the program.</li>
        <li><strong>Function:</strong> A block of code designed to perform a particular task. Functions can take inputs, perform actions, and return outputs.</li>
        <li><strong>Array:</strong> A data structure that holds a collection of elements, typically of the same data type, stored at contiguous memory locations.</li>
        <li><strong>Loop:</strong> A control structure that repeats a block of code as long as a specified condition is true.</li>
        <li><strong>Condition:</strong> A statement that controls the flow of execution based on whether a condition is true or false.</li>
        <li><strong>Class:</strong> A blueprint for creating objects (a particular data structure), providing initial values for state (member variables) and implementations of behavior (member functions or methods).</li>
        <li><strong>Object:</strong> An instance of a class, which can contain both data (attributes) and functions (methods).</li>
        <li><strong>String:</strong> A sequence of characters used to represent text in programming.</li>
        <li><strong>Compiler:</strong> A tool that translates source code written in a high-level programming language into machine code that a computer's processor can execute.</li>
        <li><strong>Algorithm:</strong> A step-by-step procedure or formula for solving a problem or performing a computation.</li>
      </ul>
    </div>
  );
};

export default Dictionary;
