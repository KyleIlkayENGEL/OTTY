import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SkillsTest.css';
import varkotty from '../../../assets/images/varkotty.png';

const questions = [
  { question: 'You have a test coming up. You would prepare by:', options: ['Reading notes', 'Watching videos', 'Discussing with friends', 'Using charts or diagrams'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You want to learn a new software. You would:', options: ['Read the manual', 'Watch a tutorial', 'Ask someone to show you', 'Experiment on your own'], category: ['R', 'V', 'A', 'K'] },
  { question: 'When you cook a new dish, you prefer to:', options: ['Follow a written recipe', 'Watch a cooking show', 'Ask someone how to do it', 'Follow your instincts'], category: ['R', 'V', 'A', 'K'] },
  { question: 'To understand a new concept, you prefer to:', options: ['Read the explanation', 'See a diagram', 'Listen to a lecture', 'Try it out yourself'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You need directions to a new place. You would:', options: ['Read the instructions', 'Look at a map', 'Ask someone for directions', 'Use a GPS or experiment'], category: ['R', 'V', 'A', 'K'] },
  { question: 'When solving a problem, you prefer to:', options: ['Read about it', 'Visualize it', 'Discuss it', 'Use a hands-on approach'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You remember best by:', options: ['Reading notes', 'Seeing pictures', 'Listening to explanations', 'Doing something active'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You prefer a teacher who:', options: ['Provides detailed handouts', 'Uses visuals', 'Encourages discussion', 'Gives practical exercises'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You choose to study a new topic by:', options: ['Reading books', 'Watching documentaries', 'Attending workshops', 'Doing practical activities'], category: ['R', 'V', 'A', 'K'] },
  { question: 'When planning a project, you prefer to:', options: ['Write out a detailed plan', 'Create a visual outline', 'Discuss ideas', 'Experiment and adjust as you go'], category: ['R', 'V', 'A', 'K'] },
  { question: 'In your free time, you prefer:', options: ['Reading', 'Watching movies', 'Talking with friends', 'Playing sports or doing crafts'], category: ['R', 'V', 'A', 'K'] },
  { question: 'When learning a new language, you prefer:', options: ['Reading grammar rules', 'Watching videos', 'Conversing with others', 'Practicing speaking or writing'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You remember names better when you:', options: ['See them written down', 'See a picture of the person', 'Hear them spoken', 'Associate them with an action'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You are most productive when:', options: ['Reading and writing', 'Using visual aids', 'Interacting with others', 'Engaging in physical activity'], category: ['R', 'V', 'A', 'K'] },
  { question: 'You find it easiest to learn when:', options: ['Reading materials', 'Viewing visual content', 'Participating in discussions', 'Doing hands-on activities'], category: ['R', 'V', 'A', 'K'] },
];

const SkillsTest = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [results, setResults] = useState('');
  const navigate = useNavigate(); // eslint-disable-line no-unused-vars

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const scores = { V: 0, A: 0, R: 0, K: 0 };

    answers.forEach((answer, index) => {
      const selectedCategory = questions[index].category[answer];
      scores[selectedCategory]++;
    });

    const dominantCategory = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));

    let resultText = '';
    switch (dominantCategory) {
      case 'V':
        resultText = 'Your dominant learning style is Visual. Visual learners understand and retain information best when it is presented in a visual format such as diagrams, charts, pictures, and videos. To enhance your learning, incorporate more visual aids into your study routine. Create mind maps, use color-coded notes, and watch educational videos related to your topics. Drawing diagrams or sketches to represent complex concepts can also be highly beneficial. Utilizing visual tools will help you grasp and remember information more effectively, making your learning experience more engaging and productive.';
        break;
      case 'A':
        resultText = 'Your dominant learning style is Auditory. Auditory learners thrive when they can listen to and discuss information. You understand and remember details better through listening and speaking. To maximize your learning, try reading your notes out loud, participating in group discussions, and using mnemonic devices. Listening to podcasts, recordings of lectures, or creating your own audio notes can also be very helpful. Engaging in verbal repetition and explaining concepts to others can further solidify your understanding. Embrace auditory tools to make your educational journey more effective and enjoyable.';
        break;
      case 'R':
        resultText = 'Your dominant learning style is Reading/Writing. Learners with this style excel through reading and writing activities. You prefer to interact with text-based materials, such as books, articles, and notes. To enhance your learning, focus on taking thorough notes, writing summaries, and creating lists. Reading extensively and organizing your notes in a structured manner will help you retain information. Additionally, engaging in writing exercises, such as essays or reflective journals, can deepen your comprehension. Embrace these techniques to optimize your learning process and make your studies more effective.';
        break;
      case 'K':
        resultText = 'Your dominant learning style is Kinesthetic. Kinesthetic learners excel through hands-on activities and practical experiences. You learn best by doing and prefer engaging directly with the material you are studying. To optimize your learning experience, consider incorporating physical activities into your study routine, such as using flashcards, building models, or conducting experiments. Additionally, taking frequent breaks to move around can help maintain your focus and retention. Utilizing interactive tools and engaging in simulations or role-playing exercises can also enhance your learning process. Embrace these techniques to make your educational journey more effective and enjoyable.';
        break;
      default:
        resultText = 'You have a balanced learning style.';
    }

    setResults(resultText);
  };

  return (
    <div className="skills-test-container">
      {currentQuestion === -1 ? (
        <div className="intro">
          <img src={varkotty} alt="Otter taking Vark test" className="intro-image" />
          <h1>VARK Skills Test</h1>
          <p>Please take this quick skills test to help us understand your dominant learning style.</p>
          <button onClick={handleNext}>Start Test</button>
        </div>
      ) : (
        <div className="card">
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((opt, idx) => (
            <label key={idx}>
              <input
                type="radio"
                value={idx}
                checked={answers[currentQuestion] === idx}
                onChange={() => handleChange(idx)}
              />
              {opt}
            </label>
          ))}
          <button onClick={handleNext}>
            {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      )}
      {results && (
        <div className="results">
          <h2>Results</h2>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
};

export default SkillsTest;
