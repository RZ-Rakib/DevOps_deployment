/* eslint-disable */
import { expect } from 'chai'
import every from '../src/every.js'

describe('every()', () => {

  it('returns true when all elements satisfy the predicate', () => {
    expect(every([2, 4, 6], n => n % 2 === 0)).to.equal(true)
  })

  it('returns false when at least one element fails the predicate', () => {
    expect(every([2, 3, 6], n => n % 2 === 0)).to.equal(false)
  })

  it('returns true for empty arrays (vacuous truth)', () => {
    expect(every([], () => false)).to.equal(true)
  })

  it('passes correct predicate arguments (value, index, array)', () => {
    const values = []
    const indexes = []
    const arr = [10, 20, 30]

    every(arr, (value, index, array) => {
      values.push(value)
      indexes.push(index)
      expect(array).to.equal(arr)
      return true
    })

    expect(values).to.deep.equal([10, 20, 30])
    expect(indexes).to.deep.equal([0, 1, 2])
  })

  it('stops early when predicate returns false', () => {
    let count = 0
    every([1, 2, 3, 4], (n) => {
      count++
      return n < 3
    })
    expect(count).to.equal(3)
  })

  it('returns true when array is null or undefined', () => {
    expect(every(null, () => false)).to.equal(true)
    expect(every(undefined, () => false)).to.equal(true)
  })

  it('returns true when predicate returns truthy values of various types', () => {
    const pred = () => 'non-empty string'
    expect(every([1, 2, 3], pred)).to.equal(true)
  })

  it('returns false when predicate returns a falsey value (false, 0, "", null, undefined)', () => {
    const tests = [
      { arr: [1, 2, 3], pred: () => false },
      { arr: [1, 2, 3], pred: () => 0 },
      { arr: [1, 2, 3], pred: () => '' },
      { arr: [1, 2, 3], pred: () => null },
      { arr: [1, 2, 3], pred: () => undefined }
    ]

    for (const t of tests) {
      expect(every(t.arr, t.pred)).to.equal(false)
    }
  })

  it('works with mixed-type arrays', () => {
    expect(every([true, 1, "ok"], Boolean)).to.equal(true)
    expect(every([true, 0, "ok"], Boolean)).to.equal(false)
  })

  it('throws an error when predicate is not a function', () => {
    expect(() => every([1, 2, 3], null)).to.throw()
    expect(() => every([1, 2, 3], 123)).to.throw()
    expect(() => every([1, 2, 3], {})).to.throw()
  })

})
