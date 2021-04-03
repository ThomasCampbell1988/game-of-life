import React, { useState } from 'react'
import './App.css';
import GameOfLifeGrid from './components/GameOfLifeGrid';
import GameOfLife from './game/GameOfLife';

function App() {

  let [liveCells, setLiveCells] = useState([{x:1, y:1}])
  console.log(liveCells)
  let gameOfLife = new GameOfLife(liveCells)

  let step = () => {
    gameOfLife.step()
    setLiveCells(gameOfLife.liveCells)
  }

  return (
    <div className="App">
      <GameOfLifeGrid
        liveCells={gameOfLife.liveCells}
        onCellClickedListener={( (x,y) => {
          console.log(`clicked: ${x}, ${y}`)
          gameOfLife.toggleCell(x, y)
          setLiveCells(gameOfLife.liveCells)
        })}
      />
      <button onClick={step}>Step</button>
    </div>
  );
}

export default App;
