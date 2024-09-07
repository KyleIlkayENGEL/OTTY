import React from 'react';
import './SocioEmotional.css';

const SocioEmotional = () => {
  return (
    <div className="socio-emotional-container">
      <h1>Socio-Emotional Skills</h1>
      <p>Exercises for Communication, Negotiation, and Teamwork.</p>

      <div className="skills-cards-container">
        <div className="skill-card">
          <h2>Communication</h2>
          <p>Improve your communication skills through practical exercises.</p>
          <button className="card-link" onClick={() => window.location.href='/skills/socio-emotional/communication'}>
            Start Exercises
          </button>
        </div>

        <div className="skill-card">
          <h2>Negotiation</h2>
          <p>Enhance your negotiation skills by tackling real-world scenarios.</p>
          <button className="card-link" onClick={() => window.location.href='/skills/socio-emotional/negotiation'}>
            Start Exercises
          </button>
        </div>

        <div className="skill-card">
          <h2>Teamwork</h2>
          <p>Learn effective teamwork strategies to boost group productivity.</p>
          <button className="card-link" onClick={() => window.location.href='/skills/socio-emotional/teamwork'}>
            Start Exercises
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocioEmotional;
