import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summary2 = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-page-container">
      <h1>Summary of Basics of Programming II</h1>
      
      <div className="lesson-section">
        <h2>Loops</h2>
        <p>
          In programming, loops are used to repeat a block of code multiple times, which saves you from writing the same code over and over. Instead of manually repeating instructions, loops allow us to automate repetitive tasks. For example, if you need to display numbers from 1 to 10, instead of writing separate code for each number, you can write a loop that handles this.
        </p>
        <ul>
          <li>
            <strong>For loops:</strong> These are used when you know how many times you want to repeat a task. For example, if you want to run the same code 10 times, a "for loop" is perfect for this. 
          </li>
          <li>
            <strong>While loops:</strong> These are used when you don’t know beforehand how many times you need to repeat the task but you know that the loop should continue until a certain condition is no longer true.
          </li>
          <li>
            <strong>For each loops:</strong> These are used to perform a task for each item in a collection, like an array. For example, you can loop through a list of students and print their names one by one.
          </li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Arrays</h2>
        <p>
          Arrays are a type of data structure used to store multiple values in a single variable. Rather than having separate variables for each piece of data, arrays let us store a collection of items together, such as a list of numbers or strings. Arrays are incredibly useful when working with large datasets because you can perform operations on all the items at once, rather than individually.
        </p>
        <ul>
          <li>
            Arrays let you store a list of items like numbers, strings, or even other arrays.
          </li>
          <li>
            You can access items in an array using their index (position in the list), starting from 0.
          </li>
          <li>
            Arrays can be modified: you can add new items, remove existing ones, or update them.
          </li>
          <li>
            Common methods include:
            <ul>
              <li><strong>push():</strong> Adds an item to the end of the array.</li>
              <li><strong>pop():</strong> Removes the last item from the array.</li>
              <li><strong>map():</strong> Applies a function to each item in the array and returns a new array with the modified items.</li>
              <li><strong>filter():</strong> Creates a new array with items that pass a specific test.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Functions</h2>
        <p>
          Functions are one of the most fundamental concepts in programming. A function is a reusable block of code that performs a specific task. Once you define a function, you can use it throughout your program, which helps avoid repetitive code and makes your program more organized. Functions make your code more modular, meaning each piece can focus on doing one thing well, which is easier to manage.
        </p>
        <ul>
          <li>
            A function is defined once and can be used (or "called") whenever you need it, saving you time and keeping your code clean.
          </li>
          <li>
            Functions can take input values called <strong>parameters</strong>, which help the function perform its task. For example, a function that calculates the area of a rectangle would take the length and width as parameters.
          </li>
          <li>
            Functions can also return values. For example, a function that adds two numbers could return the result, which you can then store in a variable or use in other calculations.
          </li>
        </ul>
      </div>

      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2')}>
          Back to Lesson 3
        </button>
        <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/final-quiz2')}>
          Next to Final Quiz
        </button>
      </div>
    </div>
  );
};

export default Summary2;
