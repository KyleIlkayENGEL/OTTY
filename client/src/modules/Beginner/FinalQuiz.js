import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FinalQuiz = () => {
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

    if (quizAnswers.question1 === 'Instructions a computer follows') {
      score++;
    }
    if (quizAnswers.question2 === 'It processes data and generates an output') {
      score++;
    }
    if (quizAnswers.question3 === 'case-sensitive') {
      score++;
    }
    if (quizAnswers.question4 === 'class names') {
      score++;
    }
    if (quizAnswers.question5 === 'int, float, and string') {
      score++;
    }
    if (quizAnswers.question6 === 'char') {
      score++;
    }
    if (quizAnswers.question7 === 'String') {
      score++;
    }
    if (quizAnswers.question8 === 'True') {
      score++;
    }
    if (quizAnswers.question9 === 'boolean') {
      score++;
    }
    if (quizAnswers.question10 === 'Reassigning a new value') {
      score++;
    }
    if (quizAnswers.question11 === 'Store data that can be used later') {
      score++;
    }
    if (quizAnswers.question12 === 'Variable reassignment') {
      score++;
    }
    if (quizAnswers.question13 === 'Performing basic math operations') {
      score++;
    }
    if (quizAnswers.question14 === 'It compares two values') {
      score++;
    }
    if (quizAnswers.question15 === 'True or False') {
      score++;
    }
    if (quizAnswers.question16 === 'and, or, not') {
      score++;
    }
    if (quizAnswers.question17 === '5 + 3 * 2') {
      score++;
    }
    if (quizAnswers.question18 === 'Arithmetic operators') {
      score++;
    }
    if (quizAnswers.question19 === 'Logical operators') {
      score++;
    }
    if (quizAnswers.question20 === 'Assignment operator (=)') {
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
      <h1>Final Quiz: Test Your Knowledge</h1>
      
      <form onSubmit={handleQuizSubmit} className="quiz-container">
        {/* Overview Section */}
        <div className="card quiz-card">
          <p>Question 1: What is a computer program?</p>
          <div>
            <input
              type="radio"
              name="question1"
              value="Instructions a computer follows"
              onChange={handleInputChange}
            />
            <label>Instructions a computer follows</label>
          </div>
          <div>
            <input
              type="radio"
              name="question1"
              value="A random series of numbers"
              onChange={handleInputChange}
            />
            <label>A random series of numbers</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 2: What does a computer program do?</p>
          <div>
            <input
              type="radio"
              name="question2"
              value="It processes data and generates an output"
              onChange={handleInputChange}
            />
            <label>It processes data and generates an output</label>
          </div>
          <div>
            <input
              type="radio"
              name="question2"
              value="It controls hardware"
              onChange={handleInputChange}
            />
            <label>It controls hardware</label>
          </div>
        </div>

        {/* Basic Syntax Section */}
        <div className="card quiz-card">
          <p>Question 3: Is Python a case-sensitive programming language?</p>
          <div>
            <input
              type="radio"
              name="question3"
              value="case-sensitive"
              onChange={handleInputChange}
            />
            <label>Yes, it is case-sensitive</label>
          </div>
          <div>
            <input
              type="radio"
              name="question3"
              value="not case-sensitive"
              onChange={handleInputChange}
            />
            <label>No, it is not case-sensitive</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 4: In Java, what should match the program filename?</p>
          <div>
            <input
              type="radio"
              name="question4"
              value="class names"
              onChange={handleInputChange}
            />
            <label>Class names</label>
          </div>
          <div>
            <input
              type="radio"
              name="question4"
              value="function names"
              onChange={handleInputChange}
            />
            <label>Function names</label>
          </div>
        </div>

        {/* Data Types Section */}
        <div className="card quiz-card">
          <p>Question 5: What are common data types in programming?</p>
          <div>
            <input
              type="radio"
              name="question5"
              value="int, float, and string"
              onChange={handleInputChange}
            />
            <label>int, float, and string</label>
          </div>
          <div>
            <input
              type="radio"
              name="question5"
              value="image, video, and audio"
              onChange={handleInputChange}
            />
            <label>image, video, and audio</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 6: Which data type is used for individual characters?</p>
          <div>
            <input
              type="radio"
              name="question6"
              value="char"
              onChange={handleInputChange}
            />
            <label>char</label>
          </div>
          <div>
            <input
              type="radio"
              name="question6"
              value="string"
              onChange={handleInputChange}
            />
            <label>string</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 7: What data type is typically used to store text?</p>
          <div>
            <input
              type="radio"
              name="question7"
              value="String"
              onChange={handleInputChange}
            />
            <label>String</label>
          </div>
          <div>
            <input
              type="radio"
              name="question7"
              value="int"
              onChange={handleInputChange}
            />
            <label>int</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 8: Is the statement 'True' a valid boolean value?</p>
          <div>
            <input
              type="radio"
              name="question8"
              value="True"
              onChange={handleInputChange}
            />
            <label>True</label>
          </div>
          <div>
            <input
              type="radio"
              name="question8"
              value="False"
              onChange={handleInputChange}
            />
            <label>False</label>
          </div>
        </div>

        {/* Variables Section */}
        <div className="card quiz-card">
          <p>Question 9: What data type is used to store true or false values?</p>
          <div>
            <input
              type="radio"
              name="question9"
              value="boolean"
              onChange={handleInputChange}
            />
            <label>boolean</label>
          </div>
          <div>
            <input
              type="radio"
              name="question9"
              value="string"
              onChange={handleInputChange}
            />
            <label>string</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 10: How do you change the value of a variable?</p>
          <div>
            <input
              type="radio"
              name="question10"
              value="Reassigning a new value"
              onChange={handleInputChange}
            />
            <label>Reassigning a new value</label>
          </div>
          <div>
            <input
              type="radio"
              name="question10"
              value="Deleting the variable"
              onChange={handleInputChange}
            />
            <label>Deleting the variable</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 11: What is the purpose of a variable?</p>
          <div>
            <input
              type="radio"
              name="question11"
              value="Store data that can be used later"
              onChange={handleInputChange}
            />
            <label>Store data that can be used later</label>
          </div>
          <div>
            <input
              type="radio"
              name="question11"
              value="Create functions"
              onChange={handleInputChange}
            />
            <label>Create functions</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 12: What happens when you assign a new value to a variable?</p>
          <div>
            <input
              type="radio"
              name="question12"
              value="Variable reassignment"
              onChange={handleInputChange}
            />
            <label>Variable reassignment</label>
          </div>
          <div>
            <input
              type="radio"
              name="question12"
              value="Variable deletion"
              onChange={handleInputChange}
            />
            <label>Variable deletion</label>
          </div>
        </div>

        {/* Operators Section */}
        <div className="card quiz-card">
          <p>Question 13: What is the role of arithmetic operators?</p>
          <div>
            <input
              type="radio"
              name="question13"
              value="Performing basic math operations"
              onChange={handleInputChange}
            />
            <label>Performing basic math operations</label>
          </div>
          <div>
            <input
              type="radio"
              name="question13"
              value="Handling text data"
              onChange={handleInputChange}
            />
            <label>Handling text data</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 14: What does a comparison operator do?</p>
          <div>
            <input
              type="radio"
              name="question14"
              value="It compares two values"
              onChange={handleInputChange}
            />
            <label>It compares two values</label>
          </div>
          <div>
            <input
              type="radio"
              name="question14"
              value="It stores data"
              onChange={handleInputChange}
            />
            <label>It stores data</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 15: What do logical operators return?</p>
          <div>
            <input
              type="radio"
              name="question15"
              value="True or False"
              onChange={handleInputChange}
            />
            <label>True or False</label>
          </div>
          <div>
            <input
              type="radio"
              name="question15"
              value="Numbers"
              onChange={handleInputChange}
            />
            <label>Numbers</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 16: Which of the following is a logical operator?</p>
          <div>
            <input
              type="radio"
              name="question16"
              value="and, or, not"
              onChange={handleInputChange}
            />
            <label>and, or, not</label>
          </div>
          <div>
            <input
              type="radio"
              name="question16"
              value="+, -, /"
              onChange={handleInputChange}
            />
            <label>+, -, /</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 17: Which of the following expressions will be calculated first?</p>
          <div>
            <input
              type="radio"
              name="question17"
              value="5 + 3 * 2"
              onChange={handleInputChange}
            />
            <label>5 + 3 * 2</label>
          </div>
          <div>
            <input
              type="radio"
              name="question17"
              value="(5 + 3) * 2"
              onChange={handleInputChange}
            />
            <label>(5 + 3) * 2</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 18: What operators are used to perform mathematical calculations?</p>
          <div>
            <input
              type="radio"
              name="question18"
              value="Arithmetic operators"
              onChange={handleInputChange}
            />
            <label>Arithmetic operators</label>
          </div>
          <div>
            <input
              type="radio"
              name="question18"
              value="Comparison operators"
              onChange={handleInputChange}
            />
            <label>Comparison operators</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 19: What operators help evaluate multiple conditions?</p>
          <div>
            <input
              type="radio"
              name="question19"
              value="Logical operators"
              onChange={handleInputChange}
            />
            <label>Logical operators</label>
          </div>
          <div>
            <input
              type="radio"
              name="question19"
              value="Arithmetic operators"
              onChange={handleInputChange}
            />
            <label>Arithmetic operators</label>
          </div>
        </div>

        <div className="card quiz-card">
          <p>Question 20: What operator is used to assign values to variables?</p>
          <div>
            <input
              type="radio"
              name="question20"
              value="Assignment operator (=)"
              onChange={handleInputChange}
            />
            <label>Assignment operator (=)</label>
          </div>
          <div>
            <input
              type="radio"
              name="question20"
              value="Comparison operator (==)"
              onChange={handleInputChange}
            />
            <label>Comparison operator (==)</label>
          </div>
        </div>

        <button type="submit" className="quiz-submit-button">Submit Answers</button>
      </form>

      {quizScore !== null && (
        <div className="quiz-result">
          <h3>Your Score: {quizScore}/20</h3>
          {quizScore === 20 ? (
            <p>Excellent! You have a solid understanding of programming basics.</p>
          ) : (
            <p>Good effort! Review the content and try again to improve your score.</p>
          )}
          <div className="navigation-buttons">
            <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/summary')}>
              Back to Summary
            </button>
            <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2')}>
              Next to Lesson 3
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalQuiz;
