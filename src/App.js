import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userChoice, setUserChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTrunResult] = useState(null);
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver,setGameOver] = useState(false);

  const choices = ['rock','paper','scissors']

  const handleOnClick = (choice) => {
    setUserChoice(choice)
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if(userPoints <= 4 &&  computerPoints <= 4) {
      if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
        const updateUserPoints = userPoints + 1;
        setUserPoints(updateUserPoints)
        setTrunResult('User got the point')
        if(updateUserPoints === 5) {
          setGameOver(true)
          setResult('user wins')
        }
      }

      if(comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
        const updatedComputerPoits = computerPoints + 1;
        setComputerPoints(updatedComputerPoits)
        setTrunResult('computer got the point')
        if(updatedComputerPoits === 5){
          setGameOver(true)
          setResult('Computer wins')
        }
      }

      if(comboMoves === 'paperrocks' || comboMoves === 'scissorscissor' || comboMoves === 'paperpaper'){
        setTrunResult('No one Got a point')
      }
    }
  },[userChoice,computerChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock paper Scissors</h1>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>
      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`}/>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`}/>
        </div>
      </div>

      <div children='button-div'>
        {choices.map((choice,index) => 
        <button className='button' key = {index} onClick = {() => handleOnClick(choice)} disabled = {gameOver}>
          {choice}
        </button>
        )}
      </div>
      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className='button-div'>
        {gameOver && 
        <button className='button' onClick={() => reset()}> Reset Game</button>
        }
      </div>

    </div>
  );

}

export default App;

