import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loops.css';

const Loops = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    if (quizAnswers.question1 === 'for') {
      score++;
    }
    if (quizAnswers.question2 === 'while') {
      score++;
    }
    if (quizAnswers.question3 === 'forEach') {
      score++;
    }

    setQuizScore(score);
  };

  const handleInputChange = (e) => {
    setQuizAnswers({
      ...quizAnswers,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="lesson-page-container">
      <h1>Introduction to Loops</h1>

      <div className="lesson-section">
        <h2>Video: Loops in Programming</h2>
        <p>Learn the basics of sequences, selections, and loops with the following video:</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/eSYeHlwDCNA" 
            title="Computer Science Basics: Sequences, Selections, and Loops" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <p>Loops are a fundamental structure in programming that allow you to execute the same set of instructions multiple times. Imagine telling a computer: "Repeat this task 15 times." Loops help simplify repetitive tasks and make your code more efficient.</p>

        <h2>What This Lesson Will Cover</h2>
        <ul>
          <li>For loops</li>
          <li>While loops</li>
          <li>For each loops</li>
        </ul>

        <h2>For Loops</h2>
        <p>A <em>for loop</em>, or a count-controlled loop, is used when you know how many times you'd like to repeat a task. Here's an example of a for loop that places tiles in a pattern:</p>
        <div className="code-card">
          <pre>
{`For 10 times:
  placeTile('pink')
  placeTile('orange')
  placeTile('mint')`}
          </pre>
        </div>

        <h2>While Loops</h2>
        <p>A <em>while loop</em>, or condition-controlled loop, continues to repeat instructions as long as a specified condition remains true. Here's an example:</p>
        <div className="code-card">
          <pre>
{`While there are pink tiles available:
  placeTile('pink')
  placeTile('orange')
  placeTile('mint')`}
          </pre>
        </div>

        <h2>For Each Loops</h2>
        <p>A <em>for each loop</em>, or collection-controlled loop, is used to perform a task for each item in a collection, like a list. Here's an example:</p>
        <div className="code-card">
          <pre>
{`festiveList = ['pink', 'green', 'red', 'pink', 'green', 'red']

For each color in festiveList:
  placeTile(color)`}
          </pre>
        </div>

        <div className="lesson-section">
          <h2>Video: Do and While Loops</h2>
          <p>Learn more about different loop structures with the following video:</p>
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/v-K-4KuA8mQ" 
              title="Do and While Loops" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <h2>Review</h2>
        <ul>
          <li>Loops allow you to execute a block of code multiple times.</li>
          <li>A <em>for loop</em> repeats a set of instructions for a specified number of times.</li>
          <li>A <em>while loop</em> continues to repeat instructions as long as a condition remains true.</li>
          <li>A <em>for each loop</em> repeats instructions for each item in a collection.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit} className="quiz-container">
          <div className="card quiz-card">
            <h3>Question 1: Which loop is best when you know how many times you want to repeat?</h3>
            <div>
              <input
                type="radio"
                id="for"
                name="question1"
                value="for"
                onChange={handleInputChange}
              />
              <label htmlFor="for">For loop</label>
            </div>
            <div>
              <input
                type="radio"
                id="while"
                name="question1"
                value="while"
                onChange={handleInputChange}
              />
              <label htmlFor="while">While loop</label>
            </div>
          </div>

          <div className="card quiz-card">
            <h3>Question 2: Which loop checks a condition and continues as long as the condition is true?</h3>
            <div>
              <input
                type="radio"
                id="while"
                name="question2"
                value="while"
                onChange={handleInputChange}
              />
              <label htmlFor="while">While loop</label>
            </div>
            <div>
              <input
                type="radio"
                id="for"
                name="question2"
                value="for"
                onChange={handleInputChange}
              />
              <label htmlFor="for">For loop</label>
            </div>
          </div>

          <div className="card quiz-card">
            <h3>Question 3: Which loop iterates over every item in a collection (list)?</h3>
            <div>
              <input
                type="radio"
                id="forEach"
                name="question3"
                value="forEach"
                onChange={handleInputChange}
              />
              <label htmlFor="forEach">For each loop</label>
            </div>
            <div>
              <input
                type="radio"
                id="for"
                name="question3"
                value="for"
                onChange={handleInputChange}
              />
              <label htmlFor="for">For loop</label>
            </div>
          </div>

          <button type="submit" className="quiz-submit-button">Submit Answers</button>
        </form>

        {quizScore !== null && (
          <div className="quiz-result">
            {quizScore === 3 ? (
              <p>Great job! You got all questions correct.</p>
            ) : (
              <p>Your score: {quizScore}/3. Review the lesson and try again!</p>
            )}
            <div className="navigation-buttons">
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2')}>
                Back 
              </button>
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/arrays')}>
                Next 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loops;
