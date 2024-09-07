import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import questioningOtty from '../../assets/images/questioningotty.png';

const questions = [
  { question: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Marketing Language', 'Hyper Text Markup Language', 'Hyper Text Markup Leveler'], answer: 'Hyper Text Markup Language' },
  { question: 'What is CSS used for?', options: ['Creating server-side scripts', 'Styling web pages', 'Programming logic', 'Storing data'], answer: 'Styling web pages' },
  { question: 'What is the correct syntax for referring to an external script called "app.js"?', options: ['<script src="app.js">', '<script href="app.js">', '<script ref="app.js">', '<script name="app.js">'], answer: '<script src="app.js">' },
  { question: 'Which company developed JavaScript?', options: ['Microsoft', 'Netscape', 'Google', 'Oracle'], answer: 'Netscape' },
  { question: 'Which HTML element is used to define the title of a document?', options: ['<meta>', '<title>', '<head>', '<header>'], answer: '<title>' },
  { question: 'Which of the following is not a JavaScript data type?', options: ['Undefined', 'Number', 'Boolean', 'Float'], answer: 'Float' },
  { question: 'Which CSS property is used to change the background color?', options: ['color', 'background-color', 'bgcolor', 'bg-color'], answer: 'background-color' },
  { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Stylish Question Language', 'Statement Question Language', 'Standard Query Language'], answer: 'Structured Query Language' },
  { question: 'Which HTML attribute is used to define inline styles?', options: ['class', 'style', 'font', 'styles'], answer: 'style' },
  { question: 'Which is not a JavaScript framework?', options: ['React', 'Angular', 'Vue', 'Django'], answer: 'Django' },
  { question: 'What is the default port for HTTP?', options: ['21', '25', '80', '443'], answer: '80' },
  { question: 'What does JSON stand for?', options: ['JavaScript Object Notation', 'Java Source Object Notation', 'JavaScript Online Notation', 'JavaScript Object Naming'], answer: 'JavaScript Object Notation' },
  { question: 'Which language is primarily used for web development?', options: ['Python', 'JavaScript', 'C++', 'Swift'], answer: 'JavaScript' },
  { question: 'What is Git used for?', options: ['Web development', 'Version control', 'Database management', 'Game development'], answer: 'Version control' },
  { question: 'Which company maintains the React framework?', options: ['Google', 'Facebook', 'Microsoft', 'Amazon'], answer: 'Facebook' }
];

const Quiz = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const navigate = useNavigate();

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        score += 1;
      }
    });

    navigate('/results', { state: { score } }); // Redirect to results page with score
  };

  return (
    <div className="quiz-container">
      {currentQuestion === -1 ? (
        <div className="intro">
          <img src={questioningOtty} alt="Otter with a pencil" className="intro-image" />
          <h1>Welcome!</h1>
          <p>Thank you for registering. Let's start our journey together! To understand how to guide you better, please take this quick quiz.</p>
          <button onClick={handleNext}>Start Quiz</button>
        </div>
      ) : (
        <div className="card">
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                value={opt}
                checked={answers[currentQuestion] === opt}
                onChange={() => handleChange(opt)}
              />
              {opt}
            </label>
          ))}
          <button onClick={handleNext}>
            {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
