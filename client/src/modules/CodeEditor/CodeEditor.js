import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import axios from 'axios';
import './CodeEditor.css';  // Include your styles here

const CodeEditor = ({ initialCode, language, apiUrl }) => {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState('');

  const handleRun = () => {
    setResult('');  // Clear previous result

    axios.post(apiUrl, { code })
      .then(response => {
        setResult(response.data.result);
      })
      .catch(error => {
        if (error.response) {
          setResult(`Error: ${error.response.data.result || 'Internal server error'}`);
        } else {
          setResult('Error executing code');
        }
        console.error(error);
      });
  };

  return (
    <div className="editor-container">
      {/* Monaco Editor */}
      <Editor
        height="200px"  // Adjust as needed
        width="100%"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        options={{
          lineNumbers: 'on',
          minimap: { enabled: false },
          theme: 'vs-light',  // Use 'vs-light' for a lighter theme
        }}
      />
      
      {/* Run Button */}
      <button onClick={handleRun} className="run-button">Run</button>
      
      {/* Result Display */}
      <div className="result-output">
        {language === 'html' ? (
          <iframe
            title="code-output"
            srcDoc={result}  // For HTML, display result in iframe
            className="iframe-output"
          />
        ) : (
          <pre>{result}</pre>  // For JavaScript or other text-based results
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
