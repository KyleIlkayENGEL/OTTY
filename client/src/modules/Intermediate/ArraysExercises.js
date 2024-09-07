import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
//import './Intermediate.css';

const ArraysExercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0); // Track the current exercise
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected quiz answer
  const [showResult, setShowResult] = useState(false); // Show quiz result
  const [showSolution, setShowSolution] = useState(false); // Track if solution should be shown
  const navigate = useNavigate();  // Initialize the navigate function

  
  useEffect(() => {
    console.log('ArraysExercises component mounted');
  }, []);

  const exercisesData = [
    {
      title: 'Arrays Exercise 1: Basic Array Creation',
      description: [
        `In this exercise, you'll create an array with three items, stored inside a variable called 'myArray'. The items can be anything you want.`,
        `After creating the array, modify the first two items using bracket notation and assignment. Finally, add a new item to the beginning of the array.`
      ],
      instructions: `Create an array with three items, modify the first two items, and add a new item to the beginning.`,
      initialCode: `let myArray = ['item1', 'item2', 'item3'];\n\n// Modify items\nmyArray[0] = 'newItem1';\nmyArray[1] = 'newItem2';\n\n// Add item to the beginning\nmyArray.unshift('newItem');\n\nconsole.log(myArray);`,
      solutionCode: `let myArray = ['item1', 'item2', 'item3'];\nmyArray[0] = 'newItem1';\nmyArray[1] = 'newItem2';\nmyArray.unshift('newItem');\nconsole.log(myArray);`,
      quiz: {
        question: 'Which method adds an item to the beginning of an array?',
        options: ['push()', 'unshift()', 'pop()'],
        correct: 'unshift()'
      }
    },
    {
      title: 'Arrays Exercise 2: Array Manipulation',
      description: [
        `In this task, you will start with an array of numbers. You will use methods to remove the last item, add a new item to the end, and update the second item.`,
        `These basic operations are foundational for manipulating arrays in JavaScript.`
      ],
      instructions: `Start with an array of numbers. Remove the last item, add a new item to the end, and update the second item.`,
      initialCode: `let numbers = [10, 20, 30, 40];\n\n// Remove the last item\nnumbers.pop();\n\n// Add a new item to the end\nnumbers.push(50);\n\n// Update the second item\nnumbers[1] = 25;\n\nconsole.log(numbers);`,
      solutionCode: `let numbers = [10, 20, 30, 40];\nnumbers.pop();\nnumbers.push(50);\nnumbers[1] = 25;\nconsole.log(numbers);`,
      quiz: {
        question: 'Which method removes the last item of an array?',
        options: ['shift()', 'pop()', 'splice()'],
        correct: 'pop()'
      }
    },
    {
      title: 'Arrays Exercise 3: Iterating over an Array',
      description: [
        `In this exercise, you'll use a loop to iterate over an array and print each item. This is a fundamental technique used in almost every JavaScript program that handles arrays.`,
        `Use the 'for' loop to log each item in the array to the console.`
      ],
      instructions: `Create an array and use a 'for' loop to log each item to the console.`,
      initialCode: `let fruits = ['Apple', 'Banana', 'Cherry'];\n\n// Iterate over the array\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}`,
      solutionCode: `let fruits = ['Apple', 'Banana', 'Cherry'];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}`,
      quiz: {
        question: 'Which loop is commonly used to iterate over an array?',
        options: ['for loop', 'while loop', 'do-while loop'],
        correct: 'for loop'
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
      <h1 className="course-title">Array Exercises</h1>

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

export default ArraysExercises;
