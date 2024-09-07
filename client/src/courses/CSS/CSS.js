import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
import { useNavigate } from 'react-router-dom';

const CSSCourse = () => {
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0); // Track the current lesson
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [quizResult, setQuizResult] = useState(null); // Track quiz result

  const lessonData = [
    {
      title: 'Lesson 1: Introduction to CSS',
      description: [
        `CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the color, fonts, and layout of HTML elements.`,
        `In CSS, we use selectors to target HTML elements and apply styles to them. CSS rules are made up of a selector and a declaration block. The selector points to the HTML element, and the declaration block contains one or more declarations separated by semicolons.`,
        `In this lesson, you will create a simple CSS rule that styles a heading with a color and font-size.`
      ],
      instructions: `In the code editor below, style the <h1> element to have a red color and a font-size of 32px.`,
      initialCode: `h1 {\n  color: red;\n  font-size: 32px;\n}`,
      quiz: {
        question: 'What does CSS stand for?',
        options: [
          'Cascading Style Sheets',
          'Colorful Style Sheets',
          'Computer Style Sheets'
        ],
        correctAnswer: 'Cascading Style Sheets'
      }
    },
    {
      title: 'Lesson 2: CSS Selectors and Properties',
      description: [
        `CSS selectors are used to target specific HTML elements that you want to style. For example, the class selector selects elements with a specific class, and the id selector selects elements with a specific id.`,
        `Properties in CSS define the styles for the selected elements. Properties include color, font-size, margin, padding, and more.`,
        `In this lesson, you will use a class selector to style multiple elements with the same class.`
      ],
      instructions: `Create a class selector called .highlight to apply a yellow background to all elements with that class.`,
      initialCode: `.highlight {\n  background-color: yellow;\n}`,
      quiz: {
        question: 'Which of the following is a valid CSS property?',
        options: ['font-weight', 'font-bold', 'font-style-size'],
        correctAnswer: 'font-weight'
      }
    },
    {
      title: 'Lesson 3: CSS Box Model',
      description: [
        `The CSS box model is essential in understanding how elements are sized and spaced on a web page. It includes content, padding, border, and margin.`,
        `The content area is the actual content of the element, padding is the space between the content and the border, the border is the edge around the element, and margin is the space outside the border.`,
        `In this lesson, you will use the box model to apply padding, border, and margin to an element.`
      ],
      instructions: `Apply padding, border, and margin to the <div> element in the code editor.`,
      initialCode: `div {\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}`,
      quiz: {
        question: 'Which of the following is part of the CSS box model?',
        options: ['padding', 'shadow', 'text-align'],
        correctAnswer: 'padding'
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
      <h1 className="course-title">CSS Course</h1>

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
          language="css" 
          apiUrl="http://localhost:5000/api/execute-css" 
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

export default CSSCourse;
