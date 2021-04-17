import React, { useState } from 'react';
import './App.css';

//Components

import QuestionCard from './Components/QuestionCard/QuestionCard'

const App = () => {
  

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGamOver] = useState(true);

  const startTrivia = async () => {
    
  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {
    
  }

  return (
    <div className='App'>

      <h1>React Quiz</h1>
      
      <button className='start' onClick={startTrivia}>
        Start
      </button>

      <p className='Score'>
        Score:
      </p>

      <p>
        Loading Questions ...
      </p>

      <QuestionCard />
      
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
