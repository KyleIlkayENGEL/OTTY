import React from 'react';
import './CareerPath.css';
import ottywithglasses from '../../../assets/images/ottywithglasses.png'; 

const CareerPath = () => {
  return (
    <div className="career-path-container">
      <header className="career-header">
      <img src={ottywithglasses} alt="Otty with glasses" className="otty-with-glasses-image" />
        <h1>Career Center</h1>
      </header>

      <section className="career-section">
        <h2>Find the right tech career</h2>
        <p>Get help exploring your options with our free intro course and sorting quiz, or pick from any of our beginner-friendly career paths.</p>

        <div className="career-paths">
          <div className="career-path">
            <h3>Full-Stack Engineer</h3>
            <p>Build software from start to finish, back-end to front-end.</p>
            <button className="start-path-button">Start path</button>
          </div>

          <div className="career-path">
            <h3>Front-End Engineer</h3>
            <p>Work closely with designers to make websites beautiful, responsive, and fast.</p>
            <button className="start-path-button">Start path</button>
          </div>

          <div className="career-path">
            <h3>Back-End Engineer</h3>
            <p>Build the hidden processes that run behind the scenes, like APIs and databases that power the front-end.</p>
            <button className="start-path-button">Start path</button>
          </div>

          <div className="career-path">
            <h3>Computer Science</h3>
            <p>Learn the fundamentals of computer science with Python while learning data structures, algorithms, and more.</p>
            <button className="start-path-button">Start path</button>
          </div>

          <div className="career-path">
            <h3>Data Scientist: Analytics Specialist</h3>
            <p>Use Python and SQL to query, analyze, and visualize data — and communicate findings.</p>
            <button className="start-path-button">Start path</button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CareerPath;
