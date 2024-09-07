import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
// import './Intermediate.css';

const OperatorsExercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0); // Track the current exercise
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected quiz answer
  const [showResult, setShowResult] = useState(false); // Show quiz result
  const [showSolution, setShowSolution] = useState(false); // Track if solution should be shown
  const navigate = useNavigate();  // Initialize the navigate function

  const exercisesData = [
    {
      title: 'Operators Exercise 1: Basic Arithmetic Operators',
      description: [
        `In this exercise, you'll perform basic arithmetic operations (addition, subtraction, multiplication, and division) on two numbers and log the results to the console.`
      ],
      instructions: `Perform basic arithmetic operations on the numbers 10 and 5, and log the results.`,
      initialCode: `let a = 10;\nlet b = 5;\n\nlet sum = a + b;\nlet difference = a - b;\nlet product = a * b;\nlet quotient = a / b;\n\nconsole.log(sum, difference, product, quotient);`,
      solutionCode: `let a = 10;\nlet b = 5;\n\nlet sum = a + b;\nlet difference = a - b;\nlet product = a * b;\nlet quotient = a / b;\n\nconsole.log(sum, difference, product, quotient);`,
      quiz: {
        question: 'Which operator is used to multiply two numbers?',
        options: ['+', '-', '*', '/'],
        correct: '*'
      }
    },
    {
      title: 'Operators Exercise 2: Comparison Operators',
      description: [
        `In this task, you'll use comparison operators (==, ===, !=, !==, >, <, >=, <=) to compare two numbers and log the results of these comparisons.`
      ],
      instructions: `Compare the numbers 10 and 5 using comparison operators, and log the results.`,
      initialCode: `let a = 10;\nlet b = 5;\n\nconsole.log(a > b);  // true\nconsole.log(a < b);  // false\nconsole.log(a == 10);  // true\nconsole.log(a === '10');  // false\nconsole.log(b != a);  // true\nconsole.log(b !== 5);  // false`,
      solutionCode: `let a = 10;\nlet b = 5;\n\nconsole.log(a > b);  // true\nconsole.log(a < b);  // false\nconsole.log(a == 10);  // true\nconsole.log(a === '10');  // false\nconsole.log(b != a);  // true\nconsole.log(b !== 5);  // false`,
      quiz: {
        question: 'Which operator checks strict equality (value and type)?',
        options: ['==', '===', '!=', '!=='],
        correct: '==='
      }
    },
    {
      title: 'Operators Exercise 3: Logical Operators',
      description: [
        `In this exercise, you'll use logical operators (&&, ||, !) to combine conditions and log the results of these operations.`
      ],
      instructions: `Combine conditions using logical operators and log the results.`,
      initialCode: `let isSunny = true;\nlet isWarm = false;\n\nconsole.log(isSunny && isWarm);  // false\nconsole.log(isSunny || isWarm);  // true\nconsole.log(!isSunny);  // false`,
      solutionCode: `let isSunny = true;\nlet isWarm = false;\n\nconsole.log(isSunny && isWarm);  // false\nconsole.log(isSunny || isWarm);  // true\nconsole.log(!isSunny);  // false`,
      quiz: {
        question: 'Which operator returns true if both conditions are true?',
        options: ['&&', '||', '!'],
        correct: '&&'
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
      <h1 className="course-title">Operators Exercises</h1>

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

export default OperatorsExercises;
