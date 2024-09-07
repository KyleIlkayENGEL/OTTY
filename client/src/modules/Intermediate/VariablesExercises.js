import React, { useState, useEffect } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor'; // Assuming this is the location of the CodeEditor
import { useNavigate } from 'react-router-dom';

const VariablesExercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0); // Track the current exercise
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected quiz answer
  const [showResult, setShowResult] = useState(false); // Show quiz result
  const [showSolution, setShowSolution] = useState(false); // Track if solution should be shown
  const navigate = useNavigate();  // Initialize the navigate function
  
  useEffect(() => {
    console.log('VariablesExercises component mounted');
  }, []);

  const exercisesData = [
    {
      title: 'Variables Exercise 1: Declare and Assign Variables',
      description: [
        `In this exercise, you'll declare three variables using 'let'. The variables should be a number, a string, and a boolean.`,
        `Assign the variables 'myNumber', 'myString', and 'myBoolean' the values 10, "Hello", and true, respectively.`
      ],
      instructions: `Declare three variables and assign them appropriate values.`,
      initialCode: `let myNumber = 10;\nlet myString = "Hello";\nlet myBoolean = true;\n\nconsole.log(myNumber, myString, myBoolean);`,
      solutionCode: `let myNumber = 10;\nlet myString = "Hello";\nlet myBoolean = true;\nconsole.log(myNumber, myString, myBoolean);`,
      quiz: {
        question: 'Which keyword should be used to declare a variable that may change value?',
        options: ['const', 'let', 'var'],
        correct: 'let'
      }
    },
    {
      title: 'Variables Exercise 2: Reassign Variables',
      description: [
        `In this task, you'll reassign the values of the variables you declared earlier.`,
        `Change the values of 'myNumber', 'myString', and 'myBoolean' to 20, "Goodbye", and false, respectively.`
      ],
      instructions: `Reassign the three variables with new values: 20, "Goodbye", and false.`,
      initialCode: `let myNumber = 10;\nlet myString = "Hello";\nlet myBoolean = true;\n\n// Reassign the variables\nmyNumber = 20;\nmyString = "Goodbye";\nmyBoolean = false;\n\nconsole.log(myNumber, myString, myBoolean);`,
      solutionCode: `let myNumber = 10;\nlet myString = "Hello";\nlet myBoolean = true;\n\nmyNumber = 20;\nmyString = "Goodbye";\nmyBoolean = false;\nconsole.log(myNumber, myString, myBoolean);`,
      quiz: {
        question: 'What is the new value of "myBoolean" after reassignment?',
        options: ['true', 'false', 'undefined'],
        correct: 'false'
      }
    },
    {
      title: 'Variables Exercise 3: Using "const"',
      description: [
        `This exercise focuses on using 'const' to declare a constant variable.`,
        `Declare a variable 'birthYear' using 'const' and assign it the value of your birth year (e.g., 1990).`
      ],
      instructions: `Declare a constant variable and assign it the value of your birth year. Try to reassign it and see what happens.`,
      initialCode: `const birthYear = 1990;\n\n// Uncommenting the following line will cause an error\n// birthYear = 2000;\n\nconsole.log(birthYear);`,
      solutionCode: `const birthYear = 1990;\nconsole.log(birthYear);`,
      quiz: {
        question: 'What happens if you try to reassign a value to a "const" variable?',
        options: ['The reassignment will succeed.', 'An error will occur.'],
        correct: 'An error will occur.'
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
      <h1 className="course-title">Variables Exercises</h1>

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

export default VariablesExercises;
