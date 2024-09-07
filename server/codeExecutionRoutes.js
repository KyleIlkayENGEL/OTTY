const express = require('express');
const router = express.Router();
const { VM } = require('vm2');

// HTML Execution Route
router.post('/execute-html', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ result: 'No HTML code provided' });
  }
  // Return the HTML code back for rendering
  res.json({ result: code });
});

// JavaScript Execution Route

router.post('/execute-js', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ result: 'No JavaScript code provided' });
  }

  try {
    let logOutput = [];

    // Create a new VM with a custom console to capture logs
    const vm = new VM({
      sandbox: {
        console: {
          log: (...args) => {
            logOutput.push(args.join(' '));  // Capture all log outputs
          }
        }
      }
    });

    vm.run(code);  // Run the code inside VM

    // Send the console.log output (or any other output)
    res.json({ result: logOutput.join('\n') || 'No output' });
  } catch (error) {
    console.error('Error during execution:', error);
    res.status(500).json({ result: `Error: ${error.message}` });
  }
});




// CSS Execution Route
router.post('/execute-css', (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ result: 'No CSS code provided' });
  }
  // Return the CSS code back for rendering
  res.json({ result: code });
});

module.exports = router;
