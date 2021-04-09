import React from 'react'
import './GameOfLifeGrid.css'
import LiveCell from './LiveCell'
import DeadCell from './DeadCell'

function GameOfLifeGrid({liveCells, onCellClickedListener, width, height}) {

    let items = []
    for(let i=0; i<width; i++) {
        for(let j=0; j<height; j++) {
            if(liveCells.some( item => item.x === i && item.y === j)) {
                items.push((<LiveCell onClick={() => {onCellClickedListener(i, j)}}/>))
            } else {
                items.push((<DeadCell onClick={() => {onCellClickedListener(i, j)}}/>))
            }
        }
    }
    return (
        <div
            className="game-of-life-grid"
            style={{
                gridTemplateColumns: `repeat(${width}, ${100 / width}%)`,
                gridTemplateRows: `repeat(${height}, ${100 / height}%)`
            }}>
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
