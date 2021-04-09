import { assert } from 'chai'
import Cell from './Cell'
import CellSet from './CellSet'

describe('CellSet', () => {

    it('Can add a single Cell', () => {
        let cell = new Cell(0, 0)
        let set = new CellSet()
        set.add(cell)
        assert.equal(set.size(), 1)
    })

    it('Can add multiple diferent Cells', () => {
        let set = new CellSet()
        set.add(new Cell(0, 0))
        set.add(new Cell(1, 0))
        assert.equal(set.size(), 2)
    })

    it('Can check if set has Cell', () => {
        let set = new CellSet()
        set.add(new Cell(0, 0))
        assert.isTrue(set.has(new Cell(0, 0)))
    })

    it('Adding duplicates does not increase size of Set', () => {
        let set = new CellSet()
        set.add(new Cell(0, 0))
        set.add(new Cell(0, 0))
        assert.equal(set.size(), 1)
    })

    it('Can delete cell', () => {
        let set = new CellSet()
        set.add(new Cell(0, 0))
        set.add(new Cell(1, 0))
        set.add(new Cell(0, 1))

        set.delete(new Cell(0, 0))
        
        assert.equal(set.size(), 2)
        assert.isTrue(set.has(new Cell(1, 0)))
        assert.isTrue(set.has(new Cell(0, 1)))
    })

    it('Removes dupicates when init a set', () => {
        let set = new CellSet([
            new Cell(0, 0),
            new Cell(0, 0),
            new Cell(1, 1),
            new Cell(1, 0),
            new Cell(0, 0),
            new Cell(0, 0),
            new Cell(1, 0),
            new Cell(0, 1),
            new Cell(0, 1),
            new Cell(1, 1),
        ])
        assert.equal(set.size(), 4)
        assert.isTrue(set.has(new Cell(0, 0)))
        assert.isTrue(set.has(new Cell(1, 0)))
        assert.isTrue(set.has(new Cell(0, 1)))
        assert.isTrue(set.has(new Cell(1, 1)))
    })
})