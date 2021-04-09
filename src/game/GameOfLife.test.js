import { assert } from 'chai'
import Cell from './Cell'
import GameOfLife from './GameOfLife'

describe('GameOfLife', () => {

    it('should be initialised with no live cells', () => {
        let game = new GameOfLife()
        assert.deepStrictEqual(game.liveCellSet.size(), 0)
    })

    it('should be initialised with cells passed in', () => {
        let initialCells = [ new Cell(1, 1) ]
        let game = new GameOfLife(initialCells)
        assert.ok(game.liveCellSet.has(new Cell(1, 1)))
    })

    it('should remain empty when no live cells', () => {
        let game = new GameOfLife()
        game.step()
        assert.equal(game.liveCellSet.size(), 0)
    })

    it('should become empty if only one live cell', () => {
        let initialCells = [ new Cell(1, 1) ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.equal(game.liveCellSet.size(), 0)
    })

    it('cell should survive if has 2 neighbours', () => {
        let initialCells = [
            new Cell(0, 0),
            new Cell(1, 1),
            new Cell(2, 2),
        ]
        let game = new GameOfLife(initialCells)
        game.step()

        assert.ok(game.liveCellSet.has(new Cell(1, 1)))
    })

    it('cell should survive if has 3 neighbours', () => {
        let initialCells = [
            new Cell(0, 0),
            new Cell(1, 1),
            new Cell(2, 2),
            new Cell(2, 0)
        ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.ok(game.liveCellSet.has(new Cell(1, 1)))
    })

    it('cell should die if has more than 3 neighbours', () => {
        let initialCells = [
            new Cell(0, 0),
            new Cell(1, 1),
            new Cell(0, 2),
            new Cell(2, 0),
            new Cell(2, 2)
        ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.notOk(game.liveCellSet.has(new Cell(1, 1)))
    })

    it('dead cell should become alive if exactly 3 neighbours', () => {
        let initialCells = [
            new Cell(0, 0),
            new Cell(0, 2),
            new Cell(2, 2)
        ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.ok(game.liveCellSet.has(new Cell(1, 1)))
    })
    
})
