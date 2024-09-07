import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Arrays = () => {
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

    if (quizAnswers.question1 === 'index') {
      score++;
    }
    if (quizAnswers.question2 === 'push') {
      score++;
    }
    if (quizAnswers.question3 === 'map') {
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
      <h1>Introduction to Arrays</h1>

      <div className="lesson-section">
        <h2>Video: Arrays in JavaScript</h2>
        <p>Watch the following video to understand the basics of arrays:</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/eXFItikqw8c" 
            title="JavaScript Arrays for Beginners" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>What is an Array?</h2>
        <p>An array is a special variable, which can hold more than one value at a time. It is essentially a list of items, stored in a single variable, that can be accessed using their index (position). Arrays make it easy to group related data together, allowing you to handle large sets of data efficiently.</p>

        <p>For example, you could store a list of grocery items like this:</p>
        <div className="code-card">
          <pre>
{`const shoppingList = ["bread", "milk", "cheese", "hummus", "noodles"];`}
          </pre>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Creating an Array</h2>
        <p>You can create an array using square brackets and separating the items with commas. Arrays can store any type of data including numbers, strings, and even other arrays:</p>
        <div className="code-card">
          <pre>
{`const numbers = [1, 2, 3, 4, 5];
const mixed = ["apple", 2, true, [1, 2]];`}
          </pre>
        </div>
        <p>Arrays are very flexible, and you can mix different data types within a single array.</p>
      </div>

      <div className="lesson-section">
        <h2>Finding the Length of an Array</h2>
        <p>JavaScript provides a built-in property called <code>length</code> that returns the number of items in an array. For example:</p>
        <div className="code-card">
          <pre>
{`const shoppingList = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shoppingList.length);  // 5`}
          </pre>
        </div>
        <p>This is especially useful when you need to know how many items are in an array or when looping through an array.</p>
      </div>

      <div className="lesson-section">
        <h2>Accessing and Modifying Array Items</h2>
        <p>Each item in an array is assigned an index number starting from 0. You can access and modify items in an array using their index:</p>
        <div className="code-card">
          <pre>
{`const shoppingList = ["bread", "milk", "hummus", "noodles"];
console.log(shoppingList[0]);  // "bread"

shoppingList[0] = "butter";
console.log(shoppingList);  // ["butter", "milk", "hummus", "noodles"]`}
          </pre>
        </div>
        <p>Remember that array indexes start at 0, so the first item in the array has an index of 0, the second item has an index of 1, and so on.</p>
      </div>

      <div className="lesson-section">
        <h2>Adding Items to an Array</h2>
        <p>To add items to an array, you can use the <code>push()</code> method, which adds an item to the end of an array, or <code>unshift()</code> to add items to the beginning:</p>
        <div className="code-card">
          <pre>
{`const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff"); // Adds to the end
console.log(cities);  // ["Manchester", "Liverpool", "London"]

cities.unshift("Edinburgh");  // Adds to the beginning
console.log(cities);  // ["Edinburgh", "Manchester", "Liverpool", "London"]`}
          </pre>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Removing Items from an Array</h2>
        <p>To remove items, you can use the <code>pop()</code> method to remove the last item, or <code>shift()</code> to remove the first item:</p>
        <div className="code-card">
          <pre>
{`const cities = ["Manchester", "Liverpool", "Cardiff"];
cities.pop();  // Removes "Cardiff"
console.log(cities);  // ["Manchester", "Liverpool"]

cities.shift();  // Removes "Manchester"
console.log(cities);  // ["Liverpool"]`}
          </pre>
        </div>
        <p>Both methods modify the original array by removing the specified item.</p>
      </div>

      <div className="lesson-section">
        <h2>Mapping and Filtering Arrays</h2>
        <p>Sometimes, you want to create a new array with modified or filtered items from the original array. The <code>map()</code> and <code>filter()</code> methods are commonly used for this purpose:</p>

        <h3>Using <code>map()</code> to modify array items:</h3>
        <div className="code-card">
          <pre>
{`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled);  // [2, 4, 6, 8]`}
          </pre>
        </div>

        <h3>Using <code>filter()</code> to select specific items:</h3>
        <div className="code-card">
          <pre>
{`const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longNames = cities.filter(city => city.length > 7);
console.log(longNames);  // ["Liverpool", "Edinburgh"]`}
          </pre>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Review</h2>
        <ul>
          <li>An array is a collection of data stored in a single variable.</li>
          <li>You can create arrays using square brackets and separate values with commas.</li>
          <li>Array items are accessed and modified using their index.</li>
          <li>Use <code>push()</code> and <code>unshift()</code> to add items, and <code>pop()</code> and <code>shift()</code> to remove them.</li>
          <li>The <code>map()</code> and <code>filter()</code> methods allow you to manipulate or filter arrays.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit} className="quiz-container">
          <div className="card quiz-card">
            <h3>Question 1: What do you use to access an item in an array?</h3>
            <div>
              <input
                type="radio"
                id="index"
                name="question1"
                value="index"
                onChange={handleInputChange}
              />
              <label htmlFor="index">Index</label>
            </div>
            <div>
              <input
                type="radio"
                id="value"
                name="question1"
                value="value"
                onChange={handleInputChange}
              />
              <label htmlFor="value">Value</label>
            </div>
          </div>

          <div className="card quiz-card">
            <h3>Question 2: What method adds an item to the end of an array?</h3>
            <div>
              <input
                type="radio"
                id="push"
                name="question2"
                value="push"
                onChange={handleInputChange}
              />
              <label htmlFor="push">Push</label>
            </div>
            <div>
              <input
                type="radio"
                id="pop"
                name="question2"
                value="pop"
                onChange={handleInputChange}
              />
              <label htmlFor="pop">Pop</label>
            </div>
          </div>

          <div className="card quiz-card">
            <h3>Question 3: What method is used to apply a function to each item in an array?</h3>
            <div>
              <input
                type="radio"
                id="map"
                name="question3"
                value="map"
                onChange={handleInputChange}
              />
              <label htmlFor="map">Map</label>
            </div>
            <div>
              <input
                type="radio"
                id="forEach"
                name="question3"
                value="forEach"
                onChange={handleInputChange}
              />
              <label htmlFor="forEach">For Each</label>
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
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/loops')}>
                Back 
              </button>
              <button className="nav-button" onClick={() => navigate('/modules/beginner/basic2/functions')}>
                Next 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arrays;
