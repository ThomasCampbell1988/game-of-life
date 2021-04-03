import React from 'react'
import './GameOfLifeGrid.css'
import LiveCell from './LiveCell'
import DeadCell from './DeadCell'

function GameOfLifeGrid({liveCells, onCellClickedListener}) {

    let items = []
    for(let i=0; i<20; i++) {
        for(let j=0; j<20; j++) {
            if(liveCells.some( item => item.x === i && item.y === j)) {
                items.push((<LiveCell onClick={() => {onCellClickedListener(i, j)}}/>))
            } else {
                items.push((<DeadCell onClick={() => {onCellClickedListener(i, j)}}/>))
            }
        }
    }
    return (
        <div className="game-of-life-grid">
            {
                items.map((item, index) => {
                    return (
                        <div className="cellwrapper" key={index}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GameOfLifeGrid
