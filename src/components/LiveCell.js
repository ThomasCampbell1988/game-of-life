import React from 'react'
import './GameOfLifeGrid.css'

function LiveCell({onClick}) {
    return (
        <div className="cell live" onClick={onClick}>
            
        </div>
    )
}

export default LiveCell
