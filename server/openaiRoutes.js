const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/openai', async (req, res) => {
  const { prompt } = req.body;
  console.log("Received prompt:", prompt);

  let structuredPrompt;

  if (prompt.toLowerCase().includes("html")) {
    structuredPrompt = `You are Otty, an AI tutor. Explain what HTML is in a simple and educational way.`;
  } else if (prompt.toLowerCase().includes("study")) {
    structuredPrompt = `You are Otty, an AI tutor. Please give advice on how to study better.`;
  } else if (prompt.toLowerCase().includes("css")) {
    structuredPrompt = `You are Otty, an AI tutor. Explain what CSS is and how it is used in web development.`;
  } else {
    structuredPrompt = `You are Otty, an AI tutor. Please answer the following question in a simple and educational way: ${prompt}`;
  }

  console.log("Structured prompt:", structuredPrompt);

  try {
    const response = await axios.post(`https://api-inference.huggingface.co/models/${process.env.HUGGINGFACE_MODEL_NAME}`, {
      inputs: structuredPrompt
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      },
    });

    console.log("Response from Hugging Face:", response.data);

    // Check if the response has generated text and return it
    if (response.data && response.data[0] && response.data[0].generated_text) {
      res.json({ text: response.data[0].generated_text });
    } else {
      res.json({ text: 'No response generated' });
    }
  } catch (error) {
    console.error('Error with Hugging Face API:', error);

    if (error.response && error.response.data && error.response.data.error) {
      const apiError = error.response.data.error;

      if (apiError.includes('currently loading')) {
        res.status(503).json({ error: 'The AI model is currently loading. Please try again in a couple of minutes.' });
      } else {
        res.status(500).json({ error: 'Error with Hugging Face API: ' + apiError });
      }
    } else {
      res.status(500).json({ error: 'Error with Hugging Face API' });
    }
  }
});

module.exports = router;
