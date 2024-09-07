import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Functions = () => {
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

    if (quizAnswers.question1 === 'definition') {
      score++;
    }
    if (quizAnswers.question2 === 'parameters') {
      score++;
    }
    if (quizAnswers.question3 === 'return') {
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
      <h1>Introduction to Functions</h1>

      <div className="lesson-section">
        <h2>Video: Functions in JavaScript</h2>
        <p>Watch this video to get a basic understanding of functions in JavaScript:</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/l26oaHV7D40" 
            title="Functions in JavaScript for Beginners" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>What is a Function?</h2>
        <p>A function is a reusable block of code that performs a specific task. It allows you to break down complex programs into smaller, manageable pieces. You define a function once and then use (or "call") it wherever and whenever needed in your code.</p>
        <p>Functions are fundamental to any programming language as they help keep your code organized, efficient, and reusable.</p>
      </div>

      <div className="lesson-section">
        <h2>Function Definition</h2>
        <p>A function is defined using the <code>function</code> keyword in JavaScript. The syntax looks like this:</p>
        <div className="code-card">
          <pre>
{`function greet(name) {
  console.log("Hello, " + name + "!");
}`}
          </pre>
        </div>
        <p>In this example, we've defined a function called <code>greet</code> that takes a <code>name</code> parameter and prints a greeting message to the console.</p>
      </div>

      <div className="lesson-section">
        <h2>Function Invocation</h2>
        <p>To execute a function, you need to "call" it by using its name followed by parentheses, and providing any required arguments. Here’s how you call the <code>greet</code> function:</p>
        <div className="code-card">
          <pre>
{`greet("Alice");  // Outputs: "Hello, Alice!"`}
          </pre>
        </div>
        <p>You can call the function as many times as you like, each time with a different argument.</p>
      </div>

      <div className="lesson-section">
        <h2>Function Parameters</h2>
        <p>Parameters are the input values that a function can accept to perform its task. In our previous example, <code>name</code> is a parameter. When you call the function, you provide an argument that gets assigned to the parameter.</p>
        <p>Here’s an example with two parameters:</p>
        <div className="code-card">
          <pre>
{`function add(a, b) {
  console.log(a + b);
}

add(5, 3);  // Outputs: 8`}
          </pre>
        </div>
        <p>In this case, <code>a</code> and <code>b</code> are the parameters, and when we call <code>add(5, 3)</code>, we pass the values 5 and 3 as arguments.</p>
      </div>

      <div className="lesson-section">
        <h2>Return Values</h2>
        <p>Sometimes, you want a function to return a value so that you can use it later in your code. You can achieve this using the <code>return</code> statement.</p>
        <p>Let’s modify the previous example so the function returns the result instead of printing it:</p>
        <div className="code-card">
          <pre>
{`function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result);  // Outputs: 8`}
          </pre>
        </div>
        <p>Here, the function <code>add</code> returns the sum of <code>a</code> and <code>b</code>, and we store the result in a variable called <code>result</code>.</p>
      </div>

      <div className="lesson-section">
        <h2>Practical Example: Calculating Area</h2>
        <p>Let’s put everything together with a practical example. In this example, we'll calculate the area of a rectangle using a function:</p>
        <div className="code-card">
          <pre>
{`function calculateArea(length, width) {
  return length * width;
}

const area = calculateArea(10, 5);
console.log("The area of the rectangle is " + area + " square units.");`}
          </pre>
        </div>
        <p>In this example, the function <code>calculateArea</code> takes two parameters: <code>length</code> and <code>width</code>. It returns the product of the two, which represents the area of the rectangle.</p>
      </div>

      <div className="lesson-section">
        <h2>Review</h2>
        <ul>
          <li>A function is a block of reusable code that performs a specific task.</li>
          <li>You define a function using the <code>function</code> keyword.</li>
          <li>Functions are called by their name followed by parentheses.</li>
          <li>Parameters are used to pass information into functions.</li>
          <li>Use the <code>return</code> statement to return values from functions.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit} className="quiz-container">
          <div className="card quiz-card">
            <h3>Question 1: What is a function?</h3>
            <div>
              <input
                type="radio"
                id="definition"
                name="question1"
                value="definition"
                onChange={handleInputChange}
              />
              <label htmlFor="definition">A reusable block of code that performs a specific task</label>
            </div>
            <div>
              <input
                type="radio"
                id="variable"
                name="question1"
                value="variable"
                onChange={handleInputChange}
              />
              <label htmlFor="variable">A place to store data</label>
            </div>
          </div>

          <div className="card quiz-card">
            <h3>Question 2: What is a function parameter?</h3>
            <div>
              <input
                type="radio"
                id="parameters"
                name="question2"
                value="parameters"
                onChange={handleInputChange}
              />
              <label htmlFor="parameters">Input values a function can accept</label>
            </div>
            <div>
              <input
                type="radio"
                id="return"
                name="question2"
                value="return"
                onChange={handleInputChange}
              />
              <label htmlFor="return">The output of the function</label>
            </div>
          </div>

          <div className="card quiz-card">
            <h3>Question 3: What does the return statement do?</h3>
            <div>
              <input
                type="radio"
                id="return"
                name="question3"
                value="return"
                onChange={handleInputChange}
              />
              <label htmlFor="return">It returns a value from a function</label>
            </div>
            <div>
              <input
                type="radio"
                id="console"
                name="question3"
                value="console"
                onChange={handleInputChange}
              />
              <label htmlFor="console">It prints a value to the console</label>
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
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/arrays')}>
                Back 
              </button>
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/summary2')}>
                Next 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Functions;
