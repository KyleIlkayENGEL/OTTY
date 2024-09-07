import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import happyOtty from '../../assets/images/happyotty.png';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  let level;
  let path;

  if (score < 5) {
    level = 'Beginner';
    path = '/modules/beginner';
  } else if (score < 8) {
    level = 'Intermediate';
    path = '/modules/intermediate';
  } else {
    level = 'Advanced';
    path = '/modules/advanced';
  }

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="results-container">
      <img src={happyOtty} alt="Celebrating otter" className="results-image" />
      <h1>Quiz Results</h1>
      <p>You scored {score} out of 15</p>
      <p>Your level is: {level}</p>
      <p>Let's continue our journey on the {level} path.</p>
      <button onClick={handleClick}>Go to your study path</button>
    </div>
  );
};

export default Results;
