import React, { useState } from 'react'
import './App.css';
import GameOfLifeGrid from './components/GameOfLifeGrid';
import GameOfLife from './game/GameOfLife';

function App() {

  let [liveCells, setLiveCells] = useState([])
  let gameOfLife = new GameOfLife(liveCells, 20, 20)

  let step = () => {
    gameOfLife.step()
    setLiveCells(gameOfLife.liveCells())
  }

  let clear = () => {
    setLiveCells([])
  }

  return (
    <div className="App">
      <div>
        <h1>Game of Life</h1>
      </div>
      <div className="center">
        <GameOfLifeGrid
          liveCells={gameOfLife.liveCells()}
          onCellClickedListener={( (x,y) => {
            gameOfLife.toggleCell(x, y)
            setLiveCells(gameOfLife.liveCells())
          })}
          width={gameOfLife.width}
          height={gameOfLife.height}
        />
      </div>
      <div className="button-container">
        <button className="clear" onClick={clear}>Clear</button>
        <button className="step" onClick={step}>Step</button>
      </div>
    </div>
  );
}

export default App;
