import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DataTypes.css';

const DataTypes = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: ''
  });
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    if (quizAnswers.question1 === 'Strings are a sequence of symbols') {
      score++;
    }
    if (quizAnswers.question2 === 'They identify different information used in programs') {
      score++;
    }
    if (quizAnswers.question3 === 'True') {
      score++;
    }
    if (quizAnswers.question4 === 'boolean') {
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
      <h1>Lesson: Data Types in Programming</h1>

      <div className="lesson-section">
        <h2>Understanding Data Types</h2>
        <p>
          Data types are a fundamental concept in programming, helping computers interpret the kind of data they are processing. Whether you’re storing, manipulating, or transferring data, defining the data type ensures the computer understands how to handle it. 
          Each data type dictates the specific attributes and capabilities of the data, defining the values a variable can hold, the operations you can perform on that data, and how the data is stored in the computer's memory.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Common Data Types in Programming</h2>
        <p>
          Every programming language comes with a set of built-in data types that cater to different kinds of data. Here are some common data types:
        </p>
        <ul>
          <li><strong>Integer:</strong> Represents whole numbers, such as -2, 0, 15, or 25000. Integers are typically used in counting operations, index manipulation, and whenever you need to work with whole numbers.</li>
          <li><strong>Floating-point:</strong> Represents real numbers with a fractional component, for example, 2.3, -1.7, or 3.14159. They are essential in scenarios where precision matters, such as scientific calculations, graphics, and measurements.</li>
          <li><strong>Boolean:</strong> Represents a true or false value and is primarily used for logical decisions, such as checking conditions in loops and if-else statements.</li>
          <li><strong>Character:</strong> Represents single characters, such as 'a', 'B', or '?', using character encoding schemes like ASCII or Unicode. Characters are often used in text processing or when handling individual text symbols.</li>
          <li><strong>String:</strong> Represents a sequence of characters and is commonly used for text manipulation, user input processing, and more complex data handling involving text.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Practical Examples of Data Types</h2>

        <div className="card">
          <h3>Python: Calculating the Area of a Circle</h3>
          <p>
            In Python, we can use floating-point numbers to calculate the area of a circle using the formula A = πr².
          </p>
          <pre><code>{`radius = 7.0
PI = 3.141592653589793

area = PI * radius ** 2
print("Area of the circle:", area)`}</code></pre>
          <p>
            Here, the radius and PI are stored as floating-point numbers to allow for precise calculations, resulting in an accurate area of the circle.
          </p>
        </div>

        <div className="card">
          <h3>Java: Counting Vowels in a String</h3>
          <p>
            In Java, strings and characters are used extensively in text processing. Below is an example where we count the number of vowels in a given string.
          </p>
          <pre><code>{`public class VowelCounter {
    public static void main(String[] args) {
        String input = "This is a test sentence.";
        int vowelCount = 0;
        
        for (char c : input.toCharArray()) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||
                c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                vowelCount++;
            }
        }

        System.out.println("Number of vowels: " + vowelCount);
    }
}`}</code></pre>
          <p>
            This example uses a String to store the text, and a char data type within the loop to evaluate each character.
          </p>
        </div>

        <div className="card">
          <h3>JavaScript: Boolean Logic for Decision Making</h3>
          <p>
            Booleans are crucial in making decisions within a program. The following JavaScript code determines whether a user is eligible to vote based on their age.
          </p>
          <pre><code>{`let age = 18;
let canVote = age >= 18;

if (canVote) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}`}</code></pre>
          <p>
            The canVote variable is a boolean that evaluates to either true or false, depending on the user's age.
          </p>
        </div>

        <div className="card">
          <h3>C++: Working with Integers</h3>
          <p>
            Integers are often used for counting or indexing purposes in loops. Here's an example of a simple loop in C++ that counts from 1 to 5:
          </p>
          <pre><code>{`#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << "Count: " << i << endl;
    }
    return 0;
}`}</code></pre>
          <p>
            In this example, the integer i is used to track the loop iteration, demonstrating a common use case for integers in programming.
          </p>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Real-life Applications of Data Types</h2>
        <p>
          Data types play a critical role in a wide range of real-life applications, from counting objects to processing text. Here are some examples:
        </p>
        <ul>
          <li><strong>Integers:</strong> Used in counting scenarios, such as tallying items in a shopping cart or calculating population statistics.</li>
          <li><strong>Floating-Point Numbers:</strong> Essential in scientific calculations, measuring distances, rendering 3D graphics, and more.</li>
          <li><strong>Strings and Characters:</strong> Used in text processing, such as handling user input, developing chatbots, or managing database entries.</li>
          <li><strong>Booleans:</strong> Crucial for decision-making, such as determining if a user meets the criteria for access or controlling the flow of a program.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Benefits of Using Appropriate Data Types</h2>
        <p>
          Selecting the right data types in your programs ensures accurate data representation, optimizes memory usage, and improves code efficiency and readability.
        </p>
        <ul>
          <li><strong>Accuracy:</strong> Data types define the range of values that a variable can store, ensuring that calculations and operations produce accurate results.</li>
          <li><strong>Memory Usage:</strong> Using the right data type helps optimize memory consumption, especially in applications that handle large amounts of data.</li>
          <li><strong>Code Readability:</strong> Properly chosen data types enhance the readability of your code, making it easier for others to understand and maintain.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>Video: Data Types in Programming</h2>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/5ltBWq3cUwM" 
            title="Data Types in Programming" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit} className="quiz-container">
          <div className="quiz-card">
            <p> Question 1: Why are strings called strings?</p>
            <label>
              <input
                type="radio"
                id="stringsBeads"
                name="question1"
                value="Strings are a sequence of symbols"
                onChange={handleInputChange}
              />
          Strings are a sequence of symbols, so we can think of each character being strung together, like beads in a necklace.
            </label>
            <label>
              <input
                type="radio"
                id="stringsCode"
                name="question1"
                value="Strings connect two pieces of code"
                onChange={handleInputChange}
              />
              Strings connect two pieces of code, like sheets of cloth sewn together with string.
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 2: Why are data types important?</p>
            <label>
              <input
                type="radio"
                id="dataTypesImportant"
                name="question2"
                value="They identify different information used in programs"
                onChange={handleInputChange}
              />
              They identify different information used in programs.
            </label>
            <label>
              <input
                type="radio"
                id="dataTypesLines"
                name="question2"
                value="They increase the number of lines in a program"
                onChange={handleInputChange}
              />
              They increase the number of lines in a program.
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 3: True or False: the value of myFavoriteShow is a string.</p>
            <label>
              <input
                type="radio"
                id="favoriteShowTrue"
                name="question3"
                value="True"
                onChange={handleInputChange}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                id="favoriteShowFalse"
                name="question3"
                value="False"
                onChange={handleInputChange}
              />
              False
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 4: What data type is used in this code block <code>isTouching = true</code>?</p>
            <label>
              <input
                type="radio"
                id="boolean"
                name="question4"
                value="boolean"
                onChange={handleInputChange}
              />
              Boolean
            </label>
            <label>
              <input
                type="radio"
                id="string"
                name="question4"
                value="string"
                onChange={handleInputChange}
              />
              String
            </label>
            <label>
              <input
                type="radio"
                id="number"
                name="question4"
                value="number"
                onChange={handleInputChange}
              />
              Number
            </label>
          </div>

          <button type="submit" className="quiz-submit-button">Submit Answers</button>
        </form>

        {quizScore !== null && (
          <div className="quiz-result">
            {quizScore === 4 ? (
              <div>
                <h3 style={{ color: '#2F855A' }}>Great job! You have a solid understanding of data types.</h3>
                <div className="navigation-buttons">
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/basic-syntax')}>
                    Back
                  </button>
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/variables')}>
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ color: '#E53E3E' }}>Your Score: {quizScore}/4</h3>
                <p>Keep practicing! Review the content and try the quiz again.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTypes;
