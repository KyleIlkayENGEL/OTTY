import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalQuiz2 = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: ''
  });
  
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    // Checking answers
    if (quizAnswers.question1 === 'for loop') {
      score++;
    }
    if (quizAnswers.question2 === 'while loop') {
      score++;
    }
    if (quizAnswers.question3 === 'for each loop') {
      score++;
    }
    if (quizAnswers.question4 === '0') {
      score++;
    }
    if (quizAnswers.question5 === 'push') {
      score++;
    }
    if (quizAnswers.question6 === 'pop') {
      score++;
    }
    if (quizAnswers.question7 === 'map') {
      score++;
    }
    if (quizAnswers.question8 === 'filter') {
      score++;
    }
    if (quizAnswers.question9 === 'length') {
      score++;
    }
    if (quizAnswers.question10 === 'charAt') {
      score++;
    }
    if (quizAnswers.question11 === 'function') {
      score++;
    }
    if (quizAnswers.question12 === 'parameters') {
      score++;
    }
    if (quizAnswers.question13 === 'return') {
      score++;
    }
    if (quizAnswers.question14 === 'reusable code') {
      score++;
    }
    if (quizAnswers.question15 === 'calculateArea(5, 10)') {
      score++;
    }
    if (quizAnswers.question16 === 'Yes') {
      score++;
    }
    if (quizAnswers.question17 === 'array of numbers') {
      score++;
    }
    if (quizAnswers.question18 === 'method') {
      score++;
    }
    if (quizAnswers.question19 === 'Boolean') {
      score++;
    }
    if (quizAnswers.question20 === 'input values') {
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
      <h1>Final Quiz: Loops, Arrays, and Functions</h1>
      
      <form onSubmit={handleQuizSubmit} className="quiz-container">
        {/* Loops Section */}
        <div className="card quiz-card">
          <p>Question 1: Which loop is best when you know how many times you want to repeat?</p>
          <div>
            <input
              type="radio"
              name="question1"
              value="for loop"
              onChange={handleInputChange}
            />
            <label>For loop</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="while loop"
              onChange={handleInputChange}
            />
            <label>While loop</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 2: Which loop continues as long as a condition is true?</p>
          <div>
            <input
              type="radio"
              name="question2"
              value="while loop"
              onChange={handleInputChange}
            />
            <label>While loop</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="for loop"
              onChange={handleInputChange}
            />
            <label>For loop</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 3: Which loop iterates over every item in a collection?</p>
          <div>
            <input
              type="radio"
              name="question3"
              value="for each loop"
              onChange={handleInputChange}
            />
            <label>For each loop</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="while loop"
              onChange={handleInputChange}
            />
            <label>While loop</label>
          </div>
        </div>

        {/* Arrays Section */}
        <div className="card quiz-card">
          <p>Question 4: What is the index of the first item in an array?</p>
          <div>
            <input
              type="radio"
              name="question4"
              value="0"
              onChange={handleInputChange}
            />
            <label>0</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="1"
              onChange={handleInputChange}
            />
            <label>1</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 5: Which method adds an item to the end of an array?</p>
          <div>
            <input
              type="radio"
              name="question5"
              value="push"
              onChange={handleInputChange}
            />
            <label>Push</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="pop"
              onChange={handleInputChange}
            />
            <label>Pop</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 6: Which method removes the last item from an array?</p>
          <div>
            <input
              type="radio"
              name="question6"
              value="pop"
              onChange={handleInputChange}
            />
            <label>Pop</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="shift"
              onChange={handleInputChange}
            />
            <label>Shift</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 7: Which method creates a new array by modifying every item in the original array?</p>
          <div>
            <input
              type="radio"
              name="question7"
              value="map"
              onChange={handleInputChange}
            />
            <label>Map</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="filter"
              onChange={handleInputChange}
            />
            <label>Filter</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 8: Which method creates a new array containing only the items that pass a test?</p>
          <div>
            <input
              type="radio"
              name="question8"
              value="filter"
              onChange={handleInputChange}
            />
            <label>Filter</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="map"
              onChange={handleInputChange}
            />
            <label>Map</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 9: What property is used to find the number of items in an array?</p>
          <div>
            <input
              type="radio"
              name="question9"
              value="length"
              onChange={handleInputChange}
            />
            <label>Length</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="size"
              onChange={handleInputChange}
            />
            <label>Size</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 10: Which method is used to get a character from a string?</p>
          <div>
            <input
              type="radio"
              name="question10"
              value="charAt"
              onChange={handleInputChange}
            />
            <label>charAt</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="charCode"
              onChange={handleInputChange}
            />
            <label>charCode</label>
          </div>
        </div>

        {/* Functions Section */}
        <div className="card quiz-card">
          <p>Question 11: What keyword is used to define a function in JavaScript?</p>
          <div>
            <input
              type="radio"
              name="question11"
              value="function"
              onChange={handleInputChange}
            />
            <label>Function</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="method"
              onChange={handleInputChange}
            />
            <label>Method</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 12: What are the input values of a function called?</p>
          <div>
            <input
              type="radio"
              name="question12"
              value="parameters"
              onChange={handleInputChange}
            />
            <label>Parameters</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="arguments"
              onChange={handleInputChange}
            />
            <label>Arguments</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 13: What keyword is used to output a value from a function?</p>
          <div>
            <input
              type="radio"
              name="question13"
              value="return"
              onChange={handleInputChange}
            />
            <label>Return</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value="print"
              onChange={handleInputChange}
            />
            <label>Print</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 14: What is the purpose of a function in programming?</p>
          <div>
            <input
              type="radio"
              name="question14"
              value="reusable code"
              onChange={handleInputChange}
            />
            <label>Reusable code</label>
          </div>
          <div>
            <input
              type="radio"
              name="question14"
              value="data storage"
              onChange={handleInputChange}
            />
            <label>Data storage</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 15: Which of these is an example of a function call?</p>
          <div>
            <input
              type="radio"
              name="question15"
              value="calculateArea(5, 10)"
              onChange={handleInputChange}
            />
            <label>calculateArea(5, 10)</label>
          </div>
          <div>
            <input
              type="radio"
              name="question15"
              value="calculateArea"
              onChange={handleInputChange}
            />
            <label>calculateArea</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 16: Can functions return a value?</p>
          <div>
            <input
              type="radio"
              name="question16"
              value="Yes"
              onChange={handleInputChange}
            />
            <label>Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="question16"
              value="No"
              onChange={handleInputChange}
            />
            <label>No</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 17: What is an array in JavaScript?</p>
          <div>
            <input
              type="radio"
              name="question17"
              value="array of numbers"
              onChange={handleInputChange}
            />
            <label>An array of numbers</label>
          </div>
          <div>
            <input
              type="radio"
              name="question17"
              value="a single value"
              onChange={handleInputChange}
            />
            <label>A single value</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 18: What is the term for a function that is part of an object?</p>
          <div>
            <input
              type="radio"
              name="question18"
              value="method"
              onChange={handleInputChange}
            />
            <label>Method</label>
          </div>
          <div>
            <input
              type="radio"
              name="question18"
              value="constructor"
              onChange={handleInputChange}
            />
            <label>Constructor</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 19: What is the output of a function that returns true or false?</p>
          <div>
            <input
              type="radio"
              name="question19"
              value="Boolean"
              onChange={handleInputChange}
            />
            <label>Boolean</label>
          </div>
          <div>
            <input
              type="radio"
              name="question19"
              value="Number"
              onChange={handleInputChange}
            />
            <label>Number</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 20: What are the values passed into a function called?</p>
          <div>
            <input
              type="radio"
              name="question20"
              value="input values"
              onChange={handleInputChange}
            />
            <label>Input values</label>
          </div>
          <div>
            <input
              type="radio"
              name="question20"
              value="output values"
              onChange={handleInputChange}
            />
            <label>Output values</label>
          </div>
        </div>

        <button type="submit" className="quiz-submit-button">Submit Answers</button>
      </form>

      {quizScore !== null && (
        <div className="quiz-result">
          <h3>Your Score: {quizScore}/20</h3>
          {quizScore >= 18 ? (
            <p>Congratulations! You scored {quizScore}/20. You are ready to move to the next module. Great job!</p>
          ) : (
            <p>You scored {quizScore}/20. Review the material and try again to improve your score!</p>
          )}
          <div className="navigation-buttons">
            <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/summary2')}>
              Back to Summary
            </button>
            {quizScore >= 18 ? (
              <button className="nav-button" onClick={() => navigate('/modules/intermediate')}>
                Next to Intermediate Module
              </button>
            ) : (
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2')}>
                Retake the Module
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalQuiz2;
