import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
import { useNavigate } from 'react-router-dom';


const JSCourse = () => {
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0); // Track the current lesson
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [quizResult, setQuizResult] = useState(null); // Track quiz result

  const lessonData = [
    {
      title: 'Lesson 1: Introduction to JavaScript',
      description: [
        `JavaScript is a versatile programming language that is used to create dynamic content on websites. It allows developers to implement complex features like interactive forms, animations, and more.`,
        `In JavaScript, we can declare variables using keywords like 'var', 'let', and 'const'. JavaScript also supports a wide range of data types, including numbers, strings, booleans, and arrays.`,
        `In this lesson, you will create a variable that stores a number and then log it to the console.`
      ],
      instructions: `In the code editor below, declare a variable named 'myNumber' and assign it the value of 10. Then, use 'console.log' to display it.`,
      initialCode: `let myNumber = 10;\nconsole.log(myNumber);`,
      quiz: {
        question: 'Which keyword is used to declare a constant variable in JavaScript?',
        options: [
          'const',
          'let',
          'var'
        ],
        correctAnswer: 'const'
      }
    },
    {
      title: 'Lesson 2: Functions in JavaScript',
      description: [
        `Functions are blocks of code that perform specific tasks. In JavaScript, we can define a function using the 'function' keyword, followed by a name, parentheses, and curly braces.`,
        `A function can take parameters and return a value. To execute the function, we "call" it by its name and pass the required arguments, if any.`,
        `In this lesson, you will define a function that takes two numbers as parameters and returns their sum.`
      ],
      instructions: `Create a function called 'addNumbers' that takes two parameters and returns their sum.`,
      initialCode: `function addNumbers(a, b) {\n  return a + b;\n}`,
      quiz: {
        question: 'What is the correct syntax for creating a function in JavaScript?',
        options: [
          'function myFunction() {}',
          'function:myFunction() {}',
          'create function myFunction() {}'
        ],
        correctAnswer: 'function myFunction() {}'
      }
    },
    {
      title: 'Lesson 3: JavaScript Arrays',
      description: [
        `Arrays are used to store multiple values in a single variable. Each item in an array is accessed by its index, starting from 0.`,
        `You can perform many operations on arrays, such as adding, removing, and modifying elements. JavaScript provides built-in methods like 'push', 'pop', 'shift', and 'unshift' to manipulate arrays.`,
        `In this lesson, you will create an array of numbers and add a new number to the array using the 'push' method.`
      ],
      instructions: `Create an array named 'numbers' with the values [1, 2, 3, 4]. Use the 'push' method to add the number 5 to the array.`,
      initialCode: `let numbers = [1, 2, 3, 4];\nnumbers.push(5);\nconsole.log(numbers);`,
      quiz: {
        question: 'Which method is used to add an element to the end of an array in JavaScript?',
        options: ['push', 'pop', 'shift'],
        correctAnswer: 'push'
      }
    }
  ];

  const handleNext = () => {
    setSelectedAnswer(null);
    setQuizResult(null);
    if (currentLesson < lessonData.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else {
      navigate('/courses'); // Navigate back to courses after the last lesson
    }
  };

  const handleBack = () => {
    setSelectedAnswer(null);
    setQuizResult(null);
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else {
      navigate('/courses'); // Navigate back to courses if it's the first lesson
    }
  };

  const handleAnswerChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedAnswer(selectedOption);
    if (selectedOption === lessonData[currentLesson].quiz.correctAnswer) {
      setQuizResult('Correct!');
    } else {
      setQuizResult('Incorrect. Try again!');
    }
  };

  return (
    <div className="course-container">
      <h1 className="course-title">JavaScript Course</h1>

      <div className="lesson-card green-lighter-bg">
        <h2 className="lesson-title">{lessonData[currentLesson].title}</h2>
        {lessonData[currentLesson].description.map((paragraph, index) => (
          <p key={index} className="lesson-description">{paragraph}</p>
        ))}
      </div>

      <div className="instructions-card">
        <h3>Instructions:</h3>
        <p>{lessonData[currentLesson].instructions}</p>
      </div>

      <div className="code-editor-card">
        <CodeEditor 
          initialCode={lessonData[currentLesson].initialCode} 
          language="javascript" 
          apiUrl="http://localhost:5000/api/execute-js" 
        />
      </div>

      <div className="quiz-card">
        <h3 className="quiz-title">Quiz: Test Your Knowledge</h3>
        <div className="quiz-question">
          <p>{lessonData[currentLesson].quiz.question}</p>
          {lessonData[currentLesson].quiz.options.map((option, index) => (
            <div key={index}>
              <input 
                type="radio" 
                id={`answer${index}`} 
                name="quiz" 
                value={option}
                onChange={handleAnswerChange}
                checked={selectedAnswer === option}
              />
              <label htmlFor={`answer${index}`}>{option}</label>
            </div>
          ))}
        </div>
        {quizResult && <p className="quiz-result">{quizResult}</p>}
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack} className="nav-button">Back</button>
        <button onClick={handleNext} className="nav-button">{currentLesson < lessonData.length - 1 ? 'Next' : 'Finish'}</button>
      </div>
    </div>
  );
};

export default JSCourse;
