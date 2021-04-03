import React from 'react'
import './GameOfLifeGrid.css'

function DeadCell({onClick}) {
    return (
        <div className="cell dead" onClick={onClick}>
            
        </div>
    )
}

export default DeadCell
