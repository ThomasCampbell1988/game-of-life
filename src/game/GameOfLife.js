
import CellSet from './CellSet'
import Cell from './Cell'

export class GameOfLife {

    constructor(initiallLiveCells = [], width = 10, height = 10) {
        this.liveCellSet = new CellSet(initiallLiveCells)
        this.width = width
        this.height = height
    }

    liveCells() {
        return this.liveCellSet.asArray()
    }

    toggleCell(x, y) {
        const cell =  new Cell(x, y)
        if (this.liveCellSet.has(cell)) {
            this.liveCellSet.delete(cell)
        } else {
            this.liveCellSet.add(cell)
        }
    }

    step() {
        let nextState = new CellSet()

        this.liveCellSet.cells.forEach(liveCell => {
            let liveNeighbours = this.getLiveNeighboursForCell(liveCell)
            if(liveNeighbours.length >= 2 && liveNeighbours.length < 4) {
                nextState.add(liveCell)
            }

            this.getDeadNeighboursForCell(liveCell).forEach(deadNeighbour => {
                liveNeighbours = this.getLiveNeighboursForCell(deadNeighbour)
                if(liveNeighbours.length === 3) {
                    nextState.add(deadNeighbour)
                }
            })
        })

        this.liveCellSet = nextState
    }

    getLiveNeighboursForCell(targetCell) {
        const neighbours = this.getNeighbouringCells(targetCell)
        const liveNeighbours = neighbours.filter(neighbour => this.liveCellSet.has(neighbour))
        return liveNeighbours
    }

    getDeadNeighboursForCell(targetCell) {
        const neighbours = this.getNeighbouringCells(targetCell)
        const deadNeighbours = neighbours.filter(neighbour => !this.liveCellSet.has(neighbour))
        return deadNeighbours
    }
    
    getNeighbouringCells(targetCell) {
        let targetX = targetCell.x
        let targetY = targetCell.y
        let neighbours = []
    
        for(let xDiff = -1; xDiff<2; xDiff++) {
            for(let yDiff = -1; yDiff<2; yDiff++) {
                if(xDiff !== 0 || yDiff !== 0) {
                    let neighbour = new Cell(targetX+xDiff, targetY+yDiff)
                    if(
                        neighbour.x >= 0 && neighbour.x < this.width &&
                        neighbour.y >= 0 && neighbour.y < this.height
                    ) {
                        neighbours.push(neighbour)
                    }
                }
            }
        }
    
        return neighbours
    }

}

export default GameOfLife

