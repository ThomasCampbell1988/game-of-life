import React, { useState } from 'react'
import './App.css';
import GameOfLifeGrid from './components/GameOfLifeGrid';
import GameOfLife from './game/GameOfLife';

function App() {

  let [liveCells, setLiveCells] = useState([])
  console.log(liveCells)
  let gameOfLife = new GameOfLife(liveCells)

  let step = () => {
    gameOfLife.step()
    setLiveCells(gameOfLife.liveCells)
  }

  let clear = () => {
    setLiveCells([])
  }

  return (
    <div className="App">
      <div>
        <h1>Game Of Life</h1>
      </div>
      <GameOfLifeGrid
        liveCells={gameOfLife.liveCells}
        onCellClickedListener={( (x,y) => {
          console.log(`clicked: ${x}, ${y}`)
          gameOfLife.toggleCell(x, y)
          setLiveCells(gameOfLife.liveCells)
        })}
      />
      <div class="button-container">
        <button class="clear" onClick={clear}>Clear</button>
        <button class="step" onClick={step}>Step</button>
      </div>
    </div>
  );
}

export default App;
