import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intermediate.css';

const Intermediate = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Arrays', description: 'Practice array manipulation and operations.', path: '/modules/intermediate/arrays-exercises' },
    { name: 'Variables', description: 'Practice working with variables and data types.', path: '/modules/intermediate/variables-exercises' },
    { name: 'Loops', description: 'Practice creating and using loops in your code.', path: '/modules/intermediate/loops-exercises' },
    { name: 'Operators', description: 'Practice using operators in JavaScript.', path: '/modules/intermediate/operators-exercises' },
    { name: 'Functions', description: 'Practice creating and using functions.', path: '/modules/intermediate/functions-exercises' }
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="intermediate-container">
      <h1>Intermediate Learning Path</h1>
      <p>Select a topic to practice:</p>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => handleNavigate(category.path)}>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <button className="start-button">Start Practicing</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intermediate;
