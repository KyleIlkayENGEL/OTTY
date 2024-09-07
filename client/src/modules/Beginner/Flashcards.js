import React from 'react';
import './Flashcards.css';

const Flashcards = () => {
  return (
    <div className="flashcards-container">
      <h1>Beginner Flashcards</h1>
      
      <div className="flashcard">
        <div className="front">
          <p>Variable</p>
        </div>
        <div className="back">
          <p>A storage location in a program that can hold different values during the execution of the program.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Function</p>
        </div>
        <div className="back">
          <p>A block of code designed to perform a particular task.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Array</p>
        </div>
        <div className="back">
          <p>A data structure that holds a collection of elements stored at contiguous memory locations.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Loop</p>
        </div>
        <div className="back">
          <p>A control structure that repeats a block of code as long as a specified condition is true.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Condition</p>
        </div>
        <div className="back">
          <p>A statement that controls the flow of execution based on whether a condition is true or false.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Class</p>
        </div>
        <div className="back">
          <p>A blueprint for creating objects, providing initial values and implementations of behavior.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Object</p>
        </div>
        <div className="back">
          <p>An instance of a class that contains both data (attributes) and functions (methods).</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>String</p>
        </div>
        <div className="back">
          <p>A sequence of characters used to represent text in programming.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Compiler</p>
        </div>
        <div className="back">
          <p>A tool that translates source code into machine code that a computer's processor can execute.</p>
        </div>
      </div>

      <div className="flashcard">
        <div className="front">
          <p>Algorithm</p>
        </div>
        <div className="back">
          <p>A step-by-step procedure for solving a problem or performing a computation.</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
