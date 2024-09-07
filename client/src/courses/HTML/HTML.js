import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';
import { useNavigate } from 'react-router-dom';
import './HTML.css';

const HTMLCourse = () => {
  const navigate = useNavigate();
  const [currentLesson, setCurrentLesson] = useState(0); // Track the current lesson
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [isCorrect, setIsCorrect] = useState(null); // Track if the answer is correct

  const lessonData = [
    {
      title: 'Lesson 1: Introduction to HTML',
      description: [
        `HTML (HyperText Markup Language) is the skeleton of all web pages. It structures web content and connects different pages on the internet using links.`,
        `In HTML, we use tags to structure content like text, images, and links. Every HTML page begins with a document type declaration, followed by a root element <html>. Inside the root element, the <head> element typically contains metadata and links to external resources, and the <body> element contains the actual content displayed to users.`,
        `HTML is foundational to web development and allows browsers to understand how to present content to users. In this lesson, you will create a simple webpage with a heading and a paragraph. The heading is represented by the <h1> tag, which is the largest and most prominent heading, while paragraphs are wrapped with the <p> tag.`
      ],
      instructions: `In the code editor below, create a basic webpage structure using an <h1> tag for the heading and a <p> tag for the paragraph.`,
      initialCode: `<h1>Welcome to HTML</h1>\n<p>This is your first HTML exercise.</p>`,
      quiz: {
        question: 'What does HTML stand for?',
        options: [
          'HyperText Markup Language',
          'HyperText Marketing Language',
          'Hyperlink Text Markup Language'
        ],
        correctAnswer: 'HyperText Markup Language'
      }
    },
    {
      title: 'Lesson 2: HTML Lists and Images',
      description: [
        `HTML also allows us to organize content using lists. In HTML, we have two types of lists: ordered lists (<ol>) and unordered lists (<ul>).`,
        `Unordered lists are typically used when the order of items doesn't matter. Ordered lists, on the other hand, display content in a numbered or lettered sequence, which makes sense when you want to show steps in a process.`,
        `Images can also be displayed using the <img> tag. To include an image, we use the <img> tag with an 'src' attribute pointing to the image URL and an 'alt' attribute to provide descriptive text for accessibility.`
      ],
      instructions: `Create a list of your favorite fruits using <ul> and add an image using the <img> tag.`,
      initialCode: `<h2>My Favorite Fruits</h2>\n<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>\n<img src="https://www.example.com/apple.jpg" alt="Apple" />`,
      quiz: {
        question: 'Which HTML element is used for an unordered list?',
        options: ['<ul>', '<li>', '<ol>'],
        correctAnswer: '<ul>'
      }
    },
    {
      title: 'Lesson 3: HTML Tables and Forms',
      description: [
        `Tables and forms are essential HTML elements for structuring data and collecting user inputs. Tables organize information in a grid of rows and columns using the <table> element.`,
        `Each row is represented by the <tr> (table row) element, and individual data cells are represented by the <td> (table data) element. Forms are used to collect user data, such as names, emails, and other information.`,
        `The <form> element wraps input fields, which are created using the <input> tag. Each input field can be of different types, such as text, email, or password. In this lesson, you will create a simple form to collect a user's name and email address and learn how to create a table to display user data.`
      ],
      instructions: `Create a simple form to collect a user's name and email address using the <form> and <input> elements.`,
      initialCode: `<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" />\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" />\n  <button type="submit">Submit</button>\n</form>`,
      quiz: {
        question: 'Which HTML element is used to create a form?',
        options: ['<form>', '<input>', '<button>'],
        correctAnswer: '<form>'
      }
    }
  ];

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === lessonData[currentLesson].quiz.correctAnswer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentLesson < lessonData.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else {
      navigate('/courses'); // Navigate back to courses after the last lesson
    }
  };

  const handleBack = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else {
      navigate('/courses'); // Navigate back to courses if it's the first lesson
    }
  };

  return (
    <div className="course-container">
      <h1 className="course-title">HTML Course</h1>

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
          language="html"
          apiUrl="http://localhost:5000/api/execute-html"
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
                checked={selectedAnswer === option}
                onChange={() => handleAnswerChange(option)}
              />
              <label htmlFor={`answer${index}`}>{option}</label>
            </div>
          ))}
          {selectedAnswer && (
            <p className={`quiz-result ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect. Try again!'}
            </p>
          )}
        </div>
      </div>

      <div className="navigation-buttons">
        <button onClick={handleBack} className="nav-button">Back</button>
        <button onClick={handleNext} className="nav-button">{currentLesson < lessonData.length - 1 ? 'Next' : 'Finish'}</button>
      </div>
    </div>
  );
};

export default HTMLCourse;
