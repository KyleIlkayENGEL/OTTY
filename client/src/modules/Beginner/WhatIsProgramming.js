import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WhatIsProgramming.css';

const WhatIsProgramming = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: 'a',
      q2: 'c',
      q3: 'b',
    };

    let score = 0;
    Object.keys(quizAnswers).forEach((key) => {
      if (quizAnswers[key] === correctAnswers[key]) {
        score += 1;
      }
    });

    setQuizScore(score);
  };

  const handleAnswerChange = (e) => {
    setQuizAnswers({
      ...quizAnswers,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="lesson-page-container">
      <h1>What is Programming?</h1>
      <div className="lesson-section">
        <h2>Programming is Everywhere</h2>
        <p>Programming is integral to modern life. From the apps on our smartphones to the software that powers cars, programming is responsible for automating tasks and enabling complex operations in everyday life.</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/XASY30EfGAc"
            title="What is Programming? - Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Difference Between Coding and Programming</h2>
        <p>While the terms "coding" and "programming" are often used interchangeably, they are not exactly the same. Programming is the process of designing a solution to a problem, while coding is the act of translating that solution into a language that the computer can understand.</p>
        <p>Coding is a subset of programming. It involves writing the actual lines of code that a computer can execute, whereas programming includes the broader process of problem-solving, planning, and testing.</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dwy-CJ5Ad9w"
            title="Difference Between Coding and Programming"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Programming as Collaboration</h2>
        <p>Programming isn't just about writing code; it's also about collaboration. Programmers work together to build software that meets user needs. They use different languages and tools to communicate their ideas to computers in a way that is both efficient and effective.</p>
        <p>The relationship between humans and computers is a collaborative one: humans provide the creativity and problem-solving skills, while computers execute tasks quickly and accurately. This collaboration allows us to achieve things that would be impossible on our own.</p>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit}>
          <div className="quiz-card">
            <p>Question 1: What is the best definition of programming?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="a"
                checked={quizAnswers.q1 === 'a'}
                onChange={handleAnswerChange}
              />
              a) Giving a set of instructions to a computer to execute.
            </label>
            <label>
              <input
                type="radio"
                name="q1"
                value="b"
                checked={quizAnswers.q1 === 'b'}
                onChange={handleAnswerChange}
              />
              b) Playing video games on a computer.
            </label>
            <label>
              <input
                type="radio"
                name="q1"
                value="c"
                checked={quizAnswers.q1 === 'c'}
                onChange={handleAnswerChange}
              />
              c) Writing emails and sending them to friends.
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 2: What is the main difference between coding and programming?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="a"
                checked={quizAnswers.q2 === 'a'}
                onChange={handleAnswerChange}
              />
              a) They are the same thing.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="b"
                checked={quizAnswers.q2 === 'b'}
                onChange={handleAnswerChange}
              />
              b) Coding is a subset of programming, focusing on writing code.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="c"
                checked={quizAnswers.q2 === 'c'}
                onChange={handleAnswerChange}
              />
              c) Programming involves planning and problem-solving, while coding is the act of writing code.
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 3: Why is collaboration important in programming?</p>
            <label>
              <input
                type="radio"
                name="q3"
                value="a"
                checked={quizAnswers.q3 === 'a'}
                onChange={handleAnswerChange}
              />
              a) Computers can think for themselves.
            </label>
            <label>
              <input
                type="radio"
                name="q3"
                value="b"
                checked={quizAnswers.q3 === 'b'}
                onChange={handleAnswerChange}
              />
              b) It allows humans to leverage their creativity and problem-solving skills while computers execute tasks.
            </label>
            <label>
              <input
                type="radio"
                name="q3"
                value="c"
                checked={quizAnswers.q3 === 'c'}
                onChange={handleAnswerChange}
              />
              c) Collaboration is not important in programming.
            </label>
          </div>

          <button type="submit" className="quiz-submit-button">Submit Answers</button>
        </form>
        {quizScore !== null && (
          <div className="quiz-result">
            {quizScore === 3 ? (
              <div>
                <h3 style={{ color: '#2F855A' }}>Congratulations! All answers are correct. You are ready to move to the next lesson.</h3>
                <button className="quiz-submit-button mt-4" onClick={() => navigate('/modules/beginner/basic1')}>
                  Start Now
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ color: '#E53E3E' }}>Your Score: {quizScore}/3</h3>
                <p>Some answers are incorrect, please try again.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatIsProgramming;
