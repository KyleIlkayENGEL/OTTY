import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './tailwind.css';
import './global.css';

import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import Profile from './pages/Profile/Profile';
import ForumPage from './pages/Forum/ForumPage';
import Login from './pages/Login/Login';
import Settings from './pages/Settings/Settings';
import Dashboard from './pages/Dashboard/Dashboard';
import Quiz from './pages/Quiz/Quiz';
import Results from './pages/Results/Results';
import Beginner from './modules/Beginner/Beginner';
import Basic1 from './modules/Beginner/Basic1';
import Overview from './modules/Beginner/Overview'; 
import BasicSyntax from './modules/Beginner/BasicSyntax'; 
import DataTypes from './modules/Beginner/DataTypes'; 
import Variables from './modules/Beginner/Variables'; 
import Operators from './modules/Beginner/Operators'; 
import Summary from './modules/Beginner/Summary'; 
import FinalQuiz from './modules/Beginner/FinalQuiz'; 
import Basic2 from './modules/Beginner/Basic2';
import Loops from './modules/Beginner/Loops';
import Arrays from './modules/Beginner/Arrays';
import Functions from './modules/Beginner/Functions';
import Summary2 from './modules/Beginner/Summary2'; 
import FinalQuiz2 from './modules/Beginner/FinalQuiz2';
import Dictionary from './modules/Beginner/Dictionary';
import Flashcards from './modules/Beginner/Flashcards';
import WhatIsProgramming from './modules/Beginner/WhatIsProgramming';
import Intermediate from './modules/Intermediate/Intermediate';
import ArraysExercises from './modules/Intermediate/ArraysExercises';
import VariablesExercises from './modules/Intermediate/VariablesExercises';
import LoopsExercises from './modules/Intermediate/LoopsExercises';
import OperatorsExercises from './modules/Intermediate/OperatorsExercises';
import FunctionsExercises from './modules/Intermediate/FunctionsExercises';
import Advanced from './modules/Advanced/Advanced';

import Intellectual from './pages/Skills/Intellectual/Intellectual';
import KnowledgeAndUnderstanding from './pages/Skills/Intellectual/KnowledgeAndUnderstanding';
import CriticalThinking from './pages/Skills/Intellectual/CriticalThinking';
import ProblemSolving from './pages/Skills/Intellectual/ProblemSolving';
import CreativeSkills from './pages/Skills/Intellectual/CreativeSkills';
import Cognitive from './pages/Skills/Cognitive/CognitiveSkills';
import CognitiveSkills from './pages/Skills/Cognitive/CognitiveSkills';
import AbstractReasoning from './pages/Skills/Cognitive/AbstractReasoning';
import LogicalReasoning from './pages/Skills/Cognitive/LogicalReasoning';
import VisualProcessing from './pages/Skills/Cognitive/VisualProcessing';
import PatternIdentification from './pages/Skills/Cognitive/PatternIdentification';
import SocioEmotional from './pages/Skills/SocioEmotional/SocioEmotional';
import Communication from './pages/Skills/SocioEmotional/Communication';
import Negotiation from './pages/Skills/SocioEmotional/Negotiation';
import Teamwork from './pages/Skills/SocioEmotional/Teamwork';
import CareerPath from './pages/CareerPath/CareerPath/CareerPath';
import AskOtty from './pages/AskOtty/AskOtty';
import Courses from './courses/Courses/Courses'; 
import SkillsTest from './pages/Skills/SkillsTest/SkillsTest'; 
import './assets/styles/global.css';
import logo from './assets/images/logo3.png';
import HTMLCourse from './courses/HTML/HTML'; 
import CSSCourse from './courses/CSS/CSS'; 
import JSCourse from './courses/JS/JS'; 


const App = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar logo={logo} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/modules/beginner" element={<Beginner />} />
            <Route path="/modules/beginner/dictionary" element={<Dictionary />} />
            <Route path="/modules/beginner/flashcards" element={<Flashcards />} />
            <Route path="/modules/beginner/what-is-programming" element={<WhatIsProgramming />} />
            <Route path="/modules/beginner/basic1" element={<Basic1 />} />
            <Route path="/modules/beginner/basic1/overview" element={<Overview />} />
            <Route path="/modules/beginner/basic1/basic-syntax" element={<BasicSyntax />} />
            <Route path="/modules/beginner/basic1/data-types" element={<DataTypes />} />
            <Route path="/modules/beginner/basic1/variables" element={<Variables />} />
            <Route path="/modules/beginner/basic1/operators" element={<Operators />} />
            <Route path="/modules/beginner/basic1/summary" element={<Summary />} />
            <Route path="/modules/beginner/basic1/final-quiz" element={<FinalQuiz />} />
            <Route path="/modules/beginner/basic2" element={<Basic2 />} />
            <Route path="/modules/beginner/basic2/loops" element={<Loops />} />
            <Route path="/modules/beginner/basic2/arrays" element={<Arrays/>} />
            <Route path="/modules/beginner/basic2/functions" element={<Functions/>} />
            <Route path="/modules/beginner/basic2/summary2" element={<Summary2 />} />
            <Route path="/modules/beginner/basic2/final-quiz2" element={<FinalQuiz2 />} />

            <Route path="/modules/intermediate" element={<Intermediate />} />
            <Route path="/modules/intermediate/arrays-exercises" element={<ArraysExercises />} />
            <Route path="/modules/intermediate/variables-exercises" element={<VariablesExercises />} />
            <Route path="/modules/intermediate/loops-exercises" element={<LoopsExercises />} />
            <Route path="/modules/intermediate/operators-exercises" element={<OperatorsExercises />} />
            <Route path="/modules/intermediate/functions-exercises" element={<FunctionsExercises />} />

            <Route path="/modules/advanced" element={<Advanced />} />
            
            <Route path="/skills/intellectual" element={<Intellectual />} />
            <Route path="/skills/intellectual/knowledge" element={<KnowledgeAndUnderstanding />} />
            <Route path="/skills/intellectual/critical-thinking" element={<CriticalThinking />} />
            <Route path="/skills/intellectual/problem-solving" element={<ProblemSolving />} />
            <Route path="/skills/intellectual/creative-skill" element={<CreativeSkills/>} />
            <Route path="/skills/cognitive" element={<Cognitive />} />
            <Route path="/skills/cognitive-skills" element={<CognitiveSkills />} />
            <Route path="/skills/cognitive/logical-reasoning" element={<LogicalReasoning />} />
            <Route path="/skills/cognitive/abstract-reasoning" element={<AbstractReasoning />} />
            <Route path="/skills/cognitive/visual-processing" element={<VisualProcessing />} />
            <Route path="/skills/cognitive/pattern-identification" element={<PatternIdentification />} />
            <Route path="/skills/socio-emotional" element={<SocioEmotional />} />
            <Route path="/skills/socio-emotional/communication" element={<Communication />} />
            <Route path="/skills/socio-emotional/negotiation" element={<Negotiation />} />
            <Route path="/skills/socio-emotional/teamwork" element={<Teamwork />} />
            <Route path="/career-path" element={<CareerPath />} />
            <Route path="/ask-otty" element={<AskOtty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/skills/skillstest" element={<SkillsTest />} /> 
            <Route path="/courses/html" element={<HTMLCourse />} /> 
            <Route path="/courses/css" element={<CSSCourse />} /> 
            <Route path="/courses/js" element={<JSCourse />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
