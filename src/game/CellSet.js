
class CellSet {

    constructor(initialCells = []) {
        this.cells = []
        this.addAll(initialCells)
    }

    size() {
        return this.cells.length
    }

    add(cell) {
        if(!this.has(cell)) {
            this.cells.push(cell)
        }
    }

    addAll(cells) {
        cells.forEach(cell => {
            this.add(cell)
        })
    }

    has(cell) {
        return this.cells.some( c => c.x === cell.x && c.y === cell.y)
    }

    delete(cell) {
        this.cells = this.cells.filter(c => c.x !== cell.x || c.y !== cell.y)
    }

    asArray() {
        return this.cells.slice()
    }
}


export default CellSet
