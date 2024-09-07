import React, { useState } from 'react';
import './KnowledgeAndUnderstanding.css';

const KnowledgeAndUnderstanding = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = {
    q1: "Algorithms are a set of rules or instructions given to a computer to help it perform tasks.",
    q2: "Algorithms play a key role in modern technology by powering search engines, social media feeds, recommendation systems, and more.",
    q3: "Challenges include bias in algorithms, ethical considerations, and the complexity of ensuring fairness."
  };

  const handleStartExercise = (exercise) => {
    setActiveExercise(exercise);
    setShowResult(false);
    setScore(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;

    if (e.target.elements.q1 && e.target.elements.q1.value.toLowerCase().includes(correctAnswers.q1.toLowerCase())) newScore += 1;
    if (e.target.elements.q2 && e.target.elements.q2.value.toLowerCase().includes(correctAnswers.q2.toLowerCase())) newScore += 1;
    if (e.target.elements.q3 && e.target.elements.q3.value.toLowerCase().includes(correctAnswers.q3.toLowerCase())) newScore += 1;

    setScore(newScore);
    setShowResult(true);
  };

  const exercises = {
    'reading-comprehension': (
      <div className="knowledge-skills-container">
        <h1>Exercise 1: Reading Comprehension</h1>
        <p>Please read the passage below carefully and answer the following questions.</p>

        <div className="passage">
          <h2>Passage Title: The Role of Algorithms in Modern Technology</h2>
          <p>
            Algorithms are a set of rules or instructions given to a computer to help it perform tasks. In today’s world,
            algorithms power everything from search engines and social media feeds to recommendation systems on e-commerce websites.
            These algorithms are designed to process vast amounts of data quickly and make decisions based on patterns and rules.
            However, as algorithms become more pervasive, they also raise significant challenges, including bias in decision-making,
            ethical concerns, and the difficulty of ensuring fairness across diverse populations.
          </p>
        </div>

        {!showResult ? (
          <form onSubmit={handleSubmit} className="questions-form">
            <div className="question">
              <label htmlFor="q1">1. What is an algorithm?</label>
              <textarea id="q1" name="q1" placeholder="Type your answer here..." />
            </div>

            <div className="question">
              <label htmlFor="q2">2. What roles do algorithms play in modern technology?</label>
              <textarea id="q2" name="q2" placeholder="Type your answer here..." />
            </div>

            <div className="question">
              <label htmlFor="q3">3. What are some challenges associated with algorithms?</label>
              <textarea id="q3" name="q3" placeholder="Type your answer here..." />
            </div>

            <button type="submit" className="submit-button">Submit Answers</button>
          </form>
        ) : (
          <div className="result">
            <h2>Your Score: {score}/3</h2>
            <p>{score === 3 ? 'Excellent! You have a strong understanding.' : 'Review your answers and try again.'}</p>
            <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'fact-recall': (
      <div className="knowledge-skills-container">
        <h1>Exercise 2: Fact Recall</h1>
        <p>Test your memory by recalling key facts from the passage on algorithms.</p>

        <div className="question">
          <p>1. Define what an algorithm is in your own words.</p>
          <textarea placeholder="Type your answer here..." />
        </div>

        <div className="question">
          <p>2. List at least three roles that algorithms play in modern technology.</p>
          <textarea placeholder="Type your answer here..." />
        </div>

        <div className="question">
          <p>3. What are some ethical challenges associated with algorithms?</p>
          <textarea placeholder="Type your answer here..." />
        </div>

        <button className="submit-button" onClick={() => setShowResult(true)}>Submit Answers</button>
        {showResult && (
          <div className="result">
            <h2>Review your answers based on the passage provided earlier.</h2>
            <button onClick={() => handleStartExercise(null)} className="back-button">Back to Exercises</button>
          </div>
        )}
      </div>
    ),
    'concept-mapping': (
      <div className="knowledge-skills-container">
        <h1>Exercise 3: Concept Mapping</h1>
        <p>Create a concept map that visually organizes the relationships between the key ideas mentioned in the passage about algorithms.</p>
        <p>Draw your concept map on a sheet of paper or use a digital tool, and identify the following:</p>
        <ul>
          <li>Main concept: Algorithms</li>
          <li>Supporting concepts: Roles, Challenges, Ethical Concerns</li>
          <li>Connections between concepts</li>
        </ul>
        <p>Once completed, compare your concept map to the passage and reflect on the connections you've made.</p>

        <button className="back-button" onClick={() => handleStartExercise(null)}>Back to Exercises</button>
      </div>
    ),
  };

  return activeExercise ? exercises[activeExercise] : (
    <div className="knowledge-skills-container">
      <h1>Knowledge and Understanding</h1>
      <p>Enhance your knowledge base and comprehension skills with the following exercises:</p>

      <div className="exercise-card">
        <h2>Exercise 1: Reading Comprehension</h2>
        <p>Read the provided passage and answer the following questions to assess your understanding.</p>
        <button onClick={() => handleStartExercise('reading-comprehension')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 2: Fact Recall</h2>
        <p>Recall important facts from the lesson and test your memory.</p>
        <button onClick={() => handleStartExercise('fact-recall')} className="start-button">Start Exercise</button>
      </div>

      <div className="exercise-card">
        <h2>Exercise 3: Concept Mapping</h2>
        <p>Create a concept map to visually organize and understand the relationships between key ideas.</p>
        <button onClick={() => handleStartExercise('concept-mapping')} className="start-button">Start Exercise</button>
      </div>
    </div>
  );
};

export default KnowledgeAndUnderstanding;
