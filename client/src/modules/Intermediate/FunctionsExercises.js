import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import './Intermediate.css';

const FunctionsExercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0); // Track the current exercise
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected quiz answer
  const [showResult, setShowResult] = useState(false); // Show quiz result
  const [showSolution, setShowSolution] = useState(false); // Track if solution should be shown
  const navigate = useNavigate();  // Initialize the navigate function

  const exercisesData = [
    {
      title: 'Functions Exercise 1: Function Declaration',
      description: [
        `In this exercise, you'll create a simple function that takes two numbers as parameters, adds them together, and returns the result.`
      ],
      instructions: `Create a function named 'addNumbers' that takes two parameters and returns their sum.`,
      initialCode: `function addNumbers(a, b) {\n  // Your code here\n}\n\nconsole.log(addNumbers(5, 10));`,
      solutionCode: `function addNumbers(a, b) {\n  return a + b;\n}\n\nconsole.log(addNumbers(5, 10));`,
      quiz: {
        question: 'How do you declare a function in JavaScript?',
        options: ['function myFunction() {}', 'myFunction() = function {}', 'let myFunction = {}'],
        correct: 'function myFunction() {}'
      }
    },
    {
      title: 'Functions Exercise 2: Arrow Functions',
      description: [
        `In this task, you'll convert a regular function into an arrow function. Arrow functions are a shorter syntax for writing functions in JavaScript.`
      ],
      instructions: `Convert the given 'multiplyNumbers' function to an arrow function.`,
      initialCode: `function multiplyNumbers(a, b) {\n  return a * b;\n}\n\nconsole.log(multiplyNumbers(5, 10));`,
      solutionCode: `const multiplyNumbers = (a, b) => a * b;\n\nconsole.log(multiplyNumbers(5, 10));`,
      quiz: {
        question: 'What is the syntax for an arrow function in JavaScript?',
        options: ['function() {}', '() => {}', 'function => {}'],
        correct: '() => {}'
      }
    },
    {
      title: 'Functions Exercise 3: Function Expressions',
      description: [
        `In this exercise, you'll create a function expression, which is an alternative way to define a function in JavaScript.`
      ],
      instructions: `Create a function expression that takes a string as a parameter and returns the string in uppercase letters.`,
      initialCode: `const toUpperCase = function(str) {\n  // Your code here\n};\n\nconsole.log(toUpperCase('hello'));`,
      solutionCode: `const toUpperCase = function(str) {\n  return str.toUpperCase();\n};\n\nconsole.log(toUpperCase('hello'));`,
      quiz: {
        question: 'What is a function expression in JavaScript?',
        options: ['A function assigned to a variable', 'A function without parameters', 'A function that returns a value'],
        correct: 'A function assigned to a variable'
      }
    }
  ];

  const handleNext = () => {
    if (currentExercise < exercisesData.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowResult(false);
      setSelectedAnswer(null);
      setShowSolution(false); // Reset the solution view when navigating
    } else {
      navigate('/modules/intermediate'); // Navigate to the Intermediate page on finish
    }
  };

  const handleBack = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setShowResult(false);
      setSelectedAnswer(null);
      setShowSolution(false); // Reset the solution view when navigating
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution); // Toggle the solution view
  };

  return (
    <div className="course-container">
      <h1 className="course-title">Functions Exercises</h1>

      <div className="lesson-card green-lighter-bg">
        <h2 className="lesson-title">{exercisesData[currentExercise].title}</h2>
        {exercisesData[currentExercise].description.map((paragraph, index) => (
          <p key={index} className="lesson-description">{paragraph}</p>
        ))}
      </div>

      <div className="instructions-card">
        <h3>Instructions:</h3>
        <p>{exercisesData[currentExercise].instructions}</p>
      </div>

      <div className="code-editor-card">
        <CodeEditor 
          initialCode={exercisesData[currentExercise].initialCode} 
          language="javascript" 
          apiUrl="http://localhost:5000/api/execute-js" 
        />
      </div>

      {/* Show Solution Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <button style={{ padding: '10px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize:'16px' }} onClick={toggleSolution}>
    {showSolution ? 'Hide Solution' : 'Show Solution'}
  </button>
        {showSolution && (
          <div className="solution-code">
            <pre>{exercisesData[currentExercise].solutionCode}</pre>
          </div>
        )}
      </div>

      <div className="quiz-card">
        <h3 className="quiz-title">Quiz: Test Your Knowledge</h3>
        <div className="quiz-question">
          <p>{exercisesData[currentExercise].quiz.question}</p>
          {exercisesData[currentExercise].quiz.options.map((option, index) => (
            <div key={index}>
              <input 
                type="radio" 
                id={`answer${index}`} 
                name="quiz" 
                checked={selectedAnswer === option} 
                onChange={() => handleAnswerClick(option)}
              />
              <label htmlFor={`answer${index}`}>{option}</label>
            </div>
          ))}
        </div>
        {showResult && (
          <div className="quiz-result">
            {selectedAnswer === exercisesData[currentExercise].quiz.correct ? (
              <p style={{ color: 'green' }}>Correct!</p>
            ) : (
              <p style={{ color: 'red' }}>Incorrect. The correct answer is {exercisesData[currentExercise].quiz.correct}.</p>
            )}
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack} className="nav-button">Back</button>
        <button onClick={handleNext} className="nav-button">
          {currentExercise < exercisesData.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default FunctionsExercises;
