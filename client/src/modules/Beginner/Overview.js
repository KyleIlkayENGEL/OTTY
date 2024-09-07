import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.css';

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-page-container">
      <h1>Overview: Basics of Programming I</h1>
      <p>Welcome to the Basics of Programming I. In this module, you will learn about the fundamental concepts that form the building blocks of programming.</p>

      <div className="lesson-section">
        <h2>Introduction to Computer Programs</h2>
        <p>
          Before getting into computer programming, let's first understand computer programs and what they do.
        </p>
        <p>
          A computer program is a sequence of instructions written using a Computer Programming Language to perform a specified task by the computer.
        </p>
        <p>The two important terms used in the above definition are:</p>
        <ul className="list-disc pl-5">
           <li><strong>Sequence of instructions</strong></li>
           <li><strong>Computer Programming Language</strong></li>
        </ul>
        <p>
          To understand these terms, consider a situation where someone asks you how to get to a nearby KFC. What exactly do you do to tell them the way to go to KFC?
        </p>
        <p>
          You would use a human language to give the steps to get to KFC, like this:
        </p>
        <blockquote className="pl-4 border-l-4 border-gray-300 text-gray-700">
          First, go straight. After half a kilometer, take a left at the red light. Then, drive for about a kilometer and you will find KFC on your right.
        </blockquote>
        <p>
          Here, you used the English language to give several steps that need to be followed in sequence to reach KFC:
        </p>
        <ul className="list-disc pl-5">
          <li>Go straight</li>
          <li>Drive half a kilometer</li>
          <li>Take a left</li>
          <li>Drive around one kilometer</li>
          <li>Search for KFC on your right side</li>
        </ul>
        <p>
          Now, try to map the situation with a computer program. The above sequence of instructions is actually a Human Program written in English Language, which instructs on how to reach KFC from a given starting point. This same sequence could have been given in Spanish, Hindi, Arabic, or any other human language, provided the person seeking direction knows any of these languages.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Video: Introduction to Computer Programs</h2>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/ifo76VyrBYo" 
            title="Introduction to Computer Programs" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Computer Programming Language</h2>
        <p>
          Now, let's go back and try to understand a computer program, which is a sequence of instructions written in a Computer Language to perform a specified task by the computer. Following is a simple program written in Python programming Language:
        </p>
        <pre><code>print("Hello, World!")</code></pre>
        <p>
          The above computer program instructs the computer to print "Hello, World!" on the computer screen.
        </p>
        <p>
          A computer program is also called computer software, which can range from two lines to millions of lines of instructions.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Understanding Programming Languages</h2>
        <p>
          We assume you are well aware of the English Language, which is a well-known Human Interface Language. English has a predefined grammar, which needs to be followed to write English statements in a correct way. Likewise, most of the Human Interface Languages (Hindi, English, Spanish, French, etc.) are made of several elements like verbs, nouns, adjectives, adverbs, propositions, and conjunctions, etc.
        </p>
        <p>
          Similar to Human Interface Languages, Computer Programming Languages are also made of several elements. We will take you through the basics of those elements and make you comfortable to use them in various programming languages. These basic elements include:
        </p>
        <ul className="list-disc pl-5">
          <li>Basic Syntax</li>
          <li>Data Types</li>
          <li>Variables</li>
          <li>Keywords</li>
          <li>Basic Operators</li>
          <li>Decision Making</li>
          <li>Loops</li>
          <li>Numbers</li>
          <li>Characters</li>
          <li>Arrays, Lists</li>
          <li>Strings</li>
          <li>Functions</li>
        </ul>
        <p>
          We will explain all these elements in subsequent chapters with examples using different programming languages. First, we will try to understand the meaning of all these terms in general and then, we will see how these terms can be used in different programming languages.
        </p>
      </div>

      <div className="lesson-section">
        <h2>How algorithms shape our world?</h2>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/ENWVRcMGDoU?t=646s" 
            title="How algorithms shape our world? " 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="lesson-section">
        <h2>Algorithm</h2>
        <p>
          From a programming point of view, an algorithm is a step-by-step procedure to resolve any problem. An algorithm is an effective method expressed as a finite set of well-defined instructions.
        </p>
        <p>
          Thus, a computer programmer lists down all the steps required to resolve a problem before writing the actual code. Following is a simple example of an algorithm to find out the largest number from a given list of numbers:
        </p>
        <ol className="list-decimal pl-5">
          <li>Get a list of numbers L1, L2, L3....LN</li>
          <li>Assume L1 is the largest, Largest = L1</li>
          <li>Take next number Li from the list and do the following</li>
          <li>If Largest is less than Li, Largest = Li</li>
          <li>If Li is the last number from the list, then print value stored in Largest and come out</li>
          <li>Else repeat the same process starting from step 3</li>
        </ol>
      </div>

      <div className="lesson-section">
        <h2>Conclusion</h2>
        <p>
          These are the basic concepts that form the foundation of programming. Understanding these will give you a solid start to your programming journey.
        </p>
        <div className="button-container"> {/* Use this class to arrange buttons horizontally */}
          <button className="navigate-button" onClick={() => navigate('/modules/beginner/basic1')}>
            Back
          </button>
          <button className="navigate-button" onClick={() => navigate('/modules/beginner/basic1/basic-syntax')}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
