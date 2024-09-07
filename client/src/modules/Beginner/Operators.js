/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Operators.css';

const Operators = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    if (quizAnswers.question1 === 'forks > spoons') {
      score++;
    }
    if (quizAnswers.question2 === 'plants == 8') {
      score++;
    }

    if (quizAnswers.question3 === 'A symbol that performs calculations, like addition.') {
      score++;
    }
    if (quizAnswers.question4 === 'boolean') {
      score++;
    }
    if (quizAnswers.question5 === 'Make mathematical calculations.') {
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
      <h1>Lesson 3: Operators</h1>
      
      <div className="lesson-section">
        <h2>Introduction to Operators</h2>
        
          <p>
            In computing, operators are symbols that represent different operations, such as arithmetic calculations or logical comparisons. They are essential tools that allow us to manipulate and process data, transforming it into meaningful results.
          </p>
          <p>
            In this lesson, we'll explore three primary categories of operators: arithmetic operators, comparison operators, and logical operators. Understanding these will empower you to write more dynamic and functional code.
          </p>
       
      </div>

      <div className="lesson-section">
        <h2>Using Operators to Make Calculations</h2>
        <div className="card">
          <p>
            Arithmetic operators are used to perform basic mathematical operations such as addition, subtraction, multiplication, and division. These operators allow you to compute results from numerical data efficiently.
          </p> 
          <p>Examples of Arithmetic Operators:</p>
          <div className="code-card">
        
            <pre><code>

// eslint-disable-next-line react/jsx-no-comment-textnodes

// Addition: 
let sum = 2 + 3;  // Result: 5

// Subtraction:
let difference = 10 - 3;  // Result: 7

// Multiplication:
let product = 5 * 2;  // Result: 10

// Division:
let quotient = 15 / 3;  // Result: 5
            </code></pre>
          </div>
          <p>
            Let's consider a practical example. Imagine you're making a fruit salad that requires six apples, but apples are sold in bags of five. You need to determine how many apples you'll have left over if you buy two bags:
          </p>
          <div className="code-card">
            <pre><code>
let applesInBag = 5;
let totalApples = applesInBag * 2;  // Total apples: 10
let leftoverApples = totalApples - 6;  // Apples left after using 6: 4
            </code></pre>
          </div>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Using Operators to Make Comparisons</h2>
        <div className="card">
          <p>
            Comparison operators allow you to compare two values to determine their relationship. These operators are crucial when you need to make decisions in your program based on conditions.
          </p>
          <p>Examples of Comparison Operators:</p>
          <div className="code-card">
            <pre><code>
// Less than:
let isLessThan = 2 &lt; 6;  // Result: true

// Greater than:
let isGreaterThan = 14 &gt; 5;  // Result: true

// Equal to:
let isEqual = 3 == 3;  // Result: true

// Not equal to:
let isNotEqual = 3 != 4;  // Result: true
            </code></pre>
          </div>
          <p>
            For instance, if you have 5 bananas and 3 oranges, and you want to check if you have more bananas than oranges, you could write:
          </p>
          <div className="code-card">
            <pre><code>
let bananas = 5;
let oranges = 3;
let hasMoreBananas = bananas &gt; oranges;  // Result: true
            </code></pre>
          </div>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Using Operators to Get Different Outcomes</h2>
        <div className="card">
          <p>
            Logical operators (also known as Boolean operators) allow you to evaluate multiple conditions or expressions. They are essential for building complex decision-making processes in your code.
          </p>
          <p>Examples of Logical Operators:</p>
          <div className="code-card">
            <pre><code>
// AND (&&):
let andCondition = (4 &gt; 1) &amp;&amp; (2 &lt; 7);  // Result: true

// OR (||):
let orCondition = (8 &gt; 6) || (3 &lt; 6);  // Result: true

// NOT (!):
let notCondition = !(1 &lt; 3);  // Result: false
            </code></pre>
          </div>
          <p>
            Logical operators are powerful when you need to evaluate multiple conditions simultaneously. For example, you might check if a person is eligible for a discount if they are a student or a senior citizen:
          </p>
          <div className="code-card">
            <pre><code>
let isStudent = true;
let isSenior = false;
let getsDiscount = isStudent || isSenior;  // Result: true
            </code></pre>
          </div>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Video: Understanding Operators</h2>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/PaHpU7-BNaU" 
            title="Operators in Programming" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit} className="quiz-container">
          <div className="card quiz-card">
            <p>Question 1: You have 5 forks and 3 spoons. Fill in the blank to create the correct comparison expression.</p>
            <div>
              <input
                type="radio"
                id="forksGreater"
                name="question1"
                value="forks > spoons"
                onChange={handleInputChange}
              />

              <label htmlFor="forksGreater">forks {'>'} spoons</label>
            </div>
            <div>
              <input
                type="radio"
                id="spoonsGreater"
                name="question1"
                value="spoons > forks"
                onChange={handleInputChange}
              />
              <label htmlFor="spoonsGreater">spoons {'>'}forks</label>
            </div>
          </div>

          <div className="card quiz-card">
            <p>Question 2: You have eight plants: plants = 8. Which of these statements evaluates to true?</p>
            <div>
              <input
                type="radio"
                id="plantsEqual"
                name="question2"
                value="plants == 8"
                onChange={handleInputChange}
              />
              <label htmlFor="plantsEqual">plants == 8</label>
            </div>
            <div>
              <input
                type="radio"
                id="plantsNotEqual"
                name="question2"
                value="plants != 8"
                onChange={handleInputChange}
              />
              <label htmlFor="plantsNotEqual">plants != 8</label>
            </div>
          </div>

          <div className="card quiz-card">
            <p>Question 3: What is an operator?</p>
            <div>
              <input
                type="radio"
                id="operatorCalc"
                name="question3"
                value="A symbol that performs calculations, like addition."
                onChange={handleInputChange}
              />
              <label htmlFor="operatorCalc">A symbol that performs calculations, like addition.</label>
            </div>
            <div>
              <input
                type="radio"
                id="operatorTrue"
                name="question3"
                value="A statement that evaluates to true."
                onChange={handleInputChange}
              />
              <label htmlFor="operatorTrue">A statement that evaluates to true.</label>
            </div>
          </div>

          <div className="card quiz-card">
            <p>Question 4: Logical operators and comparison operators evaluate to which data type?</p>
            <div>
              <input
                type="radio"
                id="booleanType"
                name="question4"
                value="boolean"
                onChange={handleInputChange}
              />
              <label htmlFor="booleanType">boolean</label>
            </div>
            <div>
              <input
                type="radio"
                id="stringType"
                name="question4"
                value="string"
                onChange={handleInputChange}
              />
              <label htmlFor="stringType">string</label>
            </div>
          </div>

          <div className="card quiz-card">
            <p>Question 5: Arithmetic operators are used to:</p>
            <div>
              <input
                type="radio"
                id="arithCalc"
                name="question5"
                value="Make mathematical calculations."
                onChange={handleInputChange}
              />
              <label htmlFor="arithCalc">Make mathematical calculations.</label>
            </div>
            <div>
              <input
                type="radio"
                id="compareValues"
                name="question5"
                value="Compare different amounts."
                onChange={handleInputChange}
              />
              <label htmlFor="compareValues">Compare different amounts.</label>
            </div>
          </div>

          <button type="submit" className="quiz-submit-button">Submit Answers</button>
        </form>

        {quizScore !== null && (
          <div className="quiz-result">
            <h3>Your Score: {quizScore}/5</h3>
            {quizScore === 5 ? (
              <div>
                <p>Excellent! You have a strong understanding of operators.</p>
                <div className="navigation-buttons">
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/variables')}>
                    Back
                  </button>
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/summary')}>
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p>Good effort! Review the content and try again to improve your score.</p>
                <div className="navigation-buttons">
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/variables')}>
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Operators;