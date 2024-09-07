import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Variables.css';

const Variables = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    if (quizAnswers.question1 === 'let myVariable = 10;') {
      score++;
    }
    if (quizAnswers.question2 === 'Variables can store different types of data, including numbers, strings, and booleans.') {
      score++;
    }
    if (quizAnswers.question3 === 'Hardcoding') {
      score++;
    }
    if (quizAnswers.question4 === 'Store a value') {
      score++;
    }
    if (quizAnswers.question5 === 'shirts = 6') {
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

  // State to manage the flip state of each flashcard
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="lesson-page-container">
      <h1>Lesson 3: Variables</h1>
      
      <div className="lesson-section">
        <h2>Introduction to Variables</h2>
        <div className="lesson-section">
          <p>
            In programming, variables are used to store and manipulate data. They are named memory locations that hold values and can change throughout the execution of a program. Variables allow us to reuse and update values efficiently, making our code more flexible and easier to manage.
          </p>
          <p>
            Variables are essential in programming because they enable the storage, retrieval, and manipulation of data in a program. For instance, if you wanted to store a number, a string, or a complex data structure, you would use a variable to do so.
          </p>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Reusing Values in Variables</h2>
        <div className="card">
          <p>
            One of the primary reasons we use variables is to reuse values in different parts of our code. Instead of retyping a value multiple times, you can assign it to a variable and use the variable wherever needed.
          </p>
          <pre><code>
            my_number = 847595593392818109495
            my_number * 2
            my_number / 4
          </code></pre>
          <p>
            This code snippet demonstrates how a variable named my_number stores a large number that can be reused throughout the program.
          </p>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Changing the Value of a Variable</h2>
        <div className="card">
          <p>
            Variables offer flexibility because you can change their values at any point in the program. This feature makes it easy to modify data without having to rewrite large portions of code.
          </p>
          <pre><code>
            my_number = 1
            my_number * 2
            
            my_number = 3
            my_number / 4
          </code></pre>
          <p>
            In this example, the value of my_number changes during the program's execution, showcasing how variables can be dynamically updated.
          </p>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Video: Understanding Variables</h2>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/ghCbURMWBD8" 
            title="Understanding Variables" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-container">
          <div className="card faq-card">
            <h3>What is a variable in programming?</h3>
            <p>
              A variable in programming is a named memory location that can store data of a specific type and its value can change during the program execution.
            </p>
          </div>
          <div className="card faq-card">
            <h3>Why are variables important in programming?</h3>
            <p>
              Variables are important in programming for storing and manipulating data, improving code readability and maintainability, allowing dynamic behavior, and reusing code.
            </p>
          </div>
          <div className="card faq-card">
            <h3>What type of data can be stored in variables?</h3>
            <p>
              Variables can store different data types like integers, floating-point numbers, characters, strings, and more complex data structures.
            </p>
          </div>
          <div className="card faq-card">
            <h3>How do variables help in code readability and maintainability?</h3>
            <p>
              Variables help in code readability and maintainability by assigning meaningful names to the data used in the program, making it easier to understand, maintain, and update the code.
            </p>
          </div>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Flashcards</h2>
        <div className="flashcard-container">
          <div className={`card flashcard ${flipped[0] ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
            <div className="front">
              <h3>What is a variable?</h3>
            </div>
            <div className="back">
              <p>A variable is a named memory location used to store data.</p>
            </div>
          </div>
          <div className={`card flashcard ${flipped[1] ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
            <div className="front">
              <h3>What types of data can be stored in variables?</h3>
            </div>
            <div className="back">
              <p>Variables can store integers, floating-point numbers, characters, strings, and more.</p>
            </div>
          </div>
          <div className={`card flashcard ${flipped[2] ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
            <div className="front">
              <h3>Why are variables crucial in programming?</h3>
            </div>
            <div className="back">
              <p>Variables allow for storing, manipulating, and retrieving data, enhancing code readability and maintainability.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit} className="quiz-container">
          {/* Updated Question 1 */}
          <div className="card quiz-card">
            <p>Question 1: What is the correct way to declare a variable in JavaScript?</p>
            <div>
              <input
                type="radio"
                id="letVariable"
                name="question1"
                value="let myVariable = 10;"
                onChange={handleInputChange}
              />
              <label htmlFor="letVariable">let myVariable = 10;</label>
            </div>
            <div>
              <input
                type="radio"
                id="myVariableColonEqual"
                name="question1"
                value="myVariable := 10;"
                onChange={handleInputChange}
              />
              <label htmlFor="myVariableColonEqual">myVariable := 10;</label>
            </div>
            <div>
              <input
                type="radio"
                id="intVariable"
                name="question1"
                value="int myVariable = 10;"
                onChange={handleInputChange}
              />
              <label htmlFor="intVariable">int myVariable = 10;</label>
            </div>
          </div>

          {/* Updated Question 2 */}
          <div className="card quiz-card">
            <p>Question 2: What is the purpose of variables in programming?</p>
            <div>
              <input
                type="radio"
                id="storeDifferentData"
                name="question2"
                value="Variables can store different types of data, including numbers, strings, and booleans."
                onChange={handleInputChange}
              />
              <label htmlFor="storeDifferentData">Variables can store different types of data, including numbers, strings, and booleans.</label>
            </div>
            <div>
              <input
                type="radio"
                id="variablesOnlyNumbers"
                name="question2"
                value="Variables can only store numbers."
                onChange={handleInputChange}
              />
              <label htmlFor="variablesOnlyNumbers">Variables can only store numbers.</label>
            </div>
          </div>

          {/* Remaining questions unchanged */}
          <div className="card quiz-card">
            <p>Question 3: When we use a value without assigning it to a variable, that's known as:</p>
            <div>
              <input
                type="radio"
                id="hardcoding"
                name="question3"
                value="Hardcoding"
                onChange={handleInputChange}
              />
              <label htmlFor="hardcoding">Hardcoding</label>
            </div>
            <div>
              <input
                type="radio"
                id="digitization"
                name="question3"
                value="Digitization"
                onChange={handleInputChange}
              />
              <label htmlFor="digitization">Digitization</label>
            </div>
          </div>

          <div className="card quiz-card">
            <p>Question 4: The purpose of a variable is to:</p>
            <div>
              <input
                type="radio"
                id="storeValue"
                name="question4"
                value="Store a value"
                onChange={handleInputChange}
              />
              <label htmlFor="storeValue">Store a value</label>
            </div>
            <div>
              <input
                type="radio"
                id="keepPrivate"
                name="question4"
                value="Keep your data private"
                onChange={handleInputChange}
              />
              <label htmlFor="keepPrivate">Keep your data private</label>
            </div>
          </div>

          <div className="card quiz-card">
            <p>Question 5: You're taking inventory at a clothing store. You have six shirts. Save the value of the number of shirts to the variable <em>shirts</em>.</p>
            <div>
              <input
                type="radio"
                id="shirtsSix"
                name="question5"
                value="shirts = 6"
                onChange={handleInputChange}
              />
              <label htmlFor="shirtsSix">shirts = 6</label>
            </div>
            <div>
              <input
                type="radio"
                id="shirtsFive"
                name="question5"
                value="shirts = 5"
                onChange={handleInputChange}
              />
              <label htmlFor="shirtsFive">shirts = 5</label>
            </div>
          </div>

          <button type="submit" className="quiz-submit-button">Submit Answers</button>
        </form>

        {quizScore !== null && (
          <div className="quiz-result">
            {quizScore === 5 ? (
              <div>
                <h3 style={{ color: '#2F855A' }}>Excellent! You have a solid understanding of variables.</h3>
                <div className="navigation-buttons">
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/data-types')}>
                    Back
                  </button>
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/operators')}>
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ color: '#E53E3E' }}>Your Score: {quizScore}/5</h3>
                <p>Good try! Review the content and try again to improve your score.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Variables;