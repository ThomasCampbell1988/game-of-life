
export class GameOfLife {

    constructor(initiallLiveCells = []) {
        this.liveCells = initiallLiveCells
    }

    toggleCell(x, y) {
        if (existsInCells( {x, y}, this.liveCells)) {
            this.liveCells = this.liveCells.filter(cell => cell.x !== x || cell.y !== y)
        } else {
            let copy = this.liveCells.slice()
            copy.push({'x': x, 'y': y})
            this.liveCells = copy;
        }
    }

    step() {
        let nextState = []

        this.liveCells.forEach(liveCell => {
            let liveNeighbours = getLiveNeighboursForCell(liveCell, this.liveCells)
            if(liveNeighbours.length >= 2 && liveNeighbours.length < 4) {
                nextState.push(liveCell)
            }
        })

        let deadNeighbours = this.liveCells.reduce( (acc, liveCell) => {
            getNeighbouringCells(liveCell).forEach(neighbour => {
                if(!existsInCells(neighbour, this.liveCells) && !existsInCells(neighbour, acc)) {
                    acc.push(neighbour)
                }
            })
            return acc
        }, [])

        deadNeighbours.forEach( deadNeighbour => {
            let liveNeighbours = getLiveNeighboursForCell(deadNeighbour, this.liveCells)
            if(liveNeighbours.length == 3) {
                nextState.push(deadNeighbour)
            }
        })

        this.liveCells = nextState
    }

}

const getLiveNeighboursForCell = function(targetCell, liveCells) {
    let targetX = targetCell.x
    let targetY = targetCell.y
    let liveNeighbours = []

    for(let xDiff = -1; xDiff<2; xDiff++) {
        for(let yDiff = -1; yDiff<2; yDiff++) {
            if(xDiff !== 0 || yDiff !== 0) {
                let neighbour = liveCells.find( cell => cell.x === targetX + xDiff && cell.y === targetY + yDiff)
                if(neighbour !== undefined){
                    liveNeighbours.push(neighbour)
                }
            }
        }
    }

    return liveNeighbours
}

const getNeighbouringCells = function(targetCell) {
    let targetX = targetCell.x
    let targetY = targetCell.y
    let neighbours = []

    for(let xDiff = -1; xDiff<2; xDiff++) {
        for(let yDiff = -1; yDiff<2; yDiff++) {
            if(xDiff !== 0 || yDiff !== 0) {
                let neighbour = {
                    x: targetX+xDiff,
                    y: targetY+yDiff
                }
                if(
                    neighbour.x >= 0 && neighbour.x < 20 &&
                    neighbour.y >= 0 && neighbour.y < 20
                ) {
                    neighbours.push(neighbour)
                }
            }
        }
    }

    return neighbours
}

const existsInCells = function(target, cells) {
    return cells.some(cell => target.x == cell.x && target.y == cell.y)
}

export default GameOfLife

