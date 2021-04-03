import { assert } from 'chai'
import GameOfLife from './GameOfLife'

describe('GameOfLife', () => {

    it('should be initialised with no live cells', () => {
        let game = new GameOfLife()
        assert.deepStrictEqual(game.liveCells, [])
    })

    it('should be initialised with cells passed in', () => {
        let initialCells = [ {x: 1, y: 1} ]
        let game = new GameOfLife(initialCells)
        assert.deepStrictEqual(game.liveCells, [{x: 1, y: 1}])
    })

    it('should remain empty when no live cells', () => {
        let game = new GameOfLife()
        game.step()
        assert.deepStrictEqual(game.liveCells, [])
    })

    it('should become empty if only one live cell', () => {
        let initialCells = [ {x: 1, y: 1} ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.deepStrictEqual(game.liveCells, [])
    })

    it('cell should survive if has 2 neighbours', () => {
        let initialCells = [
            {x: 0, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 2},
        ]
        let game = new GameOfLife(initialCells)
        game.step()

        assert.ok(game.liveCells.find(cell => cell.x === 1 && cell.y === 1))
    })

    it('cell should survive if has 3 neighbours', () => {
        let initialCells = [
            {x: 0, y: 0},
            {x: 1, y: 1},
            {x: 2, y: 2},
            {x: 2, y: 0},
        ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.ok(game.liveCells.find(cell => cell.x === 1 && cell.y === 1))
    })

    it('cell should die if has more than 3 neighbours', () => {
        let initialCells = [
            {x: 0, y: 0},
            {x: 1, y: 1},
            {x: 0, y: 2},
            {x: 2, y: 0},
            {x: 2, y: 2},
        ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.notOk(game.liveCells.find(cell => cell.x === 1 && cell.y === 1))
    })

    it('dead cell should become alive if exactly 3 neighbours', () => {
        let initialCells = [
            {x: 0, y: 0},
            {x: 0, y: 2},
            {x: 2, y: 2},
        ]
        let game = new GameOfLife(initialCells)
        game.step()
        assert.deepStrictEqual(game.liveCells, [{x: 1, y: 1}])
    })
    
})
