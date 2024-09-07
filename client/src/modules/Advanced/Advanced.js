import React, { useState } from 'react';
import CodeEditor from '../../modules/CodeEditor/CodeEditor';

const Advance = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [showFinalOutput, setShowFinalOutput] = useState(false);
  const [htmlCode, setHtmlCode] = useState('');  // Store HTML code
  const [jsCode, setJsCode] = useState('');      // Store JS code

  const steps = [
    {
      title: 'Step 1: Set up HTML Structure',
      instructions: 'Create a basic HTML structure with a heading and input field.',
      initialCode: `<h1>Guess the Number Game</h1>\n<input type="text" id="guessInput" placeholder="Enter your guess">\n<button>Submit Guess</button>`,
      solutionCode: `<h1>Guess the Number Game</h1>\n<input type="text" id="guessInput" placeholder="Enter your guess">\n<button id="submitGuess">Submit Guess</button>`,
      language: 'html',
    },
    {
      title: 'Step 2: Generate Random Number',
      instructions: 'Write JavaScript to generate a random number between 1 and 100 and store it in a variable.',
      initialCode: `let randomNumber = Math.floor(Math.random() * 100) + 1;\nconsole.log(randomNumber);`,
      solutionCode: `let randomNumber = Math.floor(Math.random() * 100) + 1;\nconsole.log(randomNumber);`,
      language: 'javascript',
    },
    {
      title: 'Step 3: Validate User Input',
      instructions: 'Write a JavaScript function to validate and compare the player’s guess to the random number.',
      initialCode: `function validateGuess(guess) {\n  if (guess === randomNumber) {\n    return 'Correct!';\n  } else if (guess > randomNumber) {\n    return 'Too high!';\n  } else {\n    return 'Too low!';\n  }\n}`,
      solutionCode: `function validateGuess(guess) {\n  if (guess === randomNumber) {\n    return 'Correct!';\n  } else if (guess > randomNumber) {\n    return 'Too high!';\n  } else {\n    return 'Too low!';\n  }\n}`,
      language: 'javascript',
    },
    {
      title: 'Step 4: Add Logic for Player\'s Input',
      instructions: 'Use JavaScript to capture the player’s guess and provide feedback after each guess.',
      initialCode: `document.getElementById('submitGuess').addEventListener('click', function() {\n  const guess = Number(document.getElementById('guessInput').value);\n  const result = validateGuess(guess);\n  alert(result);\n});`,
      solutionCode: `document.getElementById('submitGuess').addEventListener('click', function() {\n  const guess = Number(document.getElementById('guessInput').value);\n  const result = validateGuess(guess);\n  alert(result);\n});`,
      language: 'javascript',
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowSolution(false); // Hide solution when moving to the next step
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowSolution(false); // Hide solution when moving back
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const handleCodeChange = (code, language) => {
    if (language === 'html') {
      setHtmlCode(code); // Store the HTML code
    } else if (language === 'javascript') {
      setJsCode(code);   // Store the JS code
    }
  };

  const runFullGame = () => {
    const fullCode = `
      <html>
        <body>
          ${htmlCode}
          <script>
            ${jsCode}
          </script>
        </body>
      </html>
    `;
    return fullCode;
  };

  return (
    <div className="project-container">
      <h1>Project: Build a "Guess the Number" Game</h1>

      <h2>{steps[currentStep].title}</h2>
      <p>{steps[currentStep].instructions}</p>

      {/* Code Editor for each step */}
      <CodeEditor 
        initialCode={steps[currentStep].initialCode} 
        language={steps[currentStep].language} 
        apiUrl={`http://localhost:5000/api/execute-${steps[currentStep].language}`} 
        onCodeChange={(code) => handleCodeChange(code, steps[currentStep].language)}
      />

      {/* Show Solution Button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={toggleSolution}
        >
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </button>
      </div>
      {showSolution && (
        <pre className="solution-code">
          {steps[currentStep].solutionCode}
        </pre>
      )}

      {/* Navigation Buttons */}
      <div className="navigation-buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2E6F40',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
            fontSize: '16px',
          }}
        >
          Previous Step
        </button>
        <button
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2E6F40',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: currentStep === steps.length - 1 ? 'not-allowed' : 'pointer',
            fontSize: '16px',
          }}
        >
          Next Step
        </button>
      </div>

      {/* Show the final project when the last step is completed */}
      {currentStep === steps.length - 1 && (
        <div>
          <button
            onClick={() => setShowFinalOutput(true)}
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              backgroundColor: '#2E6F40',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Run Full Game
          </button>

          {showFinalOutput && (
            <div style={{ marginTop: '20px' }}>
              {/* Display final game output */}
              <iframe
                srcDoc={runFullGame()} // Merging HTML and JS code to display
                title="Final Game Output"
                style={{ width: '100%', height: '400px', border: '1px solid black' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Advance;
