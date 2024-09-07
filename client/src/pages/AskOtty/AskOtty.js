import React, { useState } from 'react';
import axios from 'axios';
import './AskOtty.css';

const AskOtty = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = {
      sender: 'user',
      text: input,
    };

    // Append the user message to the current messages
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/openai', { prompt: input });

      // Log the response to check what is being returned
      console.log('Received response:', response.data);

      // Create the bot message based on the response
      const botMessage = {
        sender: 'otty',
        text: response.data.text || 'No response received', // Ensure that the response is accessed correctly
      };

      // Append the bot message to the current messages
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message to Hugging Face API:', error);
      const errorMessage = {
        sender: 'otty',
        text: 'Sorry, something went wrong.',
      };

      // Append the error message to the current messages
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="ask-otty-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Ask Otty..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AskOtty;
