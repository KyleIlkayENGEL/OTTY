import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BasicSyntax.css';

const BasicSyntax = () => {
  const [quizAnswers, setQuizAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });
  const [quizScore, setQuizScore] = useState(null);
  const navigate = useNavigate();

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;

    if (quizAnswers.question1 === 'Case Sensitive') {
      score++;
    }
    if (quizAnswers.question2 === 'Semicolon (;)') {
      score++;
    }
    if (quizAnswers.question3 === 'int main()') {
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
      <h1>Lesson 2: Basic Syntax</h1>
      
      <div className="lesson-section">
        <h2>Understanding Syntax</h2>
        <p>
          Syntax refers to the rules that define the structure of a language. In computer programming, syntax means the rules that control the structure of the symbols, punctuation, and words of a programming language.
        </p>
        <p>
          Without syntax, the meaning or semantics of a language is nearly impossible to understand. For example, a series of English words such as — "subject a need and does sentence a verb" — has little meaning without syntax.
        </p>
      </div>

      <div className="lesson-section">
        <h2>What Is Basic Syntax?</h2>
        <p>
          Basic syntax represents the fundamental rules of a programming language. Without these rules, it is impossible to write functioning code. Every language has its own set of rules that make up its basic syntax. Naming conventions are a primary component of basic syntax conventions and vary by language.
        </p>
        <ul>
          <li><strong>Case Sensitive:</strong> Java, C++, and Python are examples of languages that are case-sensitive. Identifiers such as "world" and "World" have different meanings in these languages.</li>
          <li><strong>Class Names:</strong> Java requires the first letter of each word in class names be uppercase. For example, "class FirstJavaClass".</li>
          <li><strong>Program Filenames:</strong> The name of a Java program file must match the class name with the extension “*.java” added to the name.</li>
        </ul>
      </div>

      <div className="lesson-section">
        <h2>C Syntax</h2>
        <pre><code>{`#include <stdio.h>

int main() {

  printf("My first line of code");

}`}</code></pre>
        <p>
          All C programs must begin with "main()" followed by a left curly bracket ("{"). This convention indicates the start of the program. A right curly bracket ("}") indicates the end.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Adding Comments</h2>
        <pre><code>{`#include <stdio.h>

int main() {

  /* print function to display My first line of code just printed! */

  printf("My first line of code");

  printf("just printed!");

}`}</code></pre>
        <p>
          Comments are used to describe the purpose of the code. In C, a comment would be enclosed between "/* comment */" and appear after the "main()" function.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Video: Syntax in Programming</h2>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/YFB0lE7nXZE" 
            title="Syntax in Programming" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Quiz: Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit}>
          <div className="quiz-card">
            <p>Question 1: Which of the following describes a characteristic of Java?</p>
            <label>
              <input
                type="radio"
                id="caseSensitive"
                name="question1"
                value="Case Sensitive"
                onChange={handleInputChange}
              />
              Case Sensitive
            </label>
            <label>
              <input
                type="radio"
                id="caseInsensitive"
                name="question1"
                value="Case Insensitive"
                onChange={handleInputChange}
              />
              Case Insensitive
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 2: What symbol is used to end a statement in C?</p>
            <label>
              <input
                type="radio"
                id="semicolon"
                name="question2"
                value="Semicolon (;)"
                onChange={handleInputChange}
              />
              Semicolon (;)
            </label>
            <label>
              <input
                type="radio"
                id="colon"
                name="question2"
                value="Colon (:)"
                onChange={handleInputChange}
              />
              Colon (:)
            </label>
          </div>

          <div className="quiz-card">
            <p>Question 3: Which of the following marks the start of a C program?</p>
            <label>
              <input
                type="radio"
                id="mainFunction"
                name="question3"
                value="int main()"
                onChange={handleInputChange}
              />
              int main()
            </label>
            <label>
              <input
                type="radio"
                id="startProgram"
                name="question3"
                value="startProgram()"
                onChange={handleInputChange}
              />
              startProgram()
            </label>
          </div>

          <button type="submit" className="quiz-submit-button">Submit Answers</button>
        </form>
        {quizScore !== null && (
          <div className="quiz-result">
            {quizScore === 3 ? (
              <div>
                <h3 style={{ color: '#2F855A' }}>Excellent! You have a solid understanding of basic syntax.</h3>
                <div className="navigation-buttons">
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/overview')}>
                    Back
                  </button>
                  <button className="nav-button" onClick={() => navigate('/modules/beginner/basic1/data-types')}>
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ color: '#E53E3E' }}>Your Score: {quizScore}/3</h3>
                <p>Good try! Review the content and try again to improve your score.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicSyntax;
