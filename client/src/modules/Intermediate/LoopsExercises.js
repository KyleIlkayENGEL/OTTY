import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import './Intermediate.css';

const LoopsExercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0); // Track the current exercise
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected quiz answer
  const [showResult, setShowResult] = useState(false); // Show quiz result
  const [showSolution, setShowSolution] = useState(false); // Track if solution should be shown
  const navigate = useNavigate();  // Initialize the navigate function

  const exercisesData = [
    {
      title: 'Loops Exercise 1: Basic For Loop',
      description: [
        `In this exercise, you'll write a basic 'for' loop that iterates through numbers 1 to 5 and logs each number to the console.`
      ],
      instructions: `Write a 'for' loop that logs numbers 1 to 5 to the console.`,
      initialCode: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
      solutionCode: `for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}`,
      quiz: {
        question: 'Which loop is commonly used to iterate a fixed number of times?',
        options: ['for loop', 'while loop', 'do-while loop'],
        correct: 'for loop'
      }
    },
    {
      title: 'Loops Exercise 2: Using a While Loop',
      description: [
        `In this exercise, you'll use a 'while' loop to iterate through an array and log each element to the console.`
      ],
      instructions: `Create a 'while' loop that logs each element in an array.`,
      initialCode: `let numbers = [1, 2, 3, 4, 5];\nlet i = 0;\nwhile (i < numbers.length) {\n  console.log(numbers[i]);\n  i++;\n}`,
      solutionCode: `let numbers = [1, 2, 3, 4, 5];\nlet i = 0;\nwhile (i < numbers.length) {\n  console.log(numbers[i]);\n  i++;\n}`,
      quiz: {
        question: 'Which loop runs as long as a condition is true?',
        options: ['for loop', 'while loop', 'do-while loop'],
        correct: 'while loop'
      }
    },
    {
      title: 'Loops Exercise 3: Nested Loops',
      description: [
        `In this task, you'll create a nested loop that prints a multiplication table for numbers 1 to 3.`
      ],
      instructions: `Write a nested 'for' loop to print a multiplication table for numbers 1 to 3.`,
      initialCode: `for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i * j);\n  }\n}`,
      solutionCode: `for (let i = 1; i <= 3; i++) {\n  for (let j = 1; j <= 3; j++) {\n    console.log(i * j);\n  }\n}`,
      quiz: {
        question: 'What does a nested loop refer to?',
        options: ['A loop inside another loop', 'Two loops side by side', 'A loop that only runs once'],
        correct: 'A loop inside another loop'
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
      <h1 className="course-title">Loops Exercises</h1>

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

export default LoopsExercises;
